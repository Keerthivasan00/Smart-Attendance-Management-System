import React from "react";
import Chart from "../components/Chart"; 
import Layout from "../components/Layout";
// import ECGChart from "./components/ECGChart"; 

 function Admindashboard() {
  return (
    <>
   
    <div className="admin-dashboard p-3">
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

       <div className="mt-4"> <span className="font-bold text-xl">Users Growth Trend</span></div>
      {/* 2️⃣ Growth Line Chart */}
      <div className="chart-container mt-2 px-5">
        <Chart />
      </div>
    </div>

    </>
  );
}
export default Admindashboard

