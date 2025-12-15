//package com.checkify.Backend.model;
//
//import jakarta.persistence.*;
//import lombok.*;
//import java.time.LocalDateTime;
//
//@Entity
//@Table(name = "devices", uniqueConstraints = {
//        @UniqueConstraint(columnNames = "device_id")
//})
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
//public class Device {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer id;
//
//    @Column(name = "device_id", length = 150, nullable = false, unique = true)
//    private String deviceId;
//
//    @Column(length = 50)
//    private String type; // scanner, biometric
//
//    @Column(length = 255)
//    private String location;
//
//    @Column(length = 50)
//    private String ipAddress;
//
//    private LocalDateTime registeredAt;
//
//    @PrePersist
//    protected void onRegister() {
//        this.registeredAt = LocalDateTime.now();
//    }
//}
