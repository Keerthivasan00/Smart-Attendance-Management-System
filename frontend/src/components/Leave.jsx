import React, { useState, useEffect } from "react";
import Layout from "./Layout";

const Leave = ({ role }) => {
  const [user, setUser] = useState({ name: "", department: "" });
  const [form, setForm] = useState({ reason: "", from: "", to: "" });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);


    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const getSentTo = () => {
     switch (role) {
    case "student":
      return "staff";
    case "staff":
      return "hod";
    case "hod":
    case "manager":
      return "admin";
    default:
      return "";
  }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const leaveRequest = {
      id: Date.now(),
      applicantName: user.name,        
      applicantRole: role,
      department: user.department,    
      fromDate: form.from,
      toDate: form.to,
      reason: form.reason,
      status: "Pending",
      sentTo: getSentTo(role),
    };

    let list = JSON.parse(localStorage.getItem("leaveRequests")) || [];
    list.push(leaveRequest);
    localStorage.setItem("leaveRequests", JSON.stringify(list));

    alert("Leave Submitted Successfully!");
  };

  return (
    <>
      <style>{`
        .leave-container {
          
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 24px 12px;
        }

        .leave-card {
          margin-top: 50px;
          width: 100%;
          max-width: 520px;
          background: white;
          padding: 26px;
          border-radius: 14px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }

        .leave-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 18px;
          text-align: center;
        }

        .leave-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .form-group input,
        .form-group textarea {
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid #d1d5db;
          font-size: 14px;
        }

        .form-group textarea {
          resize: none;
        }

        .form-row {
          display: flex;
          gap: 14px;
        }

        .submit-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 8px;
        }

        .submit-btn {
          background: #2d63ff;
          color: white;
          padding: 10px 28px;
          font-size: 15px;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.25s;
        }

        .submit-btn:hover {
          background: #204dcc;
        }
      `}</style>

      <Layout>
        <div className="leave-container">
          <div className="leave-card">
            <h2 className="leave-title">Apply Leave</h2>

            <form className="leave-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>{role.toUpperCase()} Name</label>
                <input value={user.name} disabled />
              </div>

              <div className="form-group">
                <label>Department</label>
                <input value={user.department} disabled />
              </div>

              <div className="form-group">
                <label>Reason</label>
                <textarea
                  name="reason"
                  rows="3"
                  value={form.reason}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>From</label>
                  <input
                    type="date"
                    name="from"
                    value={form.from}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>To</label>
                  <input
                    type="date"
                    name="to"
                    value={form.to}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="submit-wrapper">
                <button className="submit-btn">Submit Leave</button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Leave;
