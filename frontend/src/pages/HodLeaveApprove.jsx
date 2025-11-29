import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";


function HodLeaveApprove() {
  const [hod, setHod] = useState({ name: "", department: "" });
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const storedHod = JSON.parse(localStorage.getItem("hod"));
    if (storedHod) setHod(storedHod);

    // load staff leave requests
    const storedRequests = JSON.parse(localStorage.getItem("leaveRequests")) || [];
    setRequests(storedRequests);
  }, []);

  const handleApproval = (id, newStatus) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status: newStatus } : req
    );

    setRequests(updated);
    localStorage.setItem("leaveRequests", JSON.stringify(updated));
  };

  return (
    <>
    <style>
        {
            `
            .leave-container {
  padding: 40px;
  margin-top: 20px;
  font-family: "Poppins", sans-serif;
}

/* Main Title */
.title {
  font-size: 26px;
  font-weight: 700;
  color: #1D4ED8;
  text-align: center;
  margin-bottom: 25px;
}

/* HOD Info Box */
.hod-box {
  background: #1D4ED8;
  padding: 15px 20px;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(30, 136, 229, 0.2);
  margin-bottom: 25px;
  font-size: 15px;
}

.hod-box p{
color:white;
}

.subtitle {
  font-size: 20px;
  font-weight: 600;
  color: #0d47a1;
  margin-bottom: 15px;
}

/* Table */
.leave-table {
  width: 100%;
  border-collapse: collapse;
  background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.10);
}

.leave-table th {
  background: #1D4ED8 ;
  color: white;
  padding: 12px;
  font-size: 15px;
  letter-spacing: 0.5px;
}

.leave-table td {
  padding: 14px 12px;
  border-bottom: 1px solid #eeeeee;
  font-size: 14px;
}

/* Status Colors */
.status {
  padding: 6px 12px;
  border-radius: 8px;
  font-weight: 600;
}

.status.pending {
  background: #fff3cd;
  color: #ff9800;
}

.status.approved {
  background: #c8e6c9;
  color: #2e7d32;
}

.status.rejected {
  background: #ffcdd2;
  color: #c62828;
}

/* Buttons */
.approve-btn,
.reject-btn {
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  border: none;
  transition: 0.3s;
}

.approve-btn {
  background: #4caf50;
  color: white;
}

.approve-btn:hover {
  background: #2e7d32;
  transform: scale(1.05);
}

.reject-btn {
  background: #e53935;
  color: white;
  margin-left: 10px;
}

.reject-btn:hover {
  background: #b71c1c;
  transform: scale(1.05);
}

            `
        }
    </style>
    <Layout>
    <div className="leave-container">
      <h2 className="title">Leave Approvals</h2>

      <div className="hod-box">
        <p><strong>HOD Name:</strong> {hod.name}</p>
        <p><strong>Department:</strong> {hod.department}</p>
      </div>

      <h3 className="subtitle">Staff Leave Requests</h3>

      <table className="leave-table">
        <thead>
          <tr>
            <th>Staff Name</th>
            <th>Reason</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {requests.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                No Leave Requests Yet
              </td>
            </tr>
          ) : (
            requests.map((req) => (
              <tr key={req.id}>
                <td>{req.staffName}</td>
                <td>{req.reason}</td>
                <td>{req.date}</td>
                <td>
                  <span className={`status ${req.status.toLowerCase()}`}>
                    {req.status}
                  </span>
                </td>
                <td>
                  {req.status === "Pending" ? (
                    <>
                      <button
                        className="approve-btn"
                        onClick={() => handleApproval(req.id, "Approved")}
                      >
                        Approve
                      </button>

                      <button
                        className="reject-btn"
                        onClick={() => handleApproval(req.id, "Rejected")}
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
    </Layout>
    </>
  );
}

export default HodLeaveApprove;
