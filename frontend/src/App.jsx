import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddStudent from "./pages/AddStudent.jsx";
import AddStaff from "./pages/AddStaff.jsx";
import EditStudent from "./pages/EditStudent.jsx";
import EditStaff from "./pages/EditStaff.jsx";
import ManagerLeaveApply from "./pages/ManagerLeaveApply.jsx";
import HodAssignStaff from "./pages/HodAssignStaff.jsx";
import HodLeaveApply from "./pages/HodLeaveApply.jsx";
import StaffLeaveApply from "./pages/StaffLeaveApply.jsx";
import GenerateOTP from "./pages/GenerateOTP.jsx";
import StaffViewAttendance from "./pages/StaffViewAttendance.jsx";
import StudentLeaveApply from "./pages/StudentLeaveApply.jsx";
import StudentMarkAttendance from "./pages/StudentMarkAttendance.jsx";
import StudentViewAttendance from "./pages/StudentViewAttendance.jsx";
import StudentViewTimetable from "./pages/StudentViewTimetable.jsx";
import Profile from "./pages/Profile.jsx";
import LeaveApprove from "./pages/LeaveApprove.jsx";
import LeaveStatus from "./pages/LeaveStatus.jsx";
import "./index.css";

function App() {
  return (
    <Routes>

      
      <Route path="/" element={<Login />} />

      
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/manager/dashboard" element={<Dashboard />} />
      <Route path="/hod/dashboard" element={<Dashboard />} />
      <Route path="/staff/dashboard" element={<Dashboard />} />
      <Route path="/student/dashboard" element={<Dashboard />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />

      <Route path="/manager/add-students" element={<AddStudent />} />
      <Route path="/manager/add-staffs" element={<AddStaff />} />
      <Route path="/manager/edit-students" element={<EditStudent />} />
      <Route path="/manager/edit-staffs" element={<EditStaff />} />
      <Route path="/manager/apply-leave" element={<ManagerLeaveApply />} />
      <Route path="/manager/leave-status" element={<LeaveStatus />} />

      <Route path="/hod/assign-staff" element={<HodAssignStaff />} />
      <Route path="/hod/apply-leave" element={<HodLeaveApply />} />
      <Route path="/hod/leave-approve" element={<LeaveApprove />} />
      <Route path="/hod/leave-status" element={<LeaveStatus />} />

      <Route path="/staff/apply-leave" element={<StaffLeaveApply />} />
      <Route path="/staff/approve-leave" element={<LeaveApprove />} />
      <Route path="/staff/leave-status" element={<LeaveStatus />} />
      <Route path="/staff/generate-otp" element={<GenerateOTP />} />
      <Route path="/staff/view-attendance" element={<StaffViewAttendance />} />

      <Route path="/student/leave-apply" element={<StudentLeaveApply />} />
      <Route path="/student/leave-status" element={<LeaveStatus />} />
      <Route path="/student/mark-attendance" element={<StudentMarkAttendance />} />
      <Route path="/student/view-attendance" element={<StudentViewAttendance />} />
      <Route path="/student/view-timetable" element={<StudentViewTimetable />} />

      <Route path="/admin/leave-approve" element={<LeaveApprove />} />

      <Route path="/profile" element={<Profile />} />

    </Routes>
  );
}

export default App;
