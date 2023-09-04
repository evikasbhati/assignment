import InputField from "../../components/inputField/InputField";
import "./registration.css";
import { useState } from "react";
const Registration = () => {
  const [userInput, setUserInput] = useState({});

  const handleUserInput = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async() => {
    const { name, ...addressData } = userInput;
    let address ="";
    for (let value of Object.values(addressData)) {
      address += " " + value + ",";
    }
     fetch("http://localhost:5000/api/user", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body:JSON.stringify({ name: name, address: address }),
    })
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
          <button className="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
export default Registration;
