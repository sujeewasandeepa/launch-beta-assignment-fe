import "../assets/FloatingForm.css";
import DropDown from "./DropDown";

import { useState } from "react";

function AddEmployeeForm(props) {

  const [gender, setGender] = useState("");
  const [empType, setEmpType] = useState("");
  const [experience, setExperience] = useState("");

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

  const handleClose = props.handleHideAddForm;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const form = {
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
      experience: data.get("experience"),
      salary: data.get("salary"),
      notes: data.get("notes"),
    };

    const test = {
      fullname: "ssk",
      "nameInitials": "ssk",
    };

    const res = await fetch("http://localhost:5000/employee/add", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      console.log(res);
      handleClose();
    }

  }

  return (
    <div className="box">

      <div className="columns">
        <div className="column">
          <h1 className="title is-size-4">Add People</h1>
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
                <input type="text" id="fullname" name="fullname" placeholder="Full Name" className="input" />
              </div>
            </div>

          </div>
        </div>

        <div className="columns">

          <div className="column">
            <div className="field">
              <label htmlFor="nameInitials" className="label">Name with initials*</label>
              <div className="control">
                <input className="input" type="text" id="nameInitials" name="nameInitials" placeholder="Name with initials" />
              </div>
            </div>
          </div>

          <div className="column">
            <div className="field">
              <label htmlFor="displayName" className="label">Display Name</label>
              <div className="control">
                <input className="input" type="text" id="displayName" name="displayName" placeholder="Display Name" />
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
                <DropDown items={["Male", "Female", "Other"]} functions={getGender} dummyPlaceHolder={"Gender"} />
              </div>
            </div>

          </div>
          <div className="column">
            <div className="field">
              <label className="label" htmlFor="birthday">Date of Birth</label>
              <div className="control">
                <input className="input" type="date" id="birthday" name="birthday" />
              </div>
            </div>
          </div>
        </div>

        <div className="columns">

          <div className="column">
            <div className="field">
              <label className="label" htmlFor="email">Email</label><br />
              <div className="control">
                <input className="input" type="email" id="email" name="email" placeholder="hello@betalaunch.io" />
              </div>
            </div>
          </div>

          <div className="column">
            <div className="field">
              <label className="label" htmlFor="phoneNumber">Mobile Number</label>
              <div className="control">
                <input className="input" type="text" id="phoneNumber" name="mobile" placeholder="0719999999" />
              </div>
            </div>
          </div>
        </div>

        <div className="columns">

          <div className="column">
            <div className="field">
              <label className="label" htmlFor="designation">Designation</label>
              <div className="control">
                <input className="input" type="text" id="designation" name="designation" placeholder="Software Engineer Intern" />
              </div>
            </div>
          </div>

          <div className="column">
            <div className="field">
              <label className="label" htmlFor="empType">Employee Type</label>
              <div className="control">
                <DropDown items={["Full time", "Part time", "Contract Basis", "Other"]} functions={getEmpType} dummyPlaceHolder={"Employee Type"} />
              </div>
            </div>
          </div>

        </div>

        <div className="columns">

          <div className="column">
            <div className="field">
              <label className="label" htmlFor="joinedDate">Joined Date</label><br />
              <div className="control">
                <input className="input" type="date" id="joinedDate" name="joinedDate" />
              </div>
            </div>
          </div>

          <div className="column">
            <div className="field">
              <label className="label" htmlFor="experience">Experience</label><br />
              <div className="control">
              <DropDown items={["> 01 Year", "01 Year", "02 Years", "03 Years", "04 Years", "05 Years", "05 + years"]} functions={getExperience} dummyPlaceHolder={"Experience"} />
              </div>
            </div>
          </div>

        </div>

        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label" htmlFor="salary">Salary</label><br />
              <div className="control">
                <input className="input" type="text" id="salary" name="salary" placeholder="Rs. 100,000" />
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
                <input className="input" type="text" id="notes" name="notes" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" />
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div>
          <button className="button m-2" onClick={handleClose}>Cancel</button>
          <button type="submit" className="button is-info m-2">Add People</button>
        </div>

      </form>

    </div>
  );

}

export default AddEmployeeForm;