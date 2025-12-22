package com.checkify.Backend.service;

import com.checkify.Backend.model.*;
import com.checkify.Backend.repository.DepartmentRepository;
import com.checkify.Backend.repository.StaffRepository;
import com.checkify.Backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class StaffService {

    @Autowired
    StaffRepository repo;

    @Autowired
    UserRepository userRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    BCryptPasswordEncoder passwordEncoder=new BCryptPasswordEncoder(12);

    private static final String DEFAULT_STAFF_PASSWORD = "staff@123";

    @Transactional
    public void addStaff(AddStaffRequest request) {

        StaffRole position = request.getPosition();

        if (position == null) {
            throw new RuntimeException("Position is required");
        }

        Users user = Users.builder()
                .name(request.getStaffName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(DEFAULT_STAFF_PASSWORD))
                .role(position.name()) // STAFF or HOD
                .build();

        Users savedUser = userRepository.save(user);

        Department department = departmentRepository
                .findByName(request.getDepartment())
                .orElseThrow(() -> new RuntimeException("Department not found"));

        Staff staff = Staff.builder()
                .staffName(request.getStaffName())
                .gender(request.getGender())
                .experience(request.getExperience())
                .address(request.getAddress())
                .department(department)
                .user(savedUser)
                .mobileNumber(request.getMobileNumber())
                .specialization(request.getSpecialization())
                .build();

        repo.save(staff);
    }

}
