import React, { useState } from "react";
import Layout from "../components/Layout";
import "../CSS/AddStudent.css";

function AddStaff() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    experience: "",
    specialization: "",
    position: "",
    gender: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const staffList = JSON.parse(localStorage.getItem("staffList")) || [];

    staffList.push({
      id: Date.now(),
      ...form,
    });

    localStorage.setItem("staffList", JSON.stringify(staffList));

    alert("Staff Added Successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      department: "",
      experience: "",
      specialization: "",
      position: "",
      gender: "",
      address: "",
    });
  };

  return (
    <Layout>
      <div className="addstudent-container">
        <h1 className="page-title">Add Staff</h1>

        <form className="form-grid" onSubmit={handleSubmit}>
          <h2 className="section-title">Staff Details</h2>

          <div className="form-group">
            <label>Staff Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Mobile Number</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Department</label>
            <select
              name="department"
              value={form.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              <option>CSE</option>
              <option>IT</option>
              <option>ECE</option>
              <option>EEE</option>
              <option>MECH</option>
              <option>CIVIL</option>
            </select>
          </div>

          <div className="form-group">
            <label>Staff Experience</label>
            <input
              name="experience"
              value={form.experience}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Specialization</label>
            <input
              name="specialization"
              value={form.specialization}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Position</label>
            <select
              name="position"
              value={form.position}
              onChange={handleChange}
            >
              <option value="">Select position</option>
              <option>HOD</option>
              <option>Staff</option>
            </select>
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <h2 className="section-title">Address</h2>

          <div className="form-group-full">
            <label>Residential Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="button-row">
            <button type="reset" className="btn cancel">
              Cancel
            </button>
            <button type="submit" className="btn submit">
              Add Staff
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default AddStaff;
