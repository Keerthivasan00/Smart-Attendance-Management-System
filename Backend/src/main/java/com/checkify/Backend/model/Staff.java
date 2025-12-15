//package com.checkify.Backend.model;
//
//import jakarta.persistence.*;
//import lombok.*;
//
//@Entity
//@Table(name = "staff", uniqueConstraints = {
//        @UniqueConstraint(columnNames = "staff_no")
//})
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
//public class Staff {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer id;
//
//    @OneToOne
//    @JoinColumn(name = "user_id", nullable = false, unique = true)
//    private Users user;
//
//    @Column(name = "staff_no", length = 50, unique = true)
//    private String staffNo;
//
//    @ManyToOne
//    @JoinColumn(name = "department_id")
//    private Department department;
//
//    @Column(length = 100)
//    private String designation;
//}
