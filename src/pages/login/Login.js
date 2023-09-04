import "./login.css";
import {useState} from "react"
const Login=()=>{
  const [userInput,setUserInput]=useState({})
  
  const handleUserInput=(e)=>{
    setUserInput({...userInput,[e.target.name]:e.target.value})
    }

  return(
    <>
    <div className="container" >
    <div className="loginContainer" >
      <h4>Enter your name and address</h4>
      <div className="itemContainer" style={{height:"80px"}}>
      <label>Name</label>
      <input className="input" type="text" name="name" placeholder="Name" onChange={handleUserInput} />
      </div>
      <div className="itemContainer">
      <label>Address</label>
      <input className="input" type="text" name="housenumber" placeholder="House number" onChange={handleUserInput} />
      <input className="input" type="text" name="sector" placeholder="Sector" onChange={handleUserInput} />
      <input className="input" type="text" name="city" placeholder="City" onChange={handleUserInput} />
      <input className="input" type="text" name="district" placeholder="District" onChange={handleUserInput} />
      <input className="input" type="text" name="state" placeholder="State" onChange={handleUserInput} />
      </div>
    </div>
    </div>
    </>
  )
}
export default Login;