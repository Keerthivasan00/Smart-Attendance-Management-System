import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import "../CSS/AddStudent.css";

function AddStudent() {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [relationType, setRelationType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    year: "",
    mobileNo: "",
    email: "",
    relation: "",
    relationName: "",
    relationMobile: "",
    relationAddress: "",
  });
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:8080/manager/departments",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const deptData = Array.isArray(response.data)
          ? response.data
          : response.data?.data || [];

        setDepartments(deptData);
      } catch (err) {
        console.error("Failed to load departments", err);
        setError("Failed to load departments");
        setDepartments([]);
      }
    };

    fetchDepartments();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!selectedDepartment) {
      setError("Please select a department");
      return;
    }

    if (!formData.name || !formData.email) {
      setError("Name and Email are required");
      return;
    }

    const payload = {
      ...formData,
      departmentName: selectedDepartment,
    };

    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:8080/manager/add-student",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Student added successfully");
      setFormData({
        name: "",
        dob: "",
        gender: "",
        year: "",
        mobileNo: "",
        email: "",
        relation: "",
        relationName: "",
        relationMobile: "",
        relationAddress: "",
      });

      setSelectedDepartment("");
      setRelationType("");
    } catch (err) {
      console.error("Student Adding Failed", err);
      setError(
        err.response?.data?.message ||
          "Student adding failed. Email may already exist."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="addstudent-container">
        <h1 className="page-title">Add Student</h1>

        {error && <p className="error-text">{error}</p>}

        <form className="form-grid" onSubmit={handleSubmit}>
          <h2 className="section-title">Student Details</h2>

          <div className="form-group">
            <label>Student Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Student Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <label>Department</label>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              required
            >
              <option value="">Select Department</option>

              {Array.isArray(departments) &&
                departments.map((dept) => (
                  <option key={dept.id} value={dept.name}>
                    {dept.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-group">
            <label>Year</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
            >
              <option value="">Select Year</option>
              <option value="I">I</option>
              <option value="II">II</option>
              <option value="III">III</option>
              <option value="IV">IV</option>
            </select>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
            />
          </div>

          {/* RELATION CHOICE */}
          <h2 className="section-title">Contact Relation</h2>

          <div className="form-group-full">
            <label>Select Relation</label>
            <select
              name="relation"
              value={formData.relation}
              onChange={(e) => {
                handleChange(e);
                setRelationType(e.target.value);
              }}
            >
              <option value="">-- Choose --</option>
              <option value="parent">Parent</option>
              <option value="guardian">Guardian</option>
            </select>
          </div>

          {(relationType === "parent" || relationType === "guardian") && (
            <>
              <h2 className="section-title">
                {relationType === "parent"
                  ? "Parent Details"
                  : "Guardian Details"}
              </h2>

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="relationName"
                  value={formData.relationName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  type="text"
                  name="relationMobile"
                  value={formData.relationMobile}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group-full">
                <label>Address</label>
                <textarea
                  name="relationAddress"
                  value={formData.relationAddress}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
          <div className="button-row">
            <button type="button" className="btn cancel">
              Cancel
            </button>
            <button
              type="submit"
              className="btn submit"
              disabled={loading}
            >
              {loading ? "Saving..." : "Add Student"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default AddStudent;
