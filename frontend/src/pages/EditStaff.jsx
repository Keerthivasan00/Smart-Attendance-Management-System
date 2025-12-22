import React, { useState } from "react";
import Layout from "../components/Layout";
import { useEffect } from "react";

function EditStaff() {
  // Dummy staff data
  const [staffList, setStaffList] = useState([]);

useEffect(() => {
  const data = JSON.parse(localStorage.getItem("staffList")) || [];
  setStaffList(data);
}, []);

  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("");

  // Edit Form State
  const [editData, setEditData] = useState(null);

  // Delete Popup
  const [deleteId, setDeleteId] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter Logic
  const filteredStaff = staffList.filter(staff =>
    staff.name.toLowerCase().includes(search.toLowerCase()) &&
    (filterDept === "" || staff.department === filterDept)
  );

  // Pagination Logic
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const paginatedStaff = filteredStaff.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredStaff.length / itemsPerPage);

  // Handle Edit Save
  const handleSave = () => {
    setStaffList(staffList.map(st => (st.id === editData.id ? editData : st)));
    setEditData(null);
  };

  // Handle Delete
  const confirmDelete = () => {
    setStaffList(staffList.filter(st => st.id !== deleteId));
    setDeleteId(null);
  };

  return (
    <>
    <style>
      {
        `
        .edit-staff-container {
  padding: 20px;
}

.top-bar {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.top-bar input,
.top-bar select {
  padding: 10px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* TABLE */
.staff-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  background: white;
}

.staff-table th,
.staff-table td {
  padding: 12px;
  border-bottom: 1px solid #eee;
  text-align: left;
}

.staff-table th {
  background: #f4f4f4;
}

.edit-btn {
  padding: 5px 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  margin-right: 8px;
}

.delete-btn {
  padding: 5px 10px;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
}

/* PAGINATION */
.pagination {
  margin-top: 20px;
}

.pagination button {
  padding: 8px 12px;
  margin-right: 5px;
  border: none;
  background: #ddd;
  border-radius: 5px;
}

.pagination .active {
  background: #007bff;
  color: white;
}

/* MODAL POPUPS */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  width: 350px;
  background: white;
  padding: 20px;
  border-radius: 10px;
}

.modal-content input,
.modal-content select {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.save-btn {
  background: green;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
}

.close-btn {
  background: gray;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
}

.delete-confirm {
  background: #d9534f;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
}
        `
      }
    </style>
    <Layout>
      <div className="edit-staff-container">
        <h2>Edit Staff</h2>

        {/* Search + Filter */}
        <div className="top-bar">
          <input
            type="text"
            placeholder="Search Staff..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select value={filterDept} onChange={(e) => setFilterDept(e.target.value)}>
            <option value="">All Departments</option>
            <option value="IT">IT</option>
            <option value="CSE">CSE</option>
            <option value="EEE">EEE</option>
            <option value="ECE">ECE</option>
            <option value="MECH">MECH</option>
            <option value="CIVIL">CIVIL</option>
          </select>
        </div>

        {/* Staff Table */}
        <table className="staff-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Department</th>
              <th>Experience</th>
              <th>Specialization</th>
              <th>Position</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginatedStaff.map((staff) => (
              <tr key={staff.id}>
                <td>{staff.name}</td>
                <td>{staff.email}</td>
                <td>{staff.department}</td>
                <td>{staff.phone}</td>
                <td>{staff.experience}</td>
                <td>{staff.specialization}</td>
                <td>{staff.position}</td>
                <td>{staff.gender}</td>
                <td>{staff.address}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => setEditData({...staff})}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => setDeleteId(staff.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Edit Form Popup */}
        {editData && (
  <div className="modal">
    <div className="modal-content" style={{ width: "500px" }}>
      <h3>Edit Staff</h3>

      <input
        placeholder="Staff Name"
        value={editData.name}
        onChange={(e)=>setEditData({...editData,name:e.target.value})}
      />

      <input
        placeholder="Email"
        value={editData.email}
        onChange={(e)=>setEditData({...editData,email:e.target.value})}
      />

      <input
        placeholder="Mobile Number"
        value={editData.phone}
        onChange={(e)=>setEditData({...editData,phone:e.target.value})}
      />

      <select
        value={editData.department}
        onChange={(e)=>setEditData({...editData,department:e.target.value})}
      >
        <option value="">Select Department</option>
        <option>CSE</option>
        <option>IT</option>
        <option>ECE</option>
        <option>EEE</option>
        <option>MECH</option>
        <option>CIVIL</option>
      </select>

      <input
        placeholder="Experience"
        value={editData.experience}
        onChange={(e)=>setEditData({...editData,experience:e.target.value})}
      />

      <input
        placeholder="Specialization"
        value={editData.specialization}
        onChange={(e)=>setEditData({...editData,specialization:e.target.value})}
      />

      <select
        value={editData.position}
        onChange={(e)=>setEditData({...editData,position:e.target.value})}
      >
        <option>HOD</option>
        <option>Staff</option>
      </select>

      <select
        value={editData.gender}
        onChange={(e)=>setEditData({...editData,gender:e.target.value})}
      >
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <textarea
        placeholder="Address"
        value={editData.address}
        onChange={(e)=>setEditData({...editData,address:e.target.value})}
      />

      <div className="modal-actions">
        <button
          className="save-btn"
          onClick={() => {
            const updated = staffList.map(st =>
              st.id === editData.id ? editData : st
            );
            setStaffList(updated);
            localStorage.setItem("staffList", JSON.stringify(updated));
            setEditData(null);
          }}
        >
          Update
        </button>

        <button className="close-btn" onClick={() => setEditData(null)}>
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

        {/* Delete Confirmation Popup */}
        {deleteId && (
          <div className="modal">
            <div className="modal-content delete-box">
              <p>Are you sure you want to delete this staff?</p>

              <div className="modal-actions">
                <button className="delete-confirm" onClick={confirmDelete}>Delete</button>
                <button className="close-btn" onClick={() => setDeleteId(null)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
    </>
  );
}

export default EditStaff;
