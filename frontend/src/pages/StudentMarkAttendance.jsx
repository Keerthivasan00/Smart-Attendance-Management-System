import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";

function StudentMarkAttendance() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [message, setMessage] = useState("");

  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // only numbers

    const updatedOTP = [...otp];
    updatedOTP[index] = value;
    setOtp(updatedOTP);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const markAttendance = () => {
    const enteredOTP = otp.join("");
    const storedOTP = localStorage.getItem("attendanceOTP"); 

    if (enteredOTP === storedOTP) {
      setMessage("✅ Attendance marked successfully!");
    } else {
      setMessage("❌ Invalid OTP. Please try again.");
    }
  };

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <>
    <style>
        {
            `
            .h1{
             color:blue;
             margin-top:70px;
            }

            .btn {
          width: 75%;
          background: white;
          color: #2563eb; 
          padding: 12px 16px;
          border-radius: 8px;
          font-weight: 600;
          transition: 0.3s;
          border: 2px solid #2563eb;
          margin-top:50px;
        }

        .btn:hover {
          background: #1e3a8a; 
          color: white;
        }
            `
        }
    </style>
    <Layout>
      <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4">
        <div className="bg-white rounded-2xl shadow-lg w-[700px] h-[450px] p-8 text-center flex flex-col justify-between">
          <div>
            <h1 className="h1">Student Attendance</h1>
            <p className="p">
              Enter your <span className="font-medium">6-digit OTP</span> provided by your staff
            </p>

            {/* OTP Inputs */}
            <div className="flex justify-center gap-4 mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  className="w-16 h-16 text-center text-lg font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </div>

            <div>
            <button
              onClick={markAttendance}
              className="btn"
            >
              Submit Attendance
            </button>

            {message && (
              <p className={`mt-5 text-sm font-medium ${message.includes("Invalid") ? "text-red-600" : "text-green-600"}`}>
                {message}
              </p>
            )}
          </div>

          </div>

          

        </div>
      </div>
    </Layout>
    </>
  );
}

export default StudentMarkAttendance;
