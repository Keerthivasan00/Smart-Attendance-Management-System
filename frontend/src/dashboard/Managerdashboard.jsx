import React, { useState } from "react";
import { ArrowRight,Menu, X, User, PlusCircle, Edit, Users, Calendar } from "lucide-react";
import "../CSS/Managerdashboard.css";
import student from "../assets/student.png";
import staff from "../assets/staff.png";
import department from "../assets/dept.png";
import AddStudent from "../pages/AddStudent";
import ManagerSidebar from "../components/Sidebar";

const ManagerDashboard = () => {
  return (
     <div className="dashboard-container">
    <h1 className="dashboard-title">Manager Dashboard</h1>
    <p className="dashboard-subtext">
      Manage students, staff and send leave requests.
    </p>



<div className="card-grid">

  <div className="card card-blue">
    <div className="card-left">
      <h3>Total Students</h3>
      <p>1320</p>
    </div>
    <img src={student} alt="students" className="card-icon" />
  </div>

  <div className="card card-green">
    <div className="card-left">
      <h3>Total Staff</h3>
      <p>350</p>
    </div>
    <img src={staff} alt="staff" className="card-icon" />
  </div>

  <div className="card card-yellow">
    <div className="card-left">
      <h3>Total Departments</h3>
      <p>20</p>
    </div>
    <img src={department} alt="departments" className="card-icon" />
  </div>

</div>

    </div>
    // </div>
  );
};


export default ManagerDashboard;
