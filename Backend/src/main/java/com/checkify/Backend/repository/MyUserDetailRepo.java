package com.checkify.Backend.repository;

import com.checkify.Backend.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MyUserDetailRepo extends JpaRepository<Users,Integer> {
    Users getByEmail(String email);
}
