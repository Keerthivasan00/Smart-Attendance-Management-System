import React from "react";
import Chart from "../components/Chart"; 
import Layout from "../components/Layout";
// import ECGChart from "./components/ECGChart"; 

 function Admindashboard() {
  return (
    <>
   
    <div className="admin-dashboard">
      {/* 1️⃣ Summary Cards */}
      <div className="cards-container">
        <div className="card students">
          <h3>Students</h3>
          <p>1200</p>
        </div>
        <div className="card staffs">
          <h3>Staffs</h3>
          <p>150</p>
        </div>
        <div className="card management">
          <h3>Management</h3>
          <p>30</p>
        </div>
      </div>

      {/* 2️⃣ Growth Line Chart */}
      <div className="chart-container">
        <h3>Users Growth Trend</h3>
        <Chart />
      </div>
    </div>

    </>
  );
}
export default Admindashboard

