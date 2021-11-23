package com.prova4.prova.Controller;


import com.prova4.prova.creator.ContatosCreator;
import com.prova4.prova.model.Contatos;
import com.prova4.prova.controller.ContatosController;
import com.prova4.prova.service.ContatosService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.BDDMockito;
import org.mockito.Mock;
import org.mockito.InjectMocks;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.ArrayList;
import java.util.List;


@ExtendWith(SpringExtension.class)
public class ContatosControllerTest {

    @InjectMocks
    private ContatosController cCont;

    @Mock
    private ContatosService cServ;

    @BeforeEach
    public void setup() {
        List<Contatos> listContatos = new ArrayList<>();

        listContatos.add(ContatosCreator.createValidContato());

        BDDMockito.when(cServ.listContatos())
                .thenReturn(listContatos);

        BDDMockito.when(cServ.findContatoById(ArgumentMatchers.anyLong()))
                .thenReturn(ContatosCreator.createValidContato());

        BDDMockito.when(cServ.registerContatos(ArgumentMatchers.any()))
                .thenReturn(ContatosCreator.createValidContato());
    }

    @Test
    @DisplayName("cadastra um contato com telefone e email ja existetes e deve retornar sucesso")
    void createInvalidContato_MustReturnSuccess() {
        Contatos contato = cCont.registerContatos(ContatosCreator.createValidContato()).getBody();

        Assertions.assertThat(contato.getNumber()).isNotNull().isEqualTo(ContatosCreator.createValidContato().getNumber());
        Assertions.assertThat(contato.getEmail()).isNotNull().isEqualTo(ContatosCreator.createValidContato().getEmail());
    }

    @Test
    @DisplayName("Listagem de contatos deve retornar sucesso")
    void listContatos_MustReturnSuccess() {
        String expectedName = ContatosCreator.createValidContato().getName();
        List<Contatos> contatoslist = cCont.listContatos();

        Assertions.assertThat(contatoslist).isNotNull();
        Assertions.assertThat(contatoslist.get(0).getName()).isEqualTo(expectedName);
    }

}
