import { useState, useEffect } from "react";
import EditEmployeeForms from "./EditEmployeeForm";
import AddEmployeeForm from "./AddEmployeeForm";

export default function Table(props) {
  const [employees, setEmployees] = useState(null);
  const [editForm, setEditForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const { addEmployeeForm, handleHideAddForm } = props;

  const handleShowEditForm = (employee) => {
    setEditForm(true);
    setSelectedEmployee(employee);
  }

  const handleHideEditForm = () => {
    setEditForm(false);
  }

  const fetchEmployees = async () => {
    await fetch("http://localhost:5000/employee")
      .then(res => res.json())
      .then(data => setEmployees(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    try {
      fetchEmployees();
    } catch (err) {
      console.error(err);
    }
  }, [])

  const handleDelete = async (employee) => {
    const id = { id: employee._id };
    const res = await fetch("http://localhost:5000/employee/delete", {
      method: "DELETE",
      body: JSON.stringify(id),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      fetchEmployees();
      console.log(`Successfully deleted ${employee.displayName} from the database`);
    }
  }

  return (
    <>
      {
        addEmployeeForm &&
        <AddEmployeeForm handleHideAddForm={handleHideAddForm} refresh={fetchEmployees}/>
      }
      {
        editForm && <EditEmployeeForms handleHideEditForm={handleHideEditForm} selectedEmployee={selectedEmployee} refresh={fetchEmployees} />
      }
      <table className="m-5">
        <thead>
          <tr className="">
            <th className="px-4">Display Name</th>
            <th className="px-4">Emp ID</th>
            <th className="px-4">Designation</th>
            <th className="px-4">Emp.type</th>
            <th className="px-4">Experience</th>
          </tr>
        </thead>
        <tbody>
          {employees && employees.map((employee, index) => (
            <tr key={index}>
              <td className="px-4">{employee.displayName}</td>
              <td className="px-4">{employee.id}.toString().padStart(4, 0)</td>
              <td className="px-4">{employee.designation}</td>
              <td className="px-4">{employee.employeeType}</td>
              <td className="px-4">{employee.experience}</td>
              <td onClick={() => { handleShowEditForm(employee) }}><a href="#" className="has-text-info mr-3">Edit</a></td>
              <td onClick={() => { handleDelete(employee) }}><a href="#" className="has-text-danger">Delete</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}