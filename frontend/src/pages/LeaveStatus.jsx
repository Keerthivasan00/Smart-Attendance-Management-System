import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

const LeaveStatus = () => {
  const [leaves, setLeaves] = useState([]);

  const role = localStorage.getItem("role");
  const user =
    JSON.parse(localStorage.getItem(role)) || {};

  useEffect(() => {
    const allLeaves =
      JSON.parse(localStorage.getItem("leaveRequests")) || [];

    // Show only logged-in user's leaves
    const myLeaves = allLeaves.filter(
      (leave) =>
        leave.applicantRole === role &&
        leave.applicantName === user.name
    );

    setLeaves(myLeaves);
  }, [role, user.name]);

  return (
    <Layout>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">
          My Leave Status
        </h2>

        {leaves.length === 0 ? (
          <p className="text-gray-600">
            No leave requests found
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2">From</th>
                  <th className="p-2">To</th>
                  <th className="p-2">Reason</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>

              <tbody>
                {leaves.map((l) => (
                  <tr
                    key={l.id}
                    className="text-center border-t"
                  >
                    <td className="p-2">
                      {l.fromDate}
                    </td>
                    <td className="p-2">
                      {l.toDate}
                    </td>
                    <td className="p-2">
                      {l.reason}
                    </td>
                    <td
                      className={`p-2 font-semibold ${
                        l.status === "Approved"
                          ? "text-green-600"
                          : l.status === "Rejected"
                          ? "text-red-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {l.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default LeaveStatus;
