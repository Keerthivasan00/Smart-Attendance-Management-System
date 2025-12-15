//package com.checkify.Backend.model;
//
//import jakarta.persistence.*;
//import lombok.*;
//
//@Entity
//@Table(name = "management_staff")
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
//public class ManagementStaff {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer id;
//
//    @OneToOne
//    @JoinColumn(name = "user_id", nullable = false, unique = true)
//    private Users user;
//
//    @Column(name = "staff_no", length = 50)
//    private String staffNo;
//
//    @Column(length = 100)
//    private String department; // management department/office
//
//    @Column(length = 100)
//    private String roleTitle;
//}
