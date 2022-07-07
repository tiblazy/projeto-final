import React, { useContext, useState } from "react";
import { UsersContext } from "../../../providers/usersContexts";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "../../../validators/yup";

import { Background, Container } from "./style";
import { InputComponent } from "../../Input/style";
import { ButtonComponent } from "../../Button/style";

import ROUTES from "../../../constants/routes";

export const Register = () => {
  const { userCreate } = useContext(UsersContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { login } = ROUTES;

  const schema = schemaRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onRegisterFunction = (data) => {
    const userhash = `${data.name}#${data.name
      .slice(0, 1)
      .toUpperCase()}-${data.password.slice(0, 2)}`;

    const user = {
      avatar: null,
      username: data.name,
      email: data.email,
      password: data.password,

      userhash: userhash,
      myTables: [],
    };

    userCreate(user, setLoading);
  };

  return (
    <>
      <Background>
        <Container>
          <h1> Cadastro </h1>
          <form onSubmit={handleSubmit(onRegisterFunction)}>
            <InputComponent
              label="Nome"
              placeholder="insira seu usuário"
              {...register("name")}
            />
            <p>{errors.name?.message}</p>
            <InputComponent
              label="Email"
              placeholder="insira seu email"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
            <InputComponent
              label="password"
              placeholder="insira seu password"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
            <InputComponent
              label="confirme sua senha"
              placeholder="confirme sua senha"
              {...register("confirmPassword")}
            />
            <p>{errors.confirmPassword?.message}</p>
            <ButtonComponent>Cadastrar</ButtonComponent>
            Já possui cadastro? clique
            <a onClick={() => navigate(login)}>aqui</a> para fazer login
          </form>
        </Container>
      </Background>
    </>
  );
};
