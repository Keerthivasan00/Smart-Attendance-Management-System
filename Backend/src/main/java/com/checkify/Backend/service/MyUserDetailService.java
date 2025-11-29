package com.checkify.Backend.service;

import com.checkify.Backend.model.UserPrincipal;
import com.checkify.Backend.model.Users;
import com.checkify.Backend.repository.MyUserDetailRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailService implements UserDetailsService {

    @Autowired
    MyUserDetailRepo repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user=repo.getByEmail(username);
        if(user == null){
            throw new UsernameNotFoundException("Username Not Found");
        }
        return new UserPrincipal(user);
    }
}
