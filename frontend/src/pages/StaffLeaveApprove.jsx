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
  );
}

export default StaffLeaveApprove;
