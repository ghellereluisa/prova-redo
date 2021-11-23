package com.prova4.prova.service;


import com.prova4.prova.model.Contatos;
import com.prova4.prova.repository.ContatosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContatosService {

    @Autowired
    private ContatosRepository cRep;

    public List<Contatos> listContatos () {
        return cRep.findAll();
    }

    public Contatos findContatoById(Long id){
        Optional<Contatos> obj = cRep.findById(id);
        return obj.get();
    }

    public Contatos registerContatos (Contatos contatos){
        Optional<Contatos> contato1 = cRep.findByEmail(contatos.getEmail());
        Optional<Contatos> contato2 = cRep.findByNumber(contatos.getNumber());
    }

    public void deleteContatos (Long id){
        cRep.deleteById(id);
    }

    public Contatos alterContatos (Long id, Contatos contatos){
        Contatos entity = cRep.findById(id).get();
        updateData(entity, contatos);
        return cRep.save(entity);
    }

    public void updateData(Contatos entity, Contatos contatos) {
        entity.setName(contatos.getName());
        entity.setNumber(contatos.getNumber());
        entity.setEmail(contatos.getEmail());
    }


}
