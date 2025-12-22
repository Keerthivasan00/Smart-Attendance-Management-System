package com.checkify.Backend.service;

import com.checkify.Backend.model.*;
import com.checkify.Backend.repository.DepartmentRepository;
import com.checkify.Backend.repository.StudentRepository;
import com.checkify.Backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private DepartmentRepository departmentRepository;
//
//    @Autowired
//    private PasswordEncoder passwordEncoder;
    BCryptPasswordEncoder passwordEncoder=new BCryptPasswordEncoder(12);

    private static final String DEFAULT_STUDENT_PASSWORD = "student@123";

    @Transactional
    public void addStudent(AddStudentRequest request) {

        // 1️⃣ Create USER with DEFAULT password
        Users user = Users.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(DEFAULT_STUDENT_PASSWORD))
                .role("STUDENT") // force role
                .build();

        Users savedUser = userRepository.save(user);

        // 2️⃣ Find Department
        Department department = departmentRepository
                .findByName(request.getDepartmentName())
                .orElseThrow(() -> new RuntimeException("Department not found"));

        // 3️⃣ Save STUDENT
        Student student = Student.builder()
                .name(request.getName())
                .gender(request.getGender())
                .year(request.getYear())
                .dob(request.getDob())
                .mobile_no(request.getMobileNo())
                .relation(request.getRelation())
                .relation_name(request.getRelationName())
                .relation_mobile_no(request.getRelationMobile())
                .relation_address(request.getRelationAddress())
                .user(savedUser)
                .department(department)
                .build();

        studentRepository.save(student);
    }

    public List<StudentResponse> getAllStudent() {
        return studentRepository.findAll().stream()
                .map(student -> StudentResponse.builder()
                        .id(student.getId())
                        .name(student.getName())
                        .email(student.getUser().getEmail())
                        .gender(student.getGender())
                        .dob(student.getDob())
                        .year(student.getYear())
                        .mobileNo(student.getMobile_no())

                        // 🔹 Relation mapping
                        .relation(student.getRelation())
                        .relationName(student.getRelation_name())
                        .relationMobileNo(student.getRelation_mobile_no())
                        .relationAddress(student.getRelation_address())

                        // 🔹 Department
                        .departmentName(student.getDepartment().getName())
                        .build()
                )
                .toList();
    }

}
