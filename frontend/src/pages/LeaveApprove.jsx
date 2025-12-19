import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

const LeaveApprove = () => {
  const [leaves, setLeaves] = useState([]);
  const role = localStorage.getItem("role"); // staff / hod / admin

  // Load leave requests sent to this role
  useEffect(() => {
    const allLeaves =
      JSON.parse(localStorage.getItem("leaveRequests")) || [];

    const filtered = allLeaves.filter(
      (leave) =>
        leave.sentTo === role && leave.status === "Pending"
    );

    setLeaves(filtered);
  }, [role]);

  const updateStatus = (id, status) => {
    const allLeaves =
      JSON.parse(localStorage.getItem("leaveRequests")) || [];

    const updatedLeaves = allLeaves.map((leave) =>
      leave.id === id ? { ...leave, status } : leave
    );

    localStorage.setItem(
      "leaveRequests",
      JSON.stringify(updatedLeaves)
    );

    // Remove from current view
    setLeaves(leaves.filter((l) => l.id !== id));
  };

  return (
    <Layout>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">
          Leave Requests
        </h2>

        {leaves.length === 0 ? (
          <p className="text-gray-600">
            No pending leave requests
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2">Name</th>
                  <th className="p-2">Department</th>
                  <th className="p-2">From</th>
                  <th className="p-2">To</th>
                  <th className="p-2">Reason</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>

              <tbody>
                {leaves.map((l) => (
                  <tr
                    key={l.id}
                    className="text-center border-t"
                  >
                    <td className="p-2">
                      {l.applicantName}
                    </td>
                    <td className="p-2">
                      {l.department}
                    </td>
                    <td className="p-2">
                      {l.fromDate}
                    </td>
                    <td className="p-2">
                      {l.toDate}
                    </td>
                    <td className="p-2">
                      {l.reason}
                    </td>
                    <td className="p-2 space-x-2">
                      <button
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                        onClick={() =>
                          updateStatus(l.id, "Approved")
                        }
                      >
                        Approve
                      </button>
                      <button
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                        onClick={() =>
                          updateStatus(l.id, "Rejected")
                        }
                      >
                        Reject
                      </button>
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

export default LeaveApprove;
