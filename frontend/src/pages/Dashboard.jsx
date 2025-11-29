import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import ManagerDashboard from '../dashboard/Managerdashboard'
import HODDashboard from '../dashboard/Hoddashboard'
import StaffDashboard from '../dashboard/Staffdashboard'
import StudentDashboard from '../dashboard/Studentdashboard'

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
      default:
        return <h2>No role found</h2>;
    }
  };

  return (
    //  <div className="dashboard-layout flex">
    //   <Sidebar role={role} />

    //   <div className="content-area flex-1">
    //     {renderDashboard()}
    //   </div>
    // </div>

    <div className="dashboard-layout flex">
      {/* Sidebar */}
      <Sidebar role={role} />

      {/* Content Area */}
      <div className="flex-1">
        <Navbar /><br />   {/* <-- TOP NAVBAR */}

        <div className="p-6">
          {renderDashboard()}
        </div>
      </div>
    </div>
  )
}

export default Dashboard