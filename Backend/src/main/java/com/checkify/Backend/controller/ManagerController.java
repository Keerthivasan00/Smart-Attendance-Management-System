package com.checkify.Backend.controller;

import com.checkify.Backend.model.AddStaffRequest;
import com.checkify.Backend.model.AddStudentRequest;
import com.checkify.Backend.model.Department;
import com.checkify.Backend.model.DepartmentResponse;
import com.checkify.Backend.service.DepartmentService;
import com.checkify.Backend.service.StaffService;
import com.checkify.Backend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/manager")
public class ManagerController {

    @Autowired
    private StudentService studentService;

    @Autowired
    private StaffService staffService;

    @Autowired
    DepartmentService departmentService;

    @GetMapping("/departments")
    public ResponseEntity<List<DepartmentResponse>> getAllDepartment() {
        return ResponseEntity.ok(departmentService.getAllDepartments());
    }


    @PostMapping("/add-student")
    public ResponseEntity<?> addStudent(@RequestBody AddStudentRequest request) {
        studentService.addStudent(request);
        return new ResponseEntity<>("Student added successfully",HttpStatus.OK);
    }

    @PostMapping("/add-staff")
    public ResponseEntity<?>addStaff(@RequestBody AddStaffRequest request){
        staffService.addStaff(request);
        return new ResponseEntity<>("Staff Added Successfully",HttpStatus.OK);
    }
}
