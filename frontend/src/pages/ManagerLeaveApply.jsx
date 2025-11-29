import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

function ManagerLeaveApply() {
  const [manager, setManager] = useState({
    name: "",
    department: "",
  });

  const [formData, setFormData] = useState({
    leaveType: "",
    fromDate: "",
    toDate: "",
    reason: "",
  });

  // Load Manager Details from Local Storage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("manager"));
    if (data) {
      setManager(data);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const leaveData = {
      ...formData,
      managerName: manager.name,
      department: manager.department,
    };

    console.log("Leave Submitted:", leaveData);
    alert("Your leave application has been submitted!");
  };

  return (
    <>
    <style>
      {
        `
        .leave-container {
  padding: 20px;
  max-width: 600px;
  margin: auto;
}

.leave-container h2 {
  text-align: center;
  margin-bottom: 20px;
}

.leave-form {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.leave-form label {
  font-weight: 600;
  margin-bottom: 5px;
  display: block;
}

.leave-form input,
.leave-form select,
.leave-form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.date-row {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.date-row div {
  flex: 1;
}

.leave-form textarea {
  height: 120px;
  resize: none;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

.submit-btn:hover {
  background: #0056b3;
}

.readonly-field {
  background: #f1f1f1;
  font-weight: 600;
  cursor: not-allowed;
}

        `
      }
    </style>
    <Layout>
      <div className="leave-container">
        <h2>Manager Leave Application</h2>

        <form className="leave-form" onSubmit={handleSubmit}>

          {/* Manager Name (Read Only) */}
          <div className="form-group">
  <label>Manager Name</label>
  <input 
    type="text" 
    value={manager?.name || ""} 
    readOnly 
    className="readonly-input"
  />
</div>

          {/* Leave Type */}
          <label>Leave Type</label>
          <select
            name="leaveType"
            value={formData.leaveType}
            onChange={handleChange}
            required
          >
            <option value="">Select Leave Type</option>
            <option value="Casual Leave">Casual Leave</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Earned Leave">Earned Leave</option>
            <option value="Half Day">Half Day</option>
          </select>

          {/* Date Range */}
          <div className="date-row">
            <div>
              <label>From</label>
              <input
                type="date"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>To</label>
              <input
                type="date"
                name="toDate"
                value={formData.toDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Reason */}
          <label>Reason</label>
          <textarea
            name="reason"
            placeholder="Enter reason for leave..."
            value={formData.reason}
            onChange={handleChange}
            required
          />

          <button className="submit-btn" type="submit">Apply Leave</button>
        </form>
      </div>
    </Layout>
    </>
  );
}

export default ManagerLeaveApply;

