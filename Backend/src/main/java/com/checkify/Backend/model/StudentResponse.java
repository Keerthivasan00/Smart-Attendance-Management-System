package com.checkify.Backend.model;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class StudentResponse {

    private Integer id;
    private String name;
    private String email;
    private String gender;
    private LocalDate dob;
    private String year;
    private String mobileNo;

    // 🔹 Relation details
    private String relation;
    private String relationName;
    private String relationMobileNo;
    private String relationAddress;

    // 🔹 Department
    private String departmentName;
}
