package com.prova4.prova.creator;

import com.prova4.prova.model.Contatos;

public class ContatosCreator {

    public static Contatos createContatoToBeSaved() {
        Contatos contatos = new Contatos(null, "Contato1", "contato1@email.com", "12345-6789");
        return contatos;
    }

    public static Contatos createValidContato() {
        Contatos contatos = new Contatos(1L, "Contato1", "contato1@email.com", "12345-6789");
        return contatos;
    }
}
