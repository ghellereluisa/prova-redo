import './app.css';
import api from './api';
import Button from './components/button/index';
import { useEffect, useState } from 'react';

function App(){

  const[contatos, setContatos] = useState([]);

  useEffect(() => {

    async function searchContatos() {
      const response = await api.get('contatos', {
        auth: {
          username: 'lulu',
          password: '2204'
        }
      });
      console.log(response)
      setContatos(response.data)
    }
    searchContatos();
  }, [])


  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center body">
      <h1 className="text-center mt-5">Agenda de contatos</h1>
      <div className="contatos-lista mt-5 d-flex flex-column align-items-center justify-content-center">
        <h3 className="m-2">Meus contatos</h3>
        <table className="tabela">
          <thead>
            <tr className="linha-tabela">
              <th className="item-tabela">Nome</th>
              <th className="item-tabela">Email</th>
              <th className="item-tabela">Telefone</th>
            </tr>
          </thead>
          <tbody>
            {contatos.map(contato =>
              <tr key={contato.id} className="linha-tabela">
                <td className="item-tabela">{contato.name}</td>
                <td className="item-tabela">{contato.email}</td>
                <td className="item-tabela">{contato.number}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="content container-fluid mt-5 d-flex align-items-center justify-content-evenly">
        <Button />
      </div>
    </div>
  );
}

export default App;