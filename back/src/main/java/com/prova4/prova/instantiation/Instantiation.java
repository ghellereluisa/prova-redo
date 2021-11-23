package com.prova4.prova.instantiation;

import com.prova4.prova.model.Contatos;
import com.prova4.prova.repository.ContatosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class Instantiation implements CommandLineRunner {

    @Autowired
    private ContatosRepository cRep;

    @Override
    public void run(String... args) throws Exception{

        Contatos c1 = new Contatos(null, "Luisa", "emailtest1@test.com", "12345-6789");
        Contatos c2 = new Contatos(null, "Raul", "emailtest2@test.com", "23456-7891");
        Contatos c3 = new Contatos(null, "Fernando", "emailtest3@test.com", "34567-8912");
        Contatos c4 = new Contatos(null, "Lucas", "emailtest4@test.com", "45678-9123");

        cRep.saveAll(Arrays.asList(c1, c2, c3, c4));
    }
}
