// App.jsx
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddStudent from "./pages/AddStudent.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import "./index.css";
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
import ManagerDashboard from "./dashboard/Managerdashboard.jsx";
import HODDashboard from "./dashboard/Hoddashboard.jsx";
import StudentDashboard from "./dashboard/Studentdashboard.jsx";
import StaffDashboard from "./dashboard/Staffdashboard.jsx";


function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>

      <Route path="/manager/dashboard"element={<ProtectedRoute><ManagerDashboard /></ProtectedRoute>}/>
      <Route path="/manager/add-students"element={<ProtectedRoute><AddStudent /></ProtectedRoute>}/>
      <Route path="/manager/add-staffs"element={<ProtectedRoute><AddStaff /></ProtectedRoute>}/>
      <Route path="/manager/edit-students"element={<ProtectedRoute><EditStudent /></ProtectedRoute>}/>
      <Route path="/manager/edit-staffs"element={<ProtectedRoute><EditStaff /></ProtectedRoute>}/>
      <Route path="/manager/apply-leave"element={<ProtectedRoute><ManagerLeaveApply /></ProtectedRoute>}/>

      <Route path="/hod/dashboard"element={<ProtectedRoute><HODDashboard /></ProtectedRoute>}/>
      <Route path="/hod/assign-staff" element={<ProtectedRoute><HodAssignStaff /></ProtectedRoute>}/>
      <Route path="/hod/leave-approve"element={<ProtectedRoute><HodLeaveApprove /></ProtectedRoute>}/>
      <Route path="/hod/apply-leave"element={<ProtectedRoute><HodLeaveApply /></ProtectedRoute>}/>

      <Route path="/staff/dashboard"element={<ProtectedRoute><StaffDashboard /></ProtectedRoute>}/>
      <Route path="/staff/approve-leave"element={<ProtectedRoute><StaffLeaveApprove /></ProtectedRoute>}/>
      <Route path="/staff/apply-leave"element={<ProtectedRoute><StaffLeaveApply /></ProtectedRoute>}/>
      <Route path="/staff/generate-otp"element={<ProtectedRoute><GenerateOTP /></ProtectedRoute>}/>
      <Route path="/staff/view-attendance"element={<ProtectedRoute><StaffViewAttendance /></ProtectedRoute>}/>

      <Route path="/student/dashboard"element={<ProtectedRoute><StudentDashboard /></ProtectedRoute>}/>
      <Route path="/student/leave-apply"element={<ProtectedRoute><StudentLeaveApply /></ProtectedRoute>}/>
      <Route path="/student/mark-attendance"element={<ProtectedRoute><StudentMarkAttendance /></ProtectedRoute>}/>
      <Route path="/student/view-attendance"element={<ProtectedRoute><StudentViewAttendance /></ProtectedRoute>}/>
      <Route path="/student/view-timetable"element={<ProtectedRoute><StudentViewTimetable /></ProtectedRoute>}/>
      

      </Routes>
  );
}

export default App;
