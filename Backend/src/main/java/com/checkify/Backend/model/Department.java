package com.checkify.Backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "departments", uniqueConstraints = {
        @UniqueConstraint(columnNames = "code")
})
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 20, unique = true)
    private String code;

    @Column(length = 150, nullable = false)
    private String name;

    // HOD is a user (nullable if not assigned)
    @ManyToOne
    @JoinColumn(name = "hod_id")
    private Users hod;
}