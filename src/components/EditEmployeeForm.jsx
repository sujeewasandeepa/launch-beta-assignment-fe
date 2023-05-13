import "../assets/FloatingForm.css";
import DropDown from "./DropDown";

import { useState } from "react";

function EditEmployeeForm(props) {
  
  const selectedEmployee = props.selectedEmployee;

  const [gender, setGender] = useState(selectedEmployee.gender);
  const [empType, setEmpType] = useState(selectedEmployee.employeeType);
  const [experience, setExperience] = useState(selectedEmployee.experience);

  const getExperience = (value) => {
    setExperience(value);
    console.log(value);
  }

  const getEmpType = (value) => {
    setEmpType(value);
    console.log(value);
  }

  const getGender = (value) => {
    setGender(value);
    console.log(value);
  }

  const handleClose = props.handleHideEditForm;
  const refresh = props.refresh;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const form = {
      empID: selectedEmployee._id,
      fullname: data.get("fullname"),
      nameInitails: data.get("nameInitials"),
      displayName: data.get("displayName"),
      gender: gender,
      birthday: data.get("birthday"),
      email: data.get("email"),
      mobile: data.get("mobile"),
      designation: data.get("designation"),
      employeeType: empType,
      joinedDate: data.get("joinedDate"),
      experience: experience,
      salary: data.get("salary"),
      notes: data.get("notes"),
    };

    const res = await fetch("http://localhost:5000/employee/edit", {
      method: "PUT",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    if (res.ok) {
      refresh();
      handleClose();
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toISOString().split('T')[0];
    return formattedDate;
  };

  return (
    <div className="box">

      <div className="columns">
        <div className="column">
          <h1 className="title is-size-4">Edit People</h1>
        </div>
        <div className="column">
          <button onClick={handleClose}>X</button>
        </div>
      </div>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="columns">
          <div className="column">

            <div className="field">
              <label htmlFor="fullname" className="label">Full Name*</label><br />
              <div className="control">
                <input type="text" 
                id="fullname" 
                name="fullname" 
                placeholder={selectedEmployee.fullname} 
                className="input"
                defaultValue={selectedEmployee.fullname} />
              </div>
            </div>

          </div>
        </div>

        <div className="columns">

          <div className="column">
            <div className="field">
              <label htmlFor="nameInitials" className="label">Name with initials*</label>
              <div className="control">
                <input className="input" 
                type="text" 
                id="nameInitials" 
                name="nameInitials" 
                placeholder={selectedEmployee.nameInitails}
                defaultValue={selectedEmployee.nameInitails} />
              </div>
            </div>
          </div>

          <div className="column">
            <div className="field">
              <label htmlFor="displayName" className="label">Display Name</label>
              <div className="control">
                <input className="input" 
                type="text" 
                id="displayName" 
                name="displayName" 
                placeholder={selectedEmployee.displayName}
                defaultValue={selectedEmployee.displayName} />
              </div>
            </div>
          </div>

        </div>

        <div className="columns">
          <div className="column">

            <div className="field">
              <label className="label" htmlFor="gender">Gender</label><br />
              <div className="control">
                {/* drop down should be here */}
                <DropDown items={["Male", "Female", "Other"]} functions={getGender} dummyPlaceHolder={gender} />
              </div>
            </div>

          </div>
          <div className="column">
            <div className="field">
              <label className="label" htmlFor="birthday">Date of Birth</label>
              <div className="control">
                <input 
                className="input" 
                type="date" 
                id="birthday" 
                name="birthday"
                defaultValue={formatDate(selectedEmployee.birthday)}/>
              </div>
            </div>
          </div>
        </div>

        <div className="columns">

          <div className="column">
            <div className="field">
              <label className="label" htmlFor="email">Email</label><br />
              <div className="control">
                <input className="input" 
                type="email" 
                id="email" 
                name="email" 
                placeholder={selectedEmployee.email}
                defaultValue={selectedEmployee.email} />
              </div>
            </div>
          </div>

          <div className="column">
            <div className="field">
              <label className="label" htmlFor="phoneNumber">Mobile Number</label>
              <div className="control">
                <input className="input" 
                type="text" 
                id="phoneNumber" 
                name="mobile" 
                placeholder={selectedEmployee.mobile}
                defaultValue={selectedEmployee.mobile} />
              </div>
            </div>
          </div>
        </div>

        <div className="columns">

          <div className="column">
            <div className="field">
              <label className="label" htmlFor="designation">Designation</label>
              <div className="control">
                <input className="input" 
                type="text" 
                id="designation" 
                name="designation" 
                placeholder={selectedEmployee.designation}
                defaultValue={selectedEmployee.designation} />
              </div>
            </div>
          </div>

          <div className="column">
            <div className="field">
              <label className="label" htmlFor="empType">Employee Type</label>
              <div className="control">
                <DropDown items={["Full time", "Part time", "Contract Basis", "Other"]} functions={getEmpType} dummyPlaceHolder={empType} />
              </div>
            </div>
          </div>

        </div>

        <div className="columns">

          <div className="column">
            <div className="field">
              <label className="label" htmlFor="joinedDate">Joined Date</label><br />
              <div className="control">
                <input className="input" 
                type="date" 
                id="joinedDate" 
                name="joinedDate"
                defaultValue={formatDate(selectedEmployee.joinedDate)} />
              </div>
            </div>
          </div>

          <div className="column">
            <div className="field">
              <label className="label" htmlFor="experience">Experience</label><br />
              <div className="control">
              <DropDown items={["> 01 Year", "01 Year", "02 Years", "03 Years", "04 Years", "05 Years", "05 + years"]} functions={getExperience} dummyPlaceHolder={experience} />
              </div>
            </div>
          </div>

        </div>

        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label" htmlFor="salary">Salary</label><br />
              <div className="control">
                <input className="input" 
                type="text" 
                id="salary" 
                name="salary" 
                placeholder={selectedEmployee.salary}
                defaultValue={selectedEmployee.salary} />
              </div>
            </div>
          </div>
          <div className="column">
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label" htmlFor="notes">Personal Notes</label>
              <div className="control">
                <input className="input" 
                type="text"
                id="notes" 
                name="notes" 
                placeholder={selectedEmployee.notes}
                defaultValue={selectedEmployee.notes} />
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div>
          <button className="button m-2" onClick={handleClose}>Cancel</button>
          <button type="submit" className="button is-info m-2">Save Changes</button>
        </div>

      </form>

    </div>
  );

}

export default EditEmployeeForm;