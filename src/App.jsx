import Table from './components/Table';
import AddEmployeeForm from './components/AddEmployeeForm';
import { useState } from 'react';

function App() {

  const [addEmployeeForm, setAddEmployeeForm] = useState(false);

  const showEmployeeForm = () => {
    setAddEmployeeForm(true);
  }
  const hideEmployeeForm = () => {
    setAddEmployeeForm(false);
  }

  return (
    <>
      <h1 className='has-text-dark m-5 title'>People</h1>
      <hr />
      <div>
        <input type="dropdown" placeholder="Employee Types" />
        <button onClick={showEmployeeForm}>Add People</button>
      </div>
      {
        addEmployeeForm &&
        <AddEmployeeForm handleHideAddForm={hideEmployeeForm} />
      }
      <Table />

    </>
  )
}

export default App
