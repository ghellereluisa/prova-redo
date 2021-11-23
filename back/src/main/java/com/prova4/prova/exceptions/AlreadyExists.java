package com.prova4.prova.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class AlreadyExists extends RuntimeException{

    public  AlreadyExists(String msg){
        super(msg);
    }
}
