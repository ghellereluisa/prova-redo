package com.prova4.prova.repository;

import com.prova4.prova.model.Contatos;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ContatosRepository extends JpaRepository<Contatos, Long> {

    Optional<Contatos> findByEmail(String email);
    Optional<Contatos> findByNumber(String Telefone);
    Optional<Contatos> findById(Long id);
}
