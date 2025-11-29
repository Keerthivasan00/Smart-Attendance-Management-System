package com.checkify.Backend.model;

import com.checkify.Backend.model.Users;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "hod")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Hod {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    // Link to users table
    @OneToOne
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private Users user;

    // Each HOD is assigned to exactly one department
    @OneToOne
    @JoinColumn(name = "department_id", nullable = false, unique = true)
    private Department department;

    @Column(length = 100)
    private String qualification;

    @Column(length = 20)
    private String experience; // e.g., "12 years"

    @Column(length = 20)
    private String phoneNumber;
}
