import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddStudent from "./pages/AddStudent.jsx";
import AddStaff from "./pages/AddStaff.jsx";
import EditStudent from "./pages/EditStudent.jsx";
import EditStaff from "./pages/EditStaff.jsx";
import ManagerLeaveApply from "./pages/ManagerLeaveApply.jsx";
import HodAssignStaff from "./pages/HodAssignStaff.jsx";
import HodLeaveApprove from "./pages/HodLeaveApprove.jsx";
import HodLeaveApply from "./pages/HodLeaveApply.jsx";
import StaffLeaveApprove from "./pages/StaffLeaveApprove.jsx";
import StaffLeaveApply from "./pages/StaffLeaveApply.jsx";
import GenerateOTP from "./pages/GenerateOTP.jsx";
import StaffViewAttendance from "./pages/StaffViewAttendance.jsx";
import StudentLeaveApply from "./pages/StudentLeaveApply.jsx";
import StudentMarkAttendance from "./pages/StudentMarkAttendance.jsx";
import StudentViewAttendance from "./pages/StudentViewAttendance.jsx";
import StudentViewTimetable from "./pages/StudentViewTimetable.jsx";
import Profile from "./pages/Profile.jsx";
import "./index.css";


function App() {
  return (
    <Routes>

      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Universal dashboard for all roles */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/manager/dashboard" element={<Dashboard />} />
      <Route path="/hod/dashboard" element={<Dashboard />} />
      <Route path="/staff/dashboard" element={<Dashboard />} />
      <Route path="/student/dashboard" element={<Dashboard />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />

      {/* Manager Routes */}
      <Route path="/manager/add-students" element={<AddStudent />} />
      <Route path="/manager/add-staffs" element={<AddStaff />} />
      <Route path="/manager/edit-students" element={<EditStudent />} />
      <Route path="/manager/edit-staffs" element={<EditStaff />} />
      <Route path="/manager/apply-leave" element={<ManagerLeaveApply />} />

      {/* HOD Routes */}
      <Route path="/hod/assign-staff" element={<HodAssignStaff />} />
      <Route path="/hod/leave-approve" element={<HodLeaveApprove />} />
      <Route path="/hod/apply-leave" element={<HodLeaveApply />} />

      {/* Staff Routes */}
      <Route path="/staff/approve-leave" element={<StaffLeaveApprove />} />
      <Route path="/staff/apply-leave" element={<StaffLeaveApply />} />
      <Route path="/staff/generate-otp" element={<GenerateOTP />} />
      <Route path="/staff/view-attendance" element={<StaffViewAttendance />} />

      {/* Student Routes */}
      <Route path="/student/leave-apply" element={<StudentLeaveApply />} />
      <Route path="/student/mark-attendance" element={<StudentMarkAttendance />} />
      <Route path="/student/view-attendance" element={<StudentViewAttendance />} />
      <Route path="/student/view-timetable" element={<StudentViewTimetable />} />

      {/* profie route */}
      <Route path="/profile" element={<Profile />} />

    </Routes>
  );
}

export default App;
