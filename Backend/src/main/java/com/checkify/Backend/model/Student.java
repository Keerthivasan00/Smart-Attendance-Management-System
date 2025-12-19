package com.checkify.Backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "students", uniqueConstraints = {
        @UniqueConstraint(columnNames = "enrollment_no")
})
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private Users user;
    private String name;
    private String gender;
    private LocalDate dob;
    private String year;
    private String mobile_no;
    private String relation;
    private String relation_name;
    private String relation_mobile_no;
    private String relation_address;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id")
    private Department department;

}
