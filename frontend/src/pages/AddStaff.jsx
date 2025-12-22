import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import "../CSS/AddStudent.css";

function AddStaff() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    staffName: "",
    email: "",
    mobileNumber: "",
    experience: "",
    specialization: "",
    position: "", // STAFF or HOD
    gender: "",
    address: "",
    department: "",
  });

  /* ================= FETCH DEPARTMENTS ================= */
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "http://localhost:8080/manager/departments",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setDepartments(res.data || []);
      } catch (err) {
        setError("Failed to load departments");
      }
    };
    fetchDepartments();
  }, []);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.staffName || !formData.email) {
      setError("Staff Name and Email are required");
      return;
    }

    if (!formData.department) {
      setError("Please select a department");
      return;
    }

    if (!formData.position) {
      setError("Please select position");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:8080/manager/add-staff",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("Staff added successfully");

      setFormData({
        staffName: "",
        email: "",
        mobileNumber: "",
        experience: "",
        specialization: "",
        position: "",
        gender: "",
        address: "",
        department: "",
      });
    } catch (err) {
      setError(err.response?.data || "Staff adding failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="addstudent-container">
        <h1 className="page-title">Add Staff</h1>

        {error && <p className="error-text">{error}</p>}

        <form className="form-grid" onSubmit={handleSubmit}>
          <h2 className="section-title">Staff Details</h2>

          <div className="form-group">
            <label>Staff Name</label>
            <input
              type="text"
              name="staffName"
              value={formData.staffName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              {departments.map((d) => (
                <option key={d.id} value={d.name}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Experience (Years)</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Specialization</label>
            <input
              type="text"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Position</label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            >
              <option value="">Select Position</option>
              <option value="HOD">HOD</option>
              <option value="STAFF">Staff</option>
            </select>
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
              <option value="Other">Other</option>
            </select>
          </div>

          <h2 className="section-title">Address</h2>

          <div className="form-group-full">
            <label>Residential Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="button-row">
            <button type="submit" className="btn submit" disabled={loading}>
              {loading ? "Saving..." : "Add Staff"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default AddStaff;
