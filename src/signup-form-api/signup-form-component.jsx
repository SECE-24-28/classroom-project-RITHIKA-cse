import React from "react";
import axios from "axios";

const SignupFormComponent = () => {
  const fetchUsers = async () => {
    try {
      console.log("Fetching users...");
      const response = await axios.get(
        "http://localhost:21000/api/v1/User/getUsers"
      );
      console.log("Users:", response.data);
    } catch (e) {
      console.log("GET Error:", e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstname.value;
    const secondName = e.target.secondname.value;
    const email = e.target.email.value;
    const mobileNumber = e.target.mobile.value;
    const password = e.target.password.value;

    try {
      console.log("Creating user:", firstName, email);
      const res = await axios.post(
        "http://localhost:21000/api/v1/User/userSignup",
        {
          firstName,
          secondName,
          email,
          mobileNumber,
          password,
        }
      );
      console.log("Response:", res.data);
      await fetchUsers();
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name</label>
          <br />
          <input type="text" id="firstname" name="firstname" />
        </div>
        <br />
        <div>
          <label htmlFor="secondname">Second Name</label>
          <br />
          <input type="text" id="secondname" name="secondname" />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input type="text" id="email" name="email" />
        </div>
        <br />
        <div>
          <label htmlFor="mobile">Mobile Number</label>
          <br />
          <input type="text" id="mobile" name="mobile" />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" id="password" name="password" />
        </div>
        <br />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SignupFormComponent;