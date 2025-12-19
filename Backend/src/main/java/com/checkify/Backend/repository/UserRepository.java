package com.checkify.Backend.repository;

import com.checkify.Backend.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Users,Integer> {
}
