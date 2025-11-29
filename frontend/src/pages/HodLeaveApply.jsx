import React, { useEffect, useState } from "react";
import { Calendar, User, FileText, ClipboardList, UploadCloud } from "lucide-react";
import Layout from "../components/Layout";

const HodLeaveApply = () => {

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("hod"));

    if (stored) {
      setName(stored.name);
      setDepartment(stored.department);
    }
  }, []);


  return (
    <>
    <style>
        {
            `
            /* Page Background */
.leave-container {
  position:fixed;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  font-family: "Poppins", sans-serif;
  margin-left:400px;
}

/* Card */
.leave-card {
  width: 1000px;
  background: #ffffff;
  padding: 30px 35px;
  border-radius: 18px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;
  margin-bottom:150px;
 
}

/* Title */
.form-title {
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  color: #1a237e;
}

/* Input Group */
.input-group {
  margin-bottom: 18px;
}

.input-group label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #263238;
  margin-bottom: 6px;
}

/* Input Boxes */
.input-group input,
.input-group select,
.input-group textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1.5px solid #cfd8dc;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
  transition: 0.2s ease;
  background: #fafafa;
}

.input-group input:focus,
.input-group select:focus,
.input-group textarea:focus {
  border-color: #1e88e5;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(30, 136, 229, 0.2);
}

/* Textarea */
textarea {
  height: 90px;
  resize: none;
}

/* Submit Button */
.submit-btn {
  width: 100%;
  background: blue;
  color: white;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 8px;
  transition: 0.3s ease;
}

.submit-btn:hover {
  background: #0d47a1;
  transform: translateY(-2px);
}

            `
        }
    </style>
    <Layout>
    <div className="leave-container">
  <div className="leave-card">
    <h2 className="form-title">HOD Leave Application</h2>

    <div className="input-group">
      <label>HOD Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />
    </div>

    <div className="input-group">
      <label>Department</label>
      <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
    </div>

    <div className="input-group">
      <label>Leave Type</label>
      <select>
        <option>Sick Leave</option>
        <option>Casual Leave</option>
        <option>Emergency Leave</option>
      </select>
    </div>

    <div className="input-group">
      <label>From Date</label>
      <input type="date" />
    </div>

    <div className="input-group">
      <label>To Date</label>
      <input type="date" />
    </div>

    <div className="input-group">
      <label>Reason</label>
      <textarea placeholder="Enter your reason..."></textarea>
    </div>

    <button className="submit-btn">Submit</button>
  </div>
</div>
    </Layout>
    </>
  );
};

export default HodLeaveApply;
