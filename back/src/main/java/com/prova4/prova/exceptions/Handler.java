package com.prova4.prova.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;

import javax.servlet.http.HttpServletRequest;
import java.time.Instant;

@ControllerAdvice
public class Handler {

    @org.springframework.web.bind.annotation.ExceptionHandler(AlreadyExists.class)
    public ResponseEntity<BadRequestException> telOrEmailAlreadyExists(AlreadyExists e, HttpServletRequest request) {
        BadRequestException err = new BadRequestException();
        err.setTimestamp(Instant.now());
        err.setStatus(HttpStatus.CONFLICT.value());
        err.setError("Email ou Telefone cadastrados anteriormente");
        err.setMessage(e.getMessage());
        err.setPath(request.getRequestURI());
        return ResponseEntity.status(HttpStatus.CONFLICT).body(err);
    }

}