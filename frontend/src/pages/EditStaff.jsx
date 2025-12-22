import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";

function EditStaff() {
  const [staffList, setStaffList] = useState([]);
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("");

  const [editData, setEditData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const token = localStorage.getItem("token");

  /* ================= FETCH ALL STAFF ================= */
  useEffect(() => {
    fetchStaffs();
  }, []);

  const fetchStaffs = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/manager/get-staffs",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setStaffList(res.data || []);
    } catch (err) {
      console.error("Failed to load staff", err);
    }
  };

  /* ================= FILTER ================= */
  const filteredStaff = staffList.filter(
    (st) =>
      st.staffName.toLowerCase().includes(search.toLowerCase()) &&
      (filterDept === "" || st.departmentName === filterDept)
  );

  /* ================= PAGINATION ================= */
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const paginatedStaff = filteredStaff.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredStaff.length / itemsPerPage);

  /* ================= EDIT (FETCH BY ID) ================= */
  const handleEdit = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/manager/get-staff/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEditData(res.data);
    } catch (err) {
      console.error("Failed to fetch staff", err);
    }
  };

  /* ================= UPDATE ================= */
  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:8080/manager/update-staff/${editData.id}`,
        editData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      fetchStaffs(); // refresh list
      setEditData(null);
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  /* ================= DELETE ================= */
  const confirmDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:8080/manager/delete-staff/${deleteId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      fetchStaffs();
      setDeleteId(null);
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <>
      {/* ================= STYLES ================= */}
      <style>{`
        .edit-staff-container { padding: 20px; }
        .top-bar { display: flex; gap: 15px; margin-bottom: 20px; flex-wrap: wrap; }
        .top-bar input, .top-bar select {
          padding: 10px; width: 250px;
          border: 1px solid #ccc; border-radius: 5px;
        }

        .table-container {
          width: 100%;
          overflow-x: auto;
          border: 1px solid #ddd;
          border-radius: 8px;
        }

        .staff-table {
          min-width: 1600px;
          border-collapse: collapse;
          background: white;
        }

        .staff-table th, .staff-table td {
          padding: 12px;
          border-bottom: 1px solid #eee;
          white-space: nowrap;
        }

        .staff-table th { background: #f4f4f4; }

        .edit-btn {
          background: #007bff;
          color: white;
          border: none;
          padding: 6px 10px;
          border-radius: 5px;
          margin-right: 6px;
        }

        .delete-btn {
          background: #dc3545;
          color: white;
          border: none;
          padding: 6px 10px;
          border-radius: 5px;
        }

        .pagination { margin-top: 20px; }
        .pagination button {
          padding: 8px 12px;
          margin-right: 5px;
          border: none;
          border-radius: 5px;
          background: #ddd;
        }
        .pagination .active {
          background: #007bff;
          color: white;
        }

        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          width: 500px;
          background: white;
          padding: 20px;
          border-radius: 10px;
        }

        .modal-content input,
        .modal-content select,
        .modal-content textarea {
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
          border: none;
          border-radius: 5px;
        }
      `}</style>

      <Layout>
        <div className="edit-staff-container">
          <h2>Edit Staff</h2>

          {/* SEARCH + FILTER */}
          <div className="top-bar">
            <input
              placeholder="Search Staff..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              value={filterDept}
              onChange={(e) => setFilterDept(e.target.value)}
            >
              <option value="">All Departments</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
            </select>
          </div>

          {/* TABLE */}
          <div className="table-container">
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
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {paginatedStaff.map((st) => (
                  <tr key={st.id}>
                    <td>{st.staffName}</td>
                    <td>{st.email}</td>
                    <td>{st.mobileNumber}</td>
                    <td>{st.departmentName}</td>
                    <td>{st.experience}</td>
                    <td>{st.specialization}</td>
                    <td>{st.position}</td>
                    <td>{st.gender}</td>
                    <td>{st.address}</td>
                    <td>
                      <button className="edit-btn" onClick={() => handleEdit(st.id)}>
                        Edit
                      </button>
                      <button className="delete-btn" onClick={() => setDeleteId(st.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
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

          {/* EDIT MODAL */}
          {editData && (
            <div className="modal">
              <div className="modal-content">
                <h3>Edit Staff</h3>

                <input
                  value={editData.staffName}
                  onChange={(e) =>
                    setEditData({ ...editData, staffName: e.target.value })
                  }
                />

                <input
                  value={editData.mobileNumber}
                  onChange={(e) =>
                    setEditData({ ...editData, mobileNumber: e.target.value })
                  }
                />

                <input
                  value={editData.experience}
                  onChange={(e) =>
                    setEditData({ ...editData, experience: e.target.value })
                  }
                />

                <textarea
                  value={editData.address}
                  onChange={(e) =>
                    setEditData({ ...editData, address: e.target.value })
                  }
                />

                <div className="modal-actions">
                  <button className="save-btn" onClick={handleUpdate}>
                    Update
                  </button>
                  <button className="close-btn" onClick={() => setEditData(null)}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* DELETE MODAL */}
          {deleteId && (
            <div className="modal">
              <div className="modal-content">
                <p>Are you sure you want to delete this staff?</p>
                <div className="modal-actions">
                  <button className="delete-confirm" onClick={confirmDelete}>
                    Delete
                  </button>
                  <button className="close-btn" onClick={() => setDeleteId(null)}>
                    Cancel
                  </button>
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
