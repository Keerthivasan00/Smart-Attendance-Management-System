import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

const StudentLeaveApply = () => {
  const [student, setStudent] = useState({ name: "", department: "" });

  const [form, setForm] = useState({
    reason: "",
    from: "",
    to: ""
  });

  // Load logged student
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("student"));
    if (stored) {
      setStudent(stored);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // SUBMIT LEAVE REQUEST
  const handleSubmit = (e) => {
    e.preventDefault();

  const role = localStorage.getItem("role") || "student";

  const leaveRequest = {
    id: Date.now(),
    applicantName: form.name,
    applicantRole: "student",
    department: form.department,
    leaveType: "General",
    fromDate: form.from,
    toDate: form.to,
    reason: form.reason,
    status: "Pending",
    sentTo:
      role === "student"
        ? "staff"
        : role === "staff"
        ? "hod"
        : "admin",
  };

  let list = JSON.parse(localStorage.getItem("leaveRequests")) || [];
  list.push(leaveRequest);

  localStorage.setItem("leaveRequests", JSON.stringify(list));

  alert("Leave Submitted Successfully!");

  // Reset full form
  setForm({
    name: "",
    roll: "",
    department: "",
    reason: "",
    from: "",
    to: "",
  });
  
  };

  return (
    <>
      <style>
        {`
        /* Full page center */
.leave-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 10px;
}

/* Card UI */
.leave-card {
  width: 100%;
  max-width: 650px;
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 4px 20px rgba(0,0,0,0.1);
  animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

.leave-title {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

/* Form layout */
.leave-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-row {
  display: flex;
  gap: 20px;
}

@media (max-width: 600px) {
  .form-row {
    flex-direction: column;
  }
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 6px;
  font-weight: 600;
  color: #444;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 15px;
  transition: 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #2d63ff;
  box-shadow: 0 0 5px rgba(45, 99, 255, 0.3);
}

/* Submit button */
.submit-btn {
  width: 100%;
  background: #2d63ff;
  color: white;
  padding: 14px;
  font-size: 17px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.3s;
}

.submit-btn:hover {
  background: #204dcc;
}
`}
      </style>

      <Layout>
        <div className="leave-container">
          <div className="leave-card">
            <h2 className="leave-title">Apply Leave</h2>

            <form className="leave-form" onSubmit={handleSubmit}>

              {/* AUTO-FILLED NAME & DEPT */}
              <div className="form-group">
                <label>Student Name</label>
                <input type="text" value={student.name} disabled />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Department</label>
                  <input type="text" value={student.department} disabled />
                </div>
              </div>

              <div className="form-group">
                <label>Reason</label>
                <textarea
                  name="reason"
                  rows="4"
                  value={form.reason}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>From Date</label>
                  <input
                    type="date"
                    name="from"
                    value={form.from}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>To Date</label>
                  <input
                    type="date"
                    name="to"
                    value={form.to}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button className="submit-btn" type="submit">
                Submit Leave
              </button>

            </form>

          </div>
        </div>
      </Layout>
    </>
  );
};

export default StudentLeaveApply;
