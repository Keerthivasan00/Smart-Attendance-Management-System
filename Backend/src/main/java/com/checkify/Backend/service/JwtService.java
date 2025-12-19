package com.checkify.Backend.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {

    private String SECRETE;

    private JwtService(){
        SECRETE=genrateSecreteKey();
    }

    public String genrateSecreteKey(){
        try{
        KeyGenerator keyGen=KeyGenerator.getInstance("HmacSHA256");
        SecretKey secretKey=keyGen.generateKey();
        System.out.println("secrete key: "+secretKey.toString());
        return Base64.getEncoder().encodeToString(secretKey.getEncoded());
        }catch (NoSuchAlgorithmException e){
            throw new RuntimeException("Error generating Key",e);
        }
    }

    public String generateToken(String username) {
            Map<String,Object> claims = new HashMap<>();
            return Jwts.builder()
                    .claims(claims)
                    .subject(username)
                    .issuedAt(new Date(System.currentTimeMillis()))
                    .expiration(new Date(System.currentTimeMillis()+1000*60*60))
                    .signWith(getKey(), Jwts.SIG.HS256)
                    .compact();
    }

    private SecretKey getKey() {
        byte [] keyBytes = Decoders.BASE64.decode(SECRETE);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String extractUserName(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    private <T> T extractClaim(String token, Function<Claims, T> claimResolver) {
        final Claims claims = extractAllClaims(token);
        return claimResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser()
                .setSigningKey(getKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        final String userName = extractUserName(token);
        System.out.println("validate");
        return (userName.equals(userDetails.getUsername()) &&
                !isTokenExpired(token));
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }
    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }
}
