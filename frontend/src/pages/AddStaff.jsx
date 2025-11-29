import React from 'react'
import Layout from '../components/Layout'
import "../CSS/AddStudent.css";

function AddStaff() {
  return (
    
    <Layout>
        <div className="addstudent-container">

        <h1 className="page-title">Add Staff</h1>

        <form className="form-grid">

          {/* STAFF DETAILS */}
          <h2 className="section-title">Staff Details</h2>

          <div className="form-group">
            <label>Staff Name</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Staff ID</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" />
          </div>

          <div className="form-group">
            <label>Mobile Number</label>
            <input type="number" />
          </div>

          <div className="form-group">
            <label>Department</label>
            <select>
              <option>Select Department</option>
              <option>CSE</option>
              <option>IT</option>
              <option>ECE</option>
              <option>EEE</option>
              <option>MECH</option>
              <option>CIVIL</option>
            </select>
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select>
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* ADDRESS */}
          <h2 className="section-title">Address</h2>

          <div className="form-group-full">
            <label>Residential Address</label>
            <textarea></textarea>
          </div>

          {/* BUTTONS */}
          <div className="button-row">
            <button type="button" className="btn cancel">Cancel</button>
            <button type="submit" className="btn submit">Add Staff</button>
          </div>

        </form>
      </div>
    </Layout>
  )
}

export default AddStaff
