import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

function StaffLeaveApprove() {
  
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("leaveRequests")) || [];
    const filtered = all.filter(r => r.sentTo === "staff");
    setRequests(filtered);
  }, []);

  const updateStatus = (id, newStatus) => {
    const all = JSON.parse(localStorage.getItem("leaveRequests")) || [];

    const updated = all.map(req =>
      req.id === id ? { ...req, status: newStatus } : req
    );

    localStorage.setItem("leaveRequests", JSON.stringify(updated));
    setRequests(updated.filter(r => r.sentTo === "staff"));
  };

  return (
    <>
    <style>
      {
        `
        .approve-container {
  padding: 30px;
  font-family: "Poppins", sans-serif;
}

.title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
}

.approve-card {
  background: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 14px;
  border-left: 6px solid #1976d2;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  transition: 0.2s ease;
}

.approve-card:hover {
  transform: translateY(-4px);
}

.btn-row {
  display: flex;
  gap: 12px;
  margin-top: 12px;
}

.approve-btn {
  padding: 10px 15px;
  background: #2e7d32;
  border: none;
  color: white;
  border-radius: 8px;
  cursor: pointer;
}

.reject-btn {
  padding: 10px 15px;
  background: #c62828;
  border: none;
  color: white;
  border-radius: 8px;
  cursor: pointer;
}

        `
      }
    </style>
    <Layout>
      <div className="approve-container">
        <h2 className="title">Student Leave Requests</h2>

        {requests.length === 0 ? (
          <p>No pending leave requests.</p>
        ) : (
          requests.map((req) => (
            <div className="approve-card" key={req.id}>
              <p><b>Name:</b> {req.applicantName}</p>
              <p><b>Department:</b> {req.department}</p>
              <p><b>Reason:</b> {req.reason}</p>
              <p><b>Date:</b> {req.date}</p>
              <p><b>Status:</b> {req.status}</p>

              <div className="btn-row">
                <button onClick={() => updateStatus(req.id, "Approved")} className="approve-btn">Approve</button>
                <button onClick={() => updateStatus(req.id, "Rejected")} className="reject-btn">Reject</button>
              </div>
            </div>
          ))
        )}
      </div>
    </Layout>
    </>
  );
  
}

export default StaffLeaveApprove;
