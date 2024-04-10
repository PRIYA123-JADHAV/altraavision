import React, { useState } from "react";
import "./Login.css"

const Login=() =>{
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    // const[popupStyle,showPopup]=useState("hide")
    // const popup=()=>{
    //     showPopup("login-popup")
    //     setTimeout(()=> showPopup("hide"),3000)
    // }
    const handleLogin= () => {
        // Assuming all fields are filled
        if (!username && !password) {
        alert("Please fill in all fields.");
        
        } else {
        alert("Login Successfully!");
        }
      };
      
    return(  
        <div className="page">
        <div className="cover">
             
             <h1>Login</h1>
             <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
             <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>

             <div className="login-btn" onClick={handleLogin}>Login</div>
             
        </div>
        </div>
    )
}
export default Login