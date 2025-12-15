package com.checkify.Backend.controller;

import com.checkify.Backend.repository.MyUserDetailRepo;
import com.checkify.Backend.service.JwtService;
import com.checkify.Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    UserService service;

    @Autowired
    JwtService jwtService;

    @Autowired
    AuthenticationManager authenticationManager;

    @GetMapping("/user")
    public ResponseEntity<?>getUser(){
        return new ResponseEntity<>(service.getUser(), HttpStatus.OK);
    }

}
