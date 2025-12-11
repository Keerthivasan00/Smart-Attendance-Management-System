import React, { useEffect, useState } from "react";
import "../CSS/Studentdashboard.css";
import axios from "axios";

const Studentdashboard = () => {
  const USE_MOCK = true;

  const studentId = localStorage.getItem("studentId") || "23";

  const [attendance, setAttendance] = useState(0);
  const [holidays, setHolidays] = useState([]);
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    if (USE_MOCK) loadMockData();
    else fetchFromAPI();
  }, []);

  const loadMockData = () => {
    setAttendance(87);

    setHolidays([
      { name: "Republic Day", date: "2025-01-26" },
      { name: "Tamil New Year", date: "2025-04-14" },
    ]);

    setLeaves([
      { date: "2025-02-10", reason: "Fever", status: "Approved" },
      { date: "2025-02-05", reason: "Family event", status: "Pending" },
      { date: "2025-01-20", reason: "Travel", status: "Rejected" },
      { date: "2025-01-10", reason: "Cold", status: "Approved" },
      { date: "2024-12-28", reason: "Function", status: "Approved" },
      { date: "2024-12-20", reason: "Cough", status: "Approved" },
    ]);
  };

  const fetchFromAPI = async () => {
    try {
      const att = await axios.get(`/api/student/${studentId}/attendance`);
      const hol = await axios.get(`/api/holidays/upcoming`);
      const lv = await axios.get(`/api/student/${studentId}/leaves`);

      setAttendance(att.data.percentage);
      setHolidays(hol.data);
      setLeaves(lv.data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="student-dashboard">

        {/* ==== TOP TWO BOXES IN GRID ==== */}
        <div className="top-grid">

          {/* ATTENDANCE BLOCK */}
          <div className="dashboard-section">
            <h2 className="section-title">Attendance Overview</h2>

            <div className="attendance-wrapper">
              <div className="attendance-circle">
                <svg>
                  <circle className="bg-circle" cx="60" cy="60" r="50" />
                  <circle
                    className="progress-circle"
                    cx="60" cy="60" r="50"
                    style={{
                      strokeDashoffset: 314 - (314 * attendance) / 100,
                    }}
                  />
                </svg>
                <div className="attendance-value">{attendance}%</div>
              </div>
            </div>
          </div>

          {/* HOLIDAYS BLOCK */}
          <div className="dashboard-section">
            <h2 className="section-title">Upcoming Holidays</h2>

            {holidays.length > 0 ? (
              <div className="holiday-list">
                {holidays.map((h, i) => (
                  <div key={i} className="holiday-item">
                    <span className="holiday-name">{h.name}</span>
                    <span className="holiday-date">{h.date}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-data">No upcoming holidays</p>
            )}
          </div>
        </div>

        {/* ==== LEAVE TABLE AT BOTTOM ==== */}
        <div className="dashboard-section leave-table-section">
          <h2 className="section-title">Last 5 Leave Requests</h2>

          <div className="table-container">
            <table className="leave-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {leaves.slice(0, 5).map((leave, index) => (
                  <tr key={index}>
                    <td>{leave.date}</td>
                    <td>{leave.reason}</td>
                    <td className={`status ${leave.status.toLowerCase()}`}>
                      {leave.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {leaves.length === 0 && (
              <p className="no-data">No leave records found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Studentdashboard;
