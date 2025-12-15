import React from "react";
import Layout from "../components/Layout"; 

const StaffDashboard = () => {
  return (
    
      <div
  style={{
    padding: "25px",
    overflowY: "auto",
    background: "#f5f7fa",
    height: "100%",
  }}
>
 
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "60% 39%",
      gap: "20px",
      marginBottom: "25px",
    }}
  >
    
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        border: "1px solid #e5e7eb",
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "600",
          marginBottom: "12px",
          color: "#111827",
        }}
      >
        Overall Attendance Percentage
      </h2>

      <p
        style={{
          fontSize: "40px",
          fontWeight: "700",
          color: "#4f46e5",
          marginTop: "10px",
        }}
      >
        94%
      </p>
    </div>

    {/* ---------------- UPCOMING TIMETABLE ---------------- */}
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        border: "1px solid #e5e7eb",
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "600",
          marginBottom: "12px",
          color: "#111827",
        }}
      >
        Upcoming Timetable
      </h2>

      <ul style={{ lineHeight: "32px", fontSize: "15px" }}>
        <li>Tomorrow – 9 AM: CSE-D Class</li>
        <li>Tomorrow – 11 AM: Lab Monitoring</li>
        <li>Friday – 2 PM: Meeting with Principal</li>
        <li>Saturday – 10 AM: Project Review</li>
      </ul>
    </div>
  </div>

  {/* -------- LAST 5 LEAVES TABLE -------- */}
  <div
    style={{
      background: "#fff",
      padding: "20px",
      borderRadius: "10px",
      border: "1px solid #e5e7eb",
      marginBottom: "25px",
    }}
  >
    <h2
      style={{
        fontSize: "20px",
        fontWeight: "600",
        marginBottom: "15px",
        color: "#111827",
      }}
    >
      Last 5 Leaves Applied
    </h2>

    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        fontSize: "15px",
      }}
    >
      <thead>
        <tr style={{ background: "#f3f4f6", textAlign: "left" }}>
          <th style={{ padding: "10px", borderBottom: "1px solid #e5e7eb" }}>
            Date
          </th>
          <th style={{ padding: "10px", borderBottom: "1px solid #e5e7eb" }}>
            Reason
          </th>
          <th style={{ padding: "10px", borderBottom: "1px solid #e5e7eb" }}>
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: "10px", borderBottom: "1px solid #f0f0f0" }}>
            02 Feb 2025
          </td>
          <td style={{ padding: "10px", borderBottom: "1px solid #f0f0f0" }}>
            Fever
          </td>
          <td style={{ padding: "10px", color: "#059669" }}>Approved</td>
        </tr>
        <tr>
          <td style={{ padding: "10px", borderBottom: "1px solid #f0f0f0" }}>
            20 Jan 2025
          </td>
          <td style={{ padding: "10px", borderBottom: "1px solid #f0f0f0" }}>
            Family Function
          </td>
          <td style={{ padding: "10px", color: "#f59e0b" }}>Pending</td>
        </tr>
        <tr>
          <td style={{ padding: "10px", borderBottom: "1px solid #f0f0f0" }}>
            18 Jan 2025
          </td>
          <td style={{ padding: "10px", borderBottom: "1px solid #f0f0f0" }}>
            Personal
          </td>
          <td style={{ padding: "10px", color: "#059669" }}>Approved</td>
        </tr>
        <tr>
          <td style={{ padding: "10px", borderBottom: "1px solid #f0f0f0" }}>
            10 Jan 2025
          </td>
          <td style={{ padding: "10px", borderBottom: "1px solid #f0f0f0" }}>
            Travel
          </td>
          <td style={{ padding: "10px", color: "#dc2626" }}>Rejected</td>
        </tr>
        <tr>
          <td style={{ padding: "10px" }}>08 Jan 2025</td>
          <td style={{ padding: "10px" }}>Medical</td>
          <td style={{ padding: "10px", color: "#059669" }}>Approved</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

   
  );
};

export default StaffDashboard;

