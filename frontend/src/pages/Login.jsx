import React, { useState } from "react";
import logins from "../assets/login.png";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const res = await axios.post(
      "http://localhost:8080/auth/login",
      {"email":email,
      "password":password}
    );

    console.log(res.data);
    const {role,token}=res.data;
    
    localStorage.setItem("token",token)
    localStorage.setItem("role",role)
    console.log(token);
    console.log(role);
    
  };

  // LOGIN FUNCTION
  const handleLogin = (event) => {
    event.preventDefault();
    login();
    // --- SIMPLE DEMO ROLE LOGIC (Change this later with backend) ---
    // let role = "";

    // if (email.includes("manager")) {
    //   role = "manager";

    //   localStorage.setItem(
    //     "manager",
    //     JSON.stringify({
    //       name: "VARUN M", // you can replace with real input
    //       department: "IT", // or fetch from backend later
    //     })
    //   );
    // }

    // else if (email.includes("hod")){
    //   role = "hod";

    //   localStorage.setItem(
    //   "hod",
    //   JSON.stringify({
    //     name: "hodit",        // you can replace with real input
    //     department: "IT"        // or fetch from backend later
    //   })
    // );
    // // }
    // else if (email.includes("hod")) {
    //   role = "hod";

    //   const hodData = {
    //     name: "hodit", // default name
    //     department: "IT", // default department
    //   };

    //   localStorage.setItem("hod", JSON.stringify(hodData));
    // } else if (email.includes("staff")) {
    //   role = "staff";

    //   localStorage.setItem(
    //     "staff",
    //     JSON.stringify({
    //       name: "staff", // you can replace with real input
    //       department: "IT", // or fetch from backend later
    //     })
    //   );
    // } else if (email.includes("student")) {
    //   role = "student";

    //   localStorage.setItem(
    //     "student",
    //     JSON.stringify({
    //       name: "student", // you can replace with real input
    //       department: "IT", // or fetch from backend later
    //     })
    //   );
    // } else role = "student"; // default

    // // STORE ROLE IN LOCALSTORAGE
    // // localStorage.setItem("loggedUser", JSON.stringify(userData));
    // localStorage.setItem("role", role);

    // REDIRECT TO DASHBOARD
    navigate("/dashboard");
  };

  return (
    <>
      <style>{`
        .login-btn {
          width: 100%;
          background: white;
          color: #2563eb; 
          padding: 12px 16px;
          border-radius: 8px;
          font-weight: 600;
          transition: 0.3s;
          border: 2px solid #2563eb;
        }
        .login-btn:hover {
          background: #1e3a8a; 
          color: white;
        }
        .login-title {
          font-size: 30px;       
          font-weight: 500;      
          margin-bottom: 24px;  
          color: blue;
          margin-left: 20px;
        }
        .ip {
          font-size: 18px;       
          font-weight: 500;      
          margin-bottom: 8px; 
          margin-left: 20px;  
        }
        .box {
          width: 90%;
          padding: 12px 16px;
          margin-left: 20px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>

      <div className="flex flex-col md:flex-row h-screen w-full">
        {/* LEFT SIDE IMAGE */}
        <div className="md:w-1/2 w-full h-1/2 md:h-full flex items-center justify-center bg-white p-6">
          <img
            src={logins}
            alt="login"
            className="w-3/4 h-auto object-contain rounded-xl"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="md:w-1/2 w-full h-1/2 md:h-full flex items-center justify-center bg-blue-600 p-6">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-1/2  flex flex-col justify-center p-4">
            {/* logo */}
            <div className="flex justify-center mb-8">
              <img
                src={logo}
                alt="logo"
                className="h-40 w-40 rounded-full shadow-lg"
              />
            </div>
            <br />
            <br />

            {/* title */}
            <h3 className="ip">Welcome back to Checkify</h3>
            <h3 className="ip">Please Login!!</h3>
            <br />

            <form className="space-y-5" onSubmit={handleLogin}>
              <div>
                <label className="block text-lg font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-md"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full p-3 border rounded-md"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <br />

              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
