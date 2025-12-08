import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import ManagerDashboard from '../dashboard/Managerdashboard'
import HODDashboard from '../dashboard/Hoddashboard'
import StaffDashboard from '../dashboard/Staffdashboard'
import StudentDashboard from '../dashboard/Studentdashboard'
import Admindashboard from '../dashboard/Admindashboard'

const Dashboard = () => {

     const role = localStorage.getItem("role"); 

  const renderDashboard = () => {
    switch (role) {
      case "manager":
        return <ManagerDashboard />;
      case "hod":
        return <HODDashboard />;
      case "staff":
        return <StaffDashboard />;
      case "student":
        return <StudentDashboard />;
      case "admin":
        return <Admindashboard/>
      default:
        return <h2>No role found</h2>;
    }
  };

  return (

     <div className="dashboard-layout flex">
    <Sidebar role={role} />

    <div className="flex-1">
      <Navbar /><br />

      <div className="p-6">
        {renderDashboard()}
      </div>
    </div>
  </div>
  )
}

export default Dashboard