package com.liftingarrangement.lifting_arrangement.services.impl;

import com.liftingarrangement.lifting_arrangement.controllers.LoginRequest;
import com.liftingarrangement.lifting_arrangement.controllers.RegisterRequest;
import com.liftingarrangement.lifting_arrangement.controllers.TokenResponse;
import com.liftingarrangement.lifting_arrangement.models.Role;
import com.liftingarrangement.lifting_arrangement.models.Token;
import com.liftingarrangement.lifting_arrangement.models.UserLA;
import com.liftingarrangement.lifting_arrangement.repositories.TokenRepository;
import com.liftingarrangement.lifting_arrangement.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;


    public TokenResponse register(RegisterRequest request){
        var user = UserLA.builder()
                .name(request.name())
                .email(request.email())
                .password(passwordEncoder.encode(request.password()))
                .role(Role.ROLE_USER)   // 🔴 CLAVE
                .build();
        var savedUser = userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        saveUserToken(savedUser, jwtToken);
        return new TokenResponse(jwtToken, refreshToken);
    }

    public TokenResponse login(LoginRequest request) {

        // 1️⃣ Autenticar credenciales
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.email(),
                        request.password()
                )
        );

        // 2️⃣ Buscar usuario
        var user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new RuntimeException("User not found"));

        // 3️⃣ Generar tokens
        var accessToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);

        // 4️⃣ Revocar tokens anteriores
        //revokeAllUserTokens(user);

        // 5️⃣ Guardar token nuevo
        saveUserToken(user, accessToken);

        // 6️⃣ Responder
        return new TokenResponse(accessToken, refreshToken);
    }

    private void saveUserToken(UserLA user, String jwtToken){
        var token = Token.builder()
                .user(user)
                .token(jwtToken)
                .tokenType(Token.TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }


    public TokenResponse refreshToken(final String authHeader){
        return null;
    }
}

