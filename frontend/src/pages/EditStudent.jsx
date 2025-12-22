import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useEffect } from "react";

function EditStudent() {
  const [studentList, setStudentList] = useState([]);

  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("");

  const [editData, setEditData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const token = localStorage.getItem("token");
const decoded = JSON.parse(atob(token.split(".")[1]));
console.log("Decoded token:", decoded);

  useEffect(() => {
  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.get(
        "http://localhost:8080/manager/students",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // 🔑 Map backend response to UI format
      const data = Array.isArray(response.data)
        ? response.data
        : response.data?.data || [];

      const mappedStudents = data.map((stu) => ({
        id: stu.id,
        name: stu.name || stu.studentName,
        reg: stu.reg || stu.registerNumber,
        dept: stu.dept || stu.department,
        year: stu.year,
      }));

      setStudentList(mappedStudents);
    } catch (err) {
      console.error("Failed to load students", err);
      setStudentList([]);
    }
  };

  fetchStudents();
}, []);


  // Filtering
  const filteredStudents = studentList.filter(
    (stu) =>
      (stu.name.toLowerCase().includes(search.toLowerCase()) ||
        stu.reg.toLowerCase().includes(search.toLowerCase())) &&
      (filterDept === "" || stu.dept === filterDept)
  );

  // Pagination
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const paginatedStudents = filteredStudents.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

  const handleSave = () => {
    setStudentList(
      studentList.map((st) => (st.id === editData.id ? editData : st))
    );
    setEditData(null);
  };

  const confirmDelete = () => {
    setStudentList(studentList.filter((st) => st.id !== deleteId));
    setDeleteId(null);
  };

  return (
    <>
      <style>
        {`
.edit-student-container {
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
.student-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  background: white;
}

.student-table th,
.student-table td {
  padding: 12px;
  border-bottom: 1px solid #eee;
  text-align: left;
}

.student-table th {
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
        `}
      </style>

      <Layout>
        <div className="edit-student-container">
          <h2>Edit Student</h2>

          {/* Search + Filter */}
          <div className="top-bar">
            <input
              type="text"
              placeholder="Search Student..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              value={filterDept}
              onChange={(e) => setFilterDept(e.target.value)}
            >
              <option value="">All Departments</option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="IT">IT</option>
            </select>
          </div>

          {/* Student Table */}
          <table className="student-table">
            <thead>
              <tr>
                <th>Name</th>
    <th>DOB</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Year</th>
    <th>Mobile</th>
    <th>Email</th>
    <th>Relation</th>
    <th>Relation Name</th>
    <th>Relation Mobile</th>
    <th>Relation Address</th>
    <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {paginatedStudents.map((stu) => (
                <tr key={stu.id}>
                  <td>{stu.name}</td>
      <td>{stu.dob}</td>
      <td>{stu.gender}</td>
      <td>{stu.department}</td>
      <td>{stu.year}</td>
      <td>{stu.mobileNo}</td>
      <td>{stu.email}</td>
      <td>{stu.relation}</td>
      <td>{stu.relationName}</td>
      <td>{stu.relationMobile}</td>
      <td>{stu.relationAddress}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => setEditData(stu)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => setDeleteId(stu.id)}
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

          {/* Edit Popup */}
          {editData && (
            <div className="modal">
              <div className="modal-content">
                <h3>Edit Student Details</h3>

                <input
                  type="text"
                  value={editData.name}
                  onChange={(e) =>
                    setEditData({ ...editData, name: e.target.value })
                  }
                />

                <input
                  type="text"
                  value={editData.reg}
                  onChange={(e) =>
                    setEditData({ ...editData, reg: e.target.value })
                  }
                />

                <select
                  value={editData.dept}
                  onChange={(e) =>
                    setEditData({ ...editData, dept: e.target.value })
                  }
                >
                  <option value="CSE">CSE</option>
                  <option value="ECE">ECE</option>
                  <option value="EEE">EEE</option>
                  <option value="IT">IT</option>
                </select>

                <input
                  type="text"
                  value={editData.year}
                  onChange={(e) =>
                    setEditData({ ...editData, year: e.target.value })
                  }
                />

                <div className="modal-actions">
                  <button className="save-btn" onClick={handleSave}>
                    Save
                  </button>
                  <button
                    className="close-btn"
                    onClick={() => setEditData(null)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Delete Popup */}
          {deleteId && (
            <div className="modal">
              <div className="modal-content">
                <p>Are you sure you want to delete this student?</p>

                <div className="modal-actions">
                  <button className="delete-confirm" onClick={confirmDelete}>
                    Delete
                  </button>
                  <button
                    className="close-btn"
                    onClick={() => setDeleteId(null)}
                  >
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

export default EditStudent;

