package com.checkify.Backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "staffs")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Staff {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private Users user;

    @Column(name = "staff_name", length = 50, unique = true)
    private String staffName;

    @Column(name="mobile_number")
    private String mobileNumber;

    private int experience;
    private String specialization;
    private String gender;
    private String address;
//    private String position;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id")
    private Department department;
}
