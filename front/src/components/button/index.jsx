import React from 'react';
import { Link } from 'react-router-dom';

function Buttons() {
    return(
        <div className="container d-flex align-items-center justify-content-evenly">
            <Link className="col-2" to="/procurar-contato">
                <button className="p-1">Procurar</button>
            </Link>

            <Link className="col-2" to="/cria-contato">
                <button className="p-1">Criar</button>
            </Link>

            <Link className="col-2" to="/editar-contato">
                <button className="p-1">Editar</button>
            </Link>

            <Link className="col-2" to="/deletar-contato">
                <button className="p-1">Deletar</button>
            </Link>
            <Link className="col-2" to="/">
                <button className="p-1">Lista de contatos</button>
            </Link>
        </div>
    )
}

export default Buttons;