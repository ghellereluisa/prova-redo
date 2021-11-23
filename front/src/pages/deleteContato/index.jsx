import api from "../../api";
import { useState, useEffect } from "react";
import Button from "../../components/button";

function Delete() {
  const [contato, setContato] = useState([]);
  const [contatoId, setContatoId] = useState();

  async function DeleteContato() {
    const response = await api.delete(`contatos/${contatoId}`, {
      auth: {
        username: "lulu",
        password: "2204",
      },
    });
    alert("Contato deletado");
  }

  async function searchContato() {
    const response2 = await api.get(`contatos/${contatoId}`, {
      auth: {
        username: "lulu",
        password: "2204",
      },
    });
    console.log(response2);
    setContato(response2.data);
  }

  return (
    <div className="container fluid d-flex flex-column align-items-center justify-content-center mt-5">
      <h1 className="text-center mt-5">Agenda de contatos</h1>
      <div className="card-body container d-flex flex-column align-items-center justify-content-center mb-5">
        <h3>Deletar contato</h3>
        <input
          className="col-6 mt-3"
          type="text"
          placeholder="Id do contato"
          onChange={(event) => setContatoId(event.target.value)}
        />
        <button className="p-1" onClick={searchContato}>
          Buscar
        </button>
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
        <button className="p-1" onClick={DeleteContato}>
          Deletar
        </button>
      </div>
      <Button />
    </div>
  );
}
