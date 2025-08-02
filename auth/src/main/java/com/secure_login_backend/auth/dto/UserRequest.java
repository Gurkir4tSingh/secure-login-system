package com.secure_login_backend.auth.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRequest {
    private String email;
    private String username;
    private String password;
}
