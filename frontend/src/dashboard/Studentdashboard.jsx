import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/Studentdashboard.css";

const Studentdashboard = () => {
  const studentId = localStorage.getItem("studentId");

  const [attendance, setAttendance] = useState(0);
  const [leaves, setLeaves] = useState([]);
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    if (!studentId) return;

    // Attendance
    axios
      .get(`http://localhost:5000/api/student/${studentId}/attendance`)
      .then((res) => {
        const { presentDays, totalDays } = res.data;
        if (!presentDays || !totalDays) return;
        setAttendance(((presentDays / totalDays) * 100).toFixed(1));
      })
      .catch(() => setAttendance(0));

    // Leaves
    axios
      .get(`http://localhost:5000/api/student/${studentId}/leaves`)
      .then((res) => {
        if (Array.isArray(res.data)) setLeaves(res.data);
        else if (Array.isArray(res.data.leaves)) setLeaves(res.data.leaves);
        else setLeaves([]);
      });

    // Holidays
    axios.get("http://localhost:5000/api/holidays/upcoming").then((res) => {
      if (Array.isArray(res.data)) setHolidays(res.data);
      else setHolidays([]);
    });
  }, [studentId]);

  return (
    <>
      {/* Top Section */}
      <div className="top-grid">
        {/* Attendance Card */}
        <div className="attendance-card">
          <h2 className="section-title">Attendance Overview</h2>
          <div className="attendance-circle">
            <svg className="circle-svg">
              <circle className="circle-bg" cx="50%" cy="50%" r="45%" />
              <circle
                className="circle-progress"
                style={{ strokeDasharray: `${attendance * 2.83} 283` }}
                cx="50%"
                cy="50%"
                r="45%"
              />
            </svg>
            <div className="attendance-percent">{attendance}%</div>
          </div>
        </div>

        {/* Upcoming Holidays */}
        <div className="holiday-card">
          <h2 className="section-title">Upcoming Holidays</h2>
          {holidays.length > 0 ? (
            <div className="holiday-grid">
              {holidays.map((h, i) => (
                <div key={i} className="holiday-item">
                  <h3 className="holiday-name">{h.name}</h3>
                  <p className="holiday-date">{h.date}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-data">No upcoming holidays</p>
          )}
        </div>
      </div>

      {/* Leave Table */}
      <div className="leave-card">
        <h2 className="section-title">My Leave Requests</h2>
        <div className="table-wrapper">
          <table className="leave-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {leaves.length > 0 ? (
                leaves
                  .slice(-5) 
                  .map((leave, index) => (
                    <tr key={index}>
                      <td>{leave.date}</td>
                      <td>{leave.reason}</td>
                      <td className={`status ${leave.status.toLowerCase()}`}>
                        {leave.status}
                      </td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan="3" className="no-data">
                    No leave requests found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Studentdashboard;
