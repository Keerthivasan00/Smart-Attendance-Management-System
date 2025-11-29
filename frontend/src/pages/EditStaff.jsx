import React, { useState } from "react";
import Layout from "../components/Layout";

function EditStaff() {
  // Dummy staff data
  const [staffList, setStaffList] = useState([
    { id: 1, name: "Ram Kumar", email: "ram@gmail.com", dept: "Science", phone: "9876543210" },
    { id: 2, name: "Priya R", email: "priya@gmail.com", dept: "Maths", phone: "9876512345" },
    { id: 3, name: "Arun S", email: "arun@gmail.com", dept: "Computer Science", phone: "9003123456" },
  ]);

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
    (filterDept === "" || staff.dept === filterDept)
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
            <option value="Science">Science</option>
            <option value="Maths">Maths</option>
            <option value="Computer Science">Computer Science</option>
          </select>
        </div>

        {/* Staff Table */}
        <table className="staff-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {paginatedStaff.map((staff) => (
              <tr key={staff.id}>
                <td>{staff.name}</td>
                <td>{staff.email}</td>
                <td>{staff.dept}</td>
                <td>{staff.phone}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => setEditData(staff)}
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
            <div className="modal-content">
              <h3>Edit Staff Details</h3>

              <input
                type="text"
                value={editData.name}
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              />

              <input
                type="email"
                value={editData.email}
                onChange={(e) => setEditData({ ...editData, email: e.target.value })}
              />

              <select
                value={editData.dept}
                onChange={(e) => setEditData({ ...editData, dept: e.target.value })}
              >
                <option>Science</option>
                <option>Maths</option>
                <option>Computer Science</option>
              </select>

              <input
                type="text"
                value={editData.phone}
                onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
              />

              <div className="modal-actions">
                <button className="save-btn" onClick={handleSave}>Save</button>
                <button className="close-btn" onClick={() => setEditData(null)}>Cancel</button>
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
