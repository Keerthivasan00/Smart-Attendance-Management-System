import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

function EditStudent() {
  const [studentList, setStudentList] = useState([]);
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  /* ================= FETCH STUDENTS ================= */
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:8080/manager/get-students",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const data = Array.isArray(response.data) ? response.data : [];

        setStudentList(
          data.map((stu) => ({
            id: stu.id,
            name: stu.name,
            dob: stu.dob,
            gender: stu.gender,
            department: stu.departmentName,
            year: stu.year,
            mobileNo: stu.mobileNo,
            email: stu.email,
            relation: stu.relation,
            relationName: stu.relationName,
            relationMobile: stu.relationMobileNo,
            relationAddress: stu.relationAddress,
          }))
        );
      } catch (err) {
        console.error(err);
      }
    };

    fetchStudents();
  }, []);

  /* ================= FILTER ================= */
  const filteredStudents = studentList.filter(
    (stu) =>
      stu.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterDept === "" || stu.department === filterDept)
  );

  /* ================= PAGINATION ================= */
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const paginatedStudents = filteredStudents.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

  return (
    <>
      {/* ================= STYLES ================= */}
      <style>{`
        .edit-student-container {
          padding: 20px;
          width: 100%;
        }

        .top-bar {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .top-bar input,
        .top-bar select {
          padding: 10px;
          width: 250px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        /* ✅ FIXED WIDTH TABLE AREA */
        .table-container {
          width: 100%;
          max-width: 100%;
          overflow-x: auto;       /* horizontal scroll */
          overflow-y: hidden;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: #fff;
        }

        /* FORCE TABLE TO BE WIDER */
        .student-table {
          min-width: 1900px;      /* ⬅ THIS CREATES SCROLL */
          border-collapse: collapse;
        }

        .student-table th,
        .student-table td {
          padding: 12px;
          border-bottom: 1px solid #eee;
          white-space: nowrap;    /* prevent wrapping */
          text-align: left;
        }

        .student-table th {
          background: #f4f4f4;
          position: sticky;
          top: 0;
          z-index: 1;
        }

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

        .pagination {
          margin-top: 20px;
        }

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
      `}</style>

      <Layout>
        <div className="edit-student-container">
          <h2>Edit Student</h2>

          {/* SEARCH + FILTER */}
          <div className="top-bar">
            <input
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

          {/* ✅ TABLE WITH HORIZONTAL SCROLL */}
          <div className="table-container">
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
                      <button className="edit-btn">Edit</button>
                      <button className="delete-btn">Delete</button>
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
        </div>
      </Layout>
    </>
  );
}

export default EditStudent;
