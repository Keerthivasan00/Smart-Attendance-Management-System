import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

function StaffLeaveApply() {
  const [staff, setStaff] = useState({ name: "", department: "" });
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("staff"));
    if (stored) setStaff(stored);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLeave = {
      id: Date.now(),
      staffName: staff.name,
      department: staff.department,
      reason,
      date,
      status: "Pending",
    };

    // get old leaves
    let oldLeaves = JSON.parse(localStorage.getItem("leaveRequests")) || [];

    // push new one
    oldLeaves.push(newLeave);

    // save back
    localStorage.setItem("leaveRequests", JSON.stringify(oldLeaves));

    alert("Leave Applied Successfully!");
    setReason("");
    setDate("");
  };

  return (
    <>
    <style>
    {
        `
        /* Page Background */
.apply-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, #e3f2fd, #ffffff);
  padding: 20px;
  font-family: "Poppins", sans-serif;
}

/* Card */
.apply-card {
  width: 420px;
  padding: 30px 35px;
  background: #ffffff;
  border-radius: 18px;
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.12);
  animation: fadein 0.4s ease;
}

@keyframes fadein {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Title */
.apply-title {
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #1a237e;
}

/* Input box */
.input-box {
  margin-bottom: 15px;
}

.input-box label {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  display: block;
  color: #37474f;
}

.input-box input,
.input-box textarea {
  width: 100%;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1.5px solid #cfd8dc;
  background: #fafafa;
  font-size: 14px;
  transition: 0.2s ease;
}

.input-box input:focus,
.input-box textarea:focus {
  border-color: #1e88e5;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(30, 136, 229, 0.2);
}

/* Button */
.apply-btn {
  width: 100%;
  background: #1e88e5;
  color: #ffffff;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s ease;
  font-weight: 600;
}

.apply-btn:hover {
  background: #0d47a1;
  transform: translateY(-2px);
}

        `
    }
    </style>
    <Layout>
    <div>
      <h2>Apply Leave</h2>

      <form onSubmit={handleSubmit}>
        <p><b>Name:</b> {staff.name}</p>
        <p><b>Department:</b> {staff.department}</p>

        <input
          type="text"
          placeholder="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button type="submit">Apply Leave</button>
      </form>
    </div>
    </Layout>
    </>
  );
}

export default StaffLeaveApply;
