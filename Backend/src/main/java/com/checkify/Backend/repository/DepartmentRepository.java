package com.checkify.Backend.repository;

import com.checkify.Backend.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DepartmentRepository extends JpaRepository<Department,Integer> {

    Optional<Department> findByName(String name);

}
