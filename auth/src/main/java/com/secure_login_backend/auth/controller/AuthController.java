package com.secure_login_backend.auth.controller;

import com.secure_login_backend.auth.dto.UserRequest;
import com.secure_login_backend.auth.dto.UserResponse;
import com.secure_login_backend.auth.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody UserRequest userRequest) {
        try {
            UserResponse response = authService.register(userRequest);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserRequest userRequest) {
        try {
            UserResponse response = authService.login(userRequest.getEmail() != null && !userRequest.getEmail().isEmpty()
                            ? userRequest.getEmail()
                            : userRequest.getUsername(),
                    userRequest.getPassword());
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
