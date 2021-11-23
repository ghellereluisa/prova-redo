import React from 'react';
import api from '../../api';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './index.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../components/button/index';

const validateInfo = yup.object().shape({
  name: yup.string().required("campo obrigatorio"),
  email: yup.string().required("campo obrigatorio"),
  number: yup.string().required("campo obrigatorio"),
})


function registerContato() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
      resolver: yupResolver(validateInfo)
  })

  const [contato, setContato] = useState([]);
    const [contatoId, setContatoId] = useState();

    const alterContato = data => api.put(`contatos/${contatoId}`, data, {
        auth: {
            username: 'lulu',
            password: '2204'
        }
      }).then(() => {
        alert("Contato alterado")
    }).catch(() => {
        alert("informação existente, tentar novamente")
    })

    async function searchContato() {
      const response2 = await api.get(`contatos/${contatoId}`, {
          auth: {
              username: 'lulu',
              password: '2204'
          }
      })

      console.log(response2);
        setContato(response2.data);
    }


    return(
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center mt-5">
          <h1 className="text-center mt-5">Agenda de contatos</h1>
          <div className="card-body container d-flex flex-column align-items-center justify-content-center mt-5 mb-5">
              <h3 className="text-center">Editar Contato</h3>

              <input className="col-6 mt-3" type="text" placeholder="Id do contato" onChange={event => setContatoId(event.target.value)}/>
              <button className="p-1" onClick={searchContato}>Buscar</button>

              <table className="tabela col-10">
                      <p>Deseja apagar esse contato?</p>
                      <thead>
                          <tr className="linha-tabela">
                              <th className="item-tabela">Name</th>
                              <th className="item-tabela">Email</th>
                              <th className="item-tabela">Number</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="linha-tabela">
                              <td className="item-tabela">{contato.name}</td>
                              <td className="item-tabela">{contato.email}</td>
                              <td className="item-tabela">{contato.number}</td>
                          </tr>
                      </tbody>
                  </table>

              <form className="formulario-cadastro col-10 mb-5" onSubmit={handleSubmit(alterContato)}>
                  <input className="col-6" type="text" placeholder="Nome" name="nome" {...register("nome")}/>
                  <p className="error-message">{errors.name?.message}</p>
                  <input className="col-6" type="text" placeholder="Email" name="email" {...register("email")}/>
                  <p className="error-message">{errors.email?.message}</p>
                  <input className="col-6" type="text" placeholder="Telefone" name="telefone" {...register("telefone")}/>
                  <p className="error-message">{errors.number?.message}</p>
                  <button className="p-1" type="submit">Cadastrar</button>
              </form>
          </div>
          <Button />
      </div>
  )
}

export default registerContato;