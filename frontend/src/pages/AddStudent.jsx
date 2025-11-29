import React, { useState } from "react";
import Layout from "../components/Layout";
import "../CSS/AddStudent.css"; 

function AddStudent() {
  const [relationType, setRelationType] = useState("");

  return (
    <Layout>
      <div className="addstudent-container">
        <h1 className="page-title">Add Student</h1>

        <form className="form-grid">

          {/* STUDENT DETAILS */}
          <h2 className="section-title">Student Details</h2>

          <div className="form-group">
            <label>Student Name</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Register Number</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" />
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
            <label>Year</label>
            <select>
              <option>Select Year</option>
              <option>I</option>
              <option>II</option>
              <option>III</option>
              <option>IV</option>
            </select>
          </div>

          {/* RELATION CHOICE */}
          <h2 className="section-title">Contact Relation</h2>

          <div className="form-group-full">
            <label>Select Relation</label>
            <select
              value={relationType}
              onChange={(e) => setRelationType(e.target.value)}
            >
              <option value="">-- Choose --</option>
              <option value="parent">Parent</option>
              <option value="guardian">Guardian</option>
            </select>
          </div>

          {/* PARENT DETAILS */}
          {relationType === "parent" && (
            <>
              <h2 className="section-title">Parent Details</h2>

              <div className="form-group">
                <label>Father Name</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Mother Name</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Parent Mobile Number</label>
                <input type="number" />
              </div>

              <div className="form-group-full">
                <label>Address</label>
                <textarea></textarea>
              </div>
            </>
          )}

          {/* GUARDIAN DETAILS */}
          {relationType === "guardian" && (
            <>
              <h2 className="section-title">Guardian Details</h2>

              <div className="form-group">
                <label>Guardian Name</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Relation with Student</label>
                <input type="text" placeholder="Uncle / Aunt / Brother / Sister" />
              </div>

              <div className="form-group">
                <label>Guardian Mobile Number</label>
                <input type="number" />
              </div>

              <div className="form-group-full">
                <label>Address</label>
                <textarea></textarea>
              </div>
            </>
          )}

          {/* BUTTONS */}
          <div className="button-row">
            <button type="button" className="btn cancel">Cancel</button>
            <button type="submit" className="btn submit">Add Student</button>
          </div>

        </form>
      </div>
    </Layout>
  );
}

export default AddStudent;
