package com.checkify.Backend.service;

import com.checkify.Backend.model.Department;
import com.checkify.Backend.model.DepartmentResponse;
import com.checkify.Backend.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {

    @Autowired
    DepartmentRepository repo;

    public List<DepartmentResponse> getAllDepartments() {
        return repo.findAll()
                .stream()
                .map(d -> new DepartmentResponse(d.getId(), d.getName()))
                .toList();
    }

}
