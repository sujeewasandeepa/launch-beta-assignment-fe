import { useState, useEffect } from 'react';

import Table from './components/Table';
import AddEmployeeForm from './components/AddEmployeeForm';


function App() {

  const [employees, setEmployees] = useState(0);

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

  return (
    <>
      <h1 className='has-text-dark m-5 title'>People</h1>
      <hr />
      <div>
        <input type="dropdown" placeholder="Employee Types" />
        <button>Add People</button>
      </div>

      <Table />
      <AddEmployeeForm />
      
      <h2>
        {employees[0]}
      </h2>
    </>
  )
}

export default App
