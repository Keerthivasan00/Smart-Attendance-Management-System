package com.checkify.Backend.service;

import com.checkify.Backend.model.Users;
import com.checkify.Backend.repository.MyUserDetailRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    MyUserDetailRepo repo;
    BCryptPasswordEncoder passwordEncoder =new BCryptPasswordEncoder(12);

    public void AddUser(Users user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(user.getRole().toUpperCase());
        repo.save(user);
    }
}
