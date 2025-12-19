package com.checkify.Backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "attendance")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Attendance {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
//
//    @ManyToOne(optional = false) @JoinColumn(name = "session_id")
//    private ClassSession session;

    @ManyToOne(optional = false) @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne @JoinColumn(name = "recorded_by")
    private Users recordedBy; // staff/admin user who scanned the staff QR to confirm, or null/system

    private LocalDateTime recordedAt;

    @Column(length = 30)
    private String method; // "STUDENT_QR", "OTP", "STAFF_QR"

    @Column(length = 30)
    private String status; // "present", "absent", "late", "excused"

    // For audit: what QR payload was scanned (could be user qrId or session token)
    @Column(length = 500)
    private String qrPayload;

    // If marked by OTP, store the OTP used (or its hash)
    @Column(length = 100)
    private String otpUsed;

    @PrePersist
    protected void onRecord() {
        this.recordedAt = LocalDateTime.now();
    }
}
