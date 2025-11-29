package com.checkify.Backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Table(name = "sessions")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class ClassSession {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne @JoinColumn(name = "department_id")
    private Department department;

    private String courseCode;
    private String courseName;

    private LocalDate sessionDate;
    private LocalTime startTime;
    private LocalTime endTime;
    private String location;

    @ManyToOne @JoinColumn(name = "created_by")
    private Users createdBy;

    // New: ephemeral token/QR for students to scan (can be a signed JWT or random UUID)
    @Column(name = "session_qr_token", length = 500)
    private String sessionQrToken;

    // New: short numeric OTP for students to enter (6-digit for example)
    @Column(name = "session_otp", length = 10)
    private String sessionOtp;

    private LocalDateTime createdAt;
}
