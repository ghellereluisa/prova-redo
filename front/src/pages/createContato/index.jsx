import React from "react";
import api from "../../api";
import { useForm } from "react-hook-form";
import "./index.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/button/index";

const validateInfo = yup.object().shape({
  name: yup.string().required("campo obrigatorio"),
  email: yup.string().required("campo obrigatorio"),
  number: yup.string().required("campo obrigatorio"),
});

function registerContatos() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateInfo),
  });

  const createContato = (data) =>
    api
      .post("contatos", data, {
        auth: {
          username: "lulu",
          password: "2204",
        },
      })
      .then(() => {
        alert("contato cadastrado");
      })
      .catch(() => {
        alert("informação existente, tentar novamente");
      });

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center mt-5">
      <h1 className="text-center mt-5">Agenda de contatos</h1>
      <div className="card-body container d-flex flex-column align-items-center justify-content-center mt-5 mb-5">
        <h3 className="text-center">Cadastrar</h3>

        <form
          className="cadastro-form col-10 mb-5"
          onSubmit={handleSubmit(createContato)}
        >
          <input
            className="col-6"
            type="text"
            placeholder="Name"
            name="name"
            {...register("name")}
          />
          <p className="error-message">{errors.name?.message}</p>
          <input
            className="col-6"
            type="text"
            placeholder="Email"
            name="email"
            {...register("email")}
          />
          <p className="error-message">{errors.email?.message}</p>
          <input
            className="col-6"
            type="text"
            placeholder="Number"
            name="number"
            {...register("number")}
          />
          <p className="error-message">{errors.number?.message}</p>
          <button className="p-1" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
      <Button />
    </div>
  );
}

export default registerContatos;
