import React, { useState } from "react";
import {
  ArrowRight,
  X,
  Users,
  PlusCircle,
  Edit,
  Calendar,
  ClipboardList,
  UserCheck,
  QrCode,
  BarChart2,
  Table2,
  Home
} from "lucide-react";
import "../CSS/Managerdashboard.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState();
  const navigate = useNavigate();

  // IMPORTANT: Get the role from login
  const role = localStorage.getItem("role");  
  // Example: "manager", "hod", "staff", "student"

  // ---------- MENUS BASED ON ROLE ----------
  const menuItems = {
  manager: [
    // { icon: <Home size={30} />, label: "Dashboard", path: "/manager/dashboard" },
    { icon: <Users size={30} />, label: "Add Student", path:"/manager/add-students" },
    { icon: <PlusCircle size={30} />, label: "Add Staff", path:"/manager/add-staffs" },
    { icon: <Edit size={30} />, label: "Edit Student", path:"/manager/edit-students" },
    { icon: <Edit size={30} />, label: "Edit Staff", path:"/manager/edit-staffs" },
    { icon: <Calendar size={30} />, label: "Apply Leave", path:"/manager/apply-leave" }
  ],

  hod: [
    // { icon: <Home size={30} />, label: "Dashboard", path: "/hod/dashboard" },
    { icon: <Users size={30} />, label: "Assign Staff to Class", path:"/hod/assign-staff" },
    { icon: <ClipboardList size={30} />, label: "Approve Staff Leave", path:"/hod/leave-approve" },
    { icon: <Calendar size={30} />, label: "Apply Leave", path:"/hod/apply-leave" }
  ],

  staff: [
    // { icon: <Home size={30} />, label: "Dashboard", path: "/staff/dashboard" },
    { icon: <UserCheck size={30} />, label: "Approve Student Leave", path:"/staff/approve-leave" },
    { icon: <Calendar size={30} />, label: "Apply Leave to HOD", path:"/staff/apply-leave" },
    { icon: <QrCode size={30} />, label: "Generate OTP", path:"/staff/generate-otp" },
    { icon: <BarChart2 size={30} />, label: "View Attendance", path:"/staff/view-attendance" }
  ],

  student: [
    // { icon: <Home size={30} />, label: "Dashboard", path: "/student/dashboard" },
    { icon: <Calendar size={30} />, label: "Apply Leave", path:"/student/leave-apply" },
    { icon: <QrCode size={30} />, label: "Mark Attendance", path:"/student/mark-attendance" },
    { icon: <BarChart2 size={30} />, label: "Attendance %", path:"/student/view-attendance" },
    { icon: <Table2 size={30} />, label: "View Time Table", path:"/student/view-timetable" }
  ]
};

  // Select menu based on role
  const items = menuItems[role] || [];

  return (
    <div className="flex h-screen bg-gray-100 ">

      <div
        className={`bg-blue-700 text-white p-6 pt-10 ${
          open ? "w-64" : "w-20"
        }`}
      >

        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="absolute top-6 left-4 text-white"
        >
          {open ? <X size={40} /> : <ArrowRight size={40} />}
        </button><br /><br /><br /><br />

        {/* DYNAMIC ROLE-BASED MENU */}
        <nav className="flex flex-col space-y-4 mt-20 font-medium gap-4">
  {items.map((item, index) => (
    <button
      key={index}
      onClick={() => navigate(item.path)}
      className="flex items-center hover:bg-blue-600 p-3 rounded-xl gap-3"
    >
      {item.icon}
      {open && <span>{item.label}</span>}
    </button>
  ))}
</nav>

      </div>

    </div>
  );
}

export default Sidebar;
