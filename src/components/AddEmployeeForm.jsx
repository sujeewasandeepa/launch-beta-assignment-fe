function AddEmployeeForm() {


  return (
    <div className="">

      <div className="columns">
        <div className="column">
          <h1>Add People</h1>
        </div>
        <div className="column">
          <button>X</button>
        </div>
      </div>
      <hr/>

      <form>
        <div className="columns">
          <div className="column">
            <label for="fullname">Full Name</label>
            <input type="text" id="fullname" name="fullname" placeholder="Full Name" />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <label for="nameInitials">Name with initials</label>
            <input type="text" id="nameInitials" name="nameInitials" placeholder="Name with initials" />
          </div>
          <div className="column">
            <label for="displayName">Display Name</label>
            <input type="text" id="displayName" name="displayName" placeholder="Display Name" />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <label for="gender">Gender</label>
            {/* dropdown here */}
            <input type="text" id="gender" name="gender" placeholder="Gender" />
          </div>
          <div className="column">
            <label for="birthday">Date of Birth</label>
            <input type="date" id="birthday" name="birthday" />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="hello@betalaunch.io" />
          </div>
          <div className="column">
            <label for="phoneNumber">Mobile Number</label>
            <input type="text" id="phoneNumber" name="mobile" placeholder="0719999999" />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <label for="designation">Designation</label>
            <input type="text" id="designation" name="designation" placeholder="Software Engineer Intern" />
          </div>
          <div className="column">
            <label for="empType">Employee Type</label>
            <input type="text" id="empType" name="empType" placeholder="Full time" />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <label for="nameInitials">Name with initials</label>
            <input type="text" id="nameInitials" name="nameInitials" placeholder="Name with initials" />
          </div>
          <div className="column">
            <label for="displayName">Display Name</label>
            <input type="text" id="displayName" name="displayName" placeholder="Display Name" />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <label for="joinedDate">Joined Date</label>
            <input type="date" id="joinedDate" name="joinedDate" />
          </div>
          <div className="column">
            <label for="experinece">Experience</label>
            <input type="text" id="experinece" name="experinece" placeholder="03 Years" />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <label for="salary">Salary</label>
            <input type="text" id="salary" name="salary" placeholder="Rs. 100,000" />
          </div>
          <div className="column">
            
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <label for="notes">Personal Notes</label>
            <input type="text" id="notes" name="notes" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. " />
          </div>
        </div>

        <hr/>
        <div>
          <button className="button m-2">Cancel</button>
          <button type="submit" className="button is-info m-2">Add People</button>
        </div>

      </form>

    </div>
  );

}

export default AddEmployeeForm;