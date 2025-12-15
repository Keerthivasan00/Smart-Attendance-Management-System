//package com.checkify.Backend.model;
//
//import jakarta.persistence.*;
//import lombok.*;
//import java.time.LocalDate;
//import java.time.LocalDateTime;
//
//@Entity
//@Table(name = "leaves")
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
//public class LeaveRequest {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer id;
//
//    @ManyToOne(optional = false)
//    @JoinColumn(name = "user_id")
//    private Users user;
//
//    private LocalDate startDate;
//    private LocalDate endDate;
//
//    @Column(columnDefinition = "TEXT")
//    private String reason;
//
//    @Column(length = 30)
//    private String status; // pending, approved, rejected
//
//    private LocalDateTime appliedAt;
//
//    @ManyToOne
//    @JoinColumn(name = "approved_by")
//    private Users approvedBy;
//
//    @PrePersist
//    protected void onApply() {
//        this.appliedAt = LocalDateTime.now();
//        if (this.status == null) this.status = "pending";
//    }
//}
