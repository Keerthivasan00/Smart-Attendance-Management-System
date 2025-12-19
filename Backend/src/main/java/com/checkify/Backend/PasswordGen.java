package com.checkify.Backend;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordGen {
    public static void main(String[] args) {
        BCryptPasswordEncoder passwordEncoder=new BCryptPasswordEncoder(12);
        String ps="staff123";
        String BCryptPassword=passwordEncoder.encode(ps);
        System.out.println(BCryptPassword+":");
    }
}
