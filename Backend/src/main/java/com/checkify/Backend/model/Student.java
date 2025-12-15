//package com.checkify.Backend.model;
//
//import jakarta.persistence.*;
//import lombok.*;
//
//import java.util.Date;
//
//@Entity
//@Table(name = "students", uniqueConstraints = {
//        @UniqueConstraint(columnNames = "enrollment_no")
//})
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
//public class Student {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer id;
//
//    // Link to authentication user
//    @OneToOne
//    @JoinColumn(name = "user_id", nullable = false, unique = true)
//    private Users user;
//
//    @Column(name = "enrollment_no", length = 50, nullable = false, unique = true)
//    private String enrollmentNo;
//    private String gender;
//    private Date dob;
//
//
//    @ManyToOne
//    @JoinColumn(name = "department_id")
//    private Department department;
//
//    private String batch;
//}
