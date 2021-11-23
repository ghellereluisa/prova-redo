import "./index.css";
import api from "../../api";
import { useState, useEffect } from "react";
import Button from "../../components/button";

function findContatoById() {
  const [contato, setContato] = useState([]);
  const [contatoName, setContatoName] = useState();

  useEffect(() => {
    async function searchContatos() {
      const response = await api.get("contatos", {
        auth: {
          username: "lulu",
          password: "2204",
        },
      });

      console.log(response);
      setContato(response.data);
    }
    searchContatos();
  }, []);

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center mt-5">
      <h1 className="text-center mt-5">Agenda de contatos</h1>
      <div className="card-body container d-flex align-items-center justify-content-center mb-5">
        <form className="col-6 d-flex flex-column align-items-center justify-content-center p-3">
          <h3 className="text-center">Procurar um contato</h3>
          <input
            className="col-6 mt-3"
            id="input-id"
            type="text"
            placeholder="Id do contato"
            onChange={(event) => setContatoNome(event.target.value)}
          ></input>
        </form>
        {contato.map((cont) =>
          cont.name === contatoName ? (
            <ul key={cont.id} className="col-6">
              <li>{cont.name}</li>
              <li>{cont.email}</li>
              <li>{cont.number}</li>
            </ul>
          ) : (
            <p>Contato inexiste</p>
          )
        )}
      </div>
      <Button />
    </div>
  );
}

export default findContatoById;
