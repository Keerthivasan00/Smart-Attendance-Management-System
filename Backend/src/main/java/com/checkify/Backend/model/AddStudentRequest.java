package com.checkify.Backend.model;

import lombok.Data;

import java.time.LocalDate;

@Data
public class AddStudentRequest {

    /* ================= STUDENT DETAILS ================= */
    private String name;
    private String gender;
    private LocalDate dob;
    private String year;
    private String mobileNo;

    /* ================= USER DETAILS ================= */
    private String email;
    // password NOT needed from frontend (default password used)
    // role NOT needed (forced as STUDENT in backend)

    /* ================= DEPARTMENT ================= */
    private String departmentName;

    /* ================= RELATION DETAILS ================= */
    private String relation;              // parent / guardian
    private String relationName;
    private String relationMobile;
    private String relationAddress;
}
