import React, { useState } from "react";
import logins from "../assets/login.png";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });

      const { role, token } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      navigate("/dashboard");
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Invalid email or password");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    login();
  };

  return (
    <>
      <style>{`
        .login-btn {
          width: 100%;
          background: white;
          color: #2563eb;
          padding: 10px 16px;
          border-radius: 8px;
          font-weight: 600;
          transition: 0.3s;
          border: 2px solid #2563eb;
        }
        .login-btn:hover {
          background: #1e3a8a;
          color: white;
        }
        .login-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>

      <div className="flex flex-col md:flex-row h-screen w-full">
        {/* LEFT IMAGE */}
        <div className="md:w-1/2 w-full h-1/2 md:h-full flex items-center justify-center bg-white p-6">
          <img
            src={logins}
            alt="login"
            className="w-3/4 h-auto object-contain rounded-xl"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="md:w-1/2 w-full h-1/2 md:h-full flex items-center justify-center bg-blue-600 p-6">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm flex flex-col justify-center p-6">

            {/* LOGO */}
            <div className="flex justify-center mb-6">
              <img
                src={logo}
                alt="logo"
                className="h-28 w-28 rounded-full shadow-lg"
              />
            </div>

            <h3 className="text-lg font-medium text-center mb-1">
              Welcome back to Checkify
            </h3>
            <h3 className="text-sm text-center mb-5">
              Please login to continue
            </h3>

            {/* ERROR MESSAGE */}
            {error && (
              <div className="mb-4 p-3 text-red-700 bg-red-100 border border-red-300 rounded-md text-center text-sm">
                {error}
              </div>
            )}

            {/* FORM */}
            <form className="space-y-4 p-3" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-xl text-sm"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md text-sm"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="login-btn flex items-center justify-center gap-2 mt-4"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent"></span>
                    Please wait...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
