import { useState, useEffect } from "react";
import EditEmployeeForms from "./EditEmployeeForm";
import AddEmployeeForm from "./AddEmployeeForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import "../assets/Table.css"

export default function Table(props) {
  const [employees, setEmployees] = useState(null);
  const [editForm, setEditForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [sorted, setSorted] = useState(0);

  const { addEmployeeForm, handleHideAddForm } = props;

  let empType = null;
  empType = props.filterEmployee;

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

  const filterEmployees = async () => {
    if (empType && empType != "Employee Types") {
      let values = {employeeType: empType};
  
      await fetch("http://localhost:5000/employee/filter", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }).then (res => res.json())
      .then(data => setEmployees(data))
      .catch(err => console.error(err));  
    } else if (empType == "Employee Types") {
      fetchEmployees();
    }
  }


  useEffect(() => {
    try {
      fetchEmployees();
    } catch (err) {
      console.error(err);
    }
  }, [])

  useEffect(() => {
    try {
      filterEmployees();
    } catch (err) {
      console.error(err);
    }
  }, [empType])

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

  // handle sorting
  /*  
  I take a variable called sorted and make it 1 if it's sorted by display name.
  If it's already sorted by display name, I reverse it if it is clicked agian. 

  I do the same for ID as well. But for ID I use 2. 
  */
  const sortByDisplayName = () => {
    if (sorted != 1) {
      let sortedEmps = [...employees].sort((a, b) => a.displayName.localeCompare(b.displayName));
      setEmployees(sortedEmps);
      setSorted(1);
    } else if(sorted == 1) {
      let sortedEmps = [...employees].reverse();
      setEmployees(sortedEmps);
      setSorted(0);
    }
  }

  const sortByID = () => {
    if (sorted != 2) {
      let sortedEmps = [...employees].sort((a, b) => a.id.toString().localeCompare(b.id));
      setEmployees(sortedEmps);
      setSorted(2);
    } else if(sorted == 2){
      let sortedEmps = [...employees].reverse();
      setEmployees(sortedEmps);
      setSorted(0);
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
            <th className="px-4 py-3" onClick={sortByDisplayName} id="displayName">
              Display Name
              <span className="ml-2 sortIcon">
                <FontAwesomeIcon icon={ faSort }/>
              </span>
            </th>
            <th className="px-4 py-3" onClick={sortByID} id="empID">
              Emp ID
              <span className="ml-2 sortIcon">
                <FontAwesomeIcon icon={ faSort }/>
              </span>
            </th>
            <th className="px-4 py-3">Designation</th>
            <th className="px-4 py-3">Emp.type</th>
            <th className="px-4 py-3">Experience</th>
          </tr>
        </thead>
        <tbody>
          {employees && employees.map((employee, index) => (
            <tr key={index}>
              <td className="px-5 py-2">{employee.displayName}</td>
              <td className="px-5 py-2">{employee.id.toString().padStart(4, 0)}</td>
              <td className="px-5 py-2">{employee.designation}</td>
              <td className="px-5 py-2">{employee.employeeType}</td>
              <td className="px-5 py-2">{employee.experience}</td>
              <td className="px-5 py-2" onClick={() => { handleShowEditForm(employee) }}><a href="#" className="has-text-info mr-3">Edit</a></td>
              <td className="py-2" onClick={() => { handleDelete(employee) }}><a href="#" className="has-text-danger">Delete</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}