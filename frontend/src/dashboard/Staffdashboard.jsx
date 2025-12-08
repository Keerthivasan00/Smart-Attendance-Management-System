import React from "react";
import Layout from "../components/Layout";   // <-- add this

const StaffDashboard = () => {
  return (
    
      <div>
        <h2 className="text-2xl font-bold mb-4">Staff Dashboard</h2>

        <div className="cards">
          <div className="card">Approve Student Leave</div>
          <div className="card">Apply Leave to HOD</div>
          <div className="card">Generate OTP</div>
          <div className="card">View / Download Attendance</div>
        </div>
      </div>
   
  );
};

export default StaffDashboard;

