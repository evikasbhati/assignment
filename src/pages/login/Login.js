import InputField from "../../components/inputField/InputField";
import "./login.css";
import { useState } from "react";
const Login = () => {
  const [userInput, setUserInput] = useState({});

  const handleUserInput = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container">
        <div className="loginContainer">
          <h4>Enter your name and address</h4>
          <div className="itemContainer" style={{ height: "80px" }}>
            <label>Name</label>
            <InputField
              name="name"
              placeholder="Name"
              onChange={handleUserInput}
            />
          </div>
          <div className="itemContainer">
            <label>Address</label>
            <InputField
              name="housenumber"
              placeholder="House number"
              onChange={handleUserInput}
            />
            <InputField
              name="sector"
              placeholder="Sector "
              onChange={handleUserInput}
            />
            <InputField
              name="city"
              placeholder="City"
              onChange={handleUserInput}
            />
            <InputField
              name="district"
              placeholder="District"
              onChange={handleUserInput}
            />
            <InputField
              name="state"
              placeholder="State"
              onChange={handleUserInput}
            />
          </div>
          <button className="button">Submit</button>
        </div>
      </div>
    </>
  );
};
export default Login;
