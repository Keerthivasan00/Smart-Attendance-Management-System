package com.checkify.Backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "users", uniqueConstraints = {@UniqueConstraint(columnNames = "email")})
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class Users {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 150, nullable = false)
    private String name;

    @Column(length = 255, nullable = false, unique = true)
    private String email;

    @Column(length = 255, nullable = false)
    private String password;

    @Column(length = 50, nullable = false)
    private String role; // STUDENT, STAFF, HOD, MANAGEMENT, ADMIN

    // New: QR identifier used to generate a QR code to present
    @Column(name = "qr_id", length = 150, unique = true)
    private String qrId;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    // ... @PrePersist / @PreUpdate as before
}