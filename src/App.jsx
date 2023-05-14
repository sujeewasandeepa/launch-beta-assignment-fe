import Table from './components/Table';
import DropDown from './components/DropDown';
import { useState } from 'react';

function App() {

  const [addEmployeeForm, setAddEmployeeForm] = useState(false);
  const [filteredEmployees, setFilteredEmployees] = useState(null);

  const showEmployeeForm = () => {
    setAddEmployeeForm(true);
  }
  const hideEmployeeForm = () => {
    setAddEmployeeForm(false);
  }

  const [empType, setEmpType] = useState("");

  const getEmpType = (value) => {
    setEmpType(value);
  }

  return (
    <>
      <h1 className='has-text-dark m-5 title'>People</h1>
      <hr />
      <div className='mb-5 ml-5'>
        <DropDown items={["Employee Types", "Full time", "Part time", "Contract Basis", "Other"]} dummyPlaceHolder={"Employee Types"} functions={getEmpType} />
        <button className="button is-info ml-2" onClick={showEmployeeForm}>Add People</button>
      </div>

      <Table handleHideAddForm={hideEmployeeForm} addEmployeeForm={addEmployeeForm} filterEmployee={empType} />

    </>
  )
}

export default App
