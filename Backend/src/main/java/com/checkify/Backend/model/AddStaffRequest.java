package com.checkify.Backend.model;

import lombok.Data;

@Data
public class AddStaffRequest {

    private String staffName;
    private String email;
    private String mobileNumber;
    private Integer experience;
    private String specialization;
    private String gender;
    private String address;

    private String department;

    // FRONTEND SENDS THIS
    private StaffRole position;
}
