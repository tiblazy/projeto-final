import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../../../providers/usersContexts";

import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../../validators/yup";

import { getUserToken } from "../../../constants/localStorages";
import ROUTES from "../../../constants/routes";

import { Container } from "./style";
import { InputComponent } from "../../Input/style";
import { ButtonComponent } from "../../Button/style";

export const Login = () => {
  const { login } = useContext(UsersContext);
  const navigate = useNavigate();

  const token = getUserToken || "";

  useEffect(() => {}, [token]);

  const schema = schemaLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onLoginFunction = (data) => {
    login(data);
  };

  return (
    <>
      <Container>
        <h1> Login </h1>
        <form onSubmit={handleSubmit(onLoginFunction)}>
          <InputComponent
            label="Email"
            placeholder="insira seu email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <InputComponent
            label="Password"
            placeholder="insira seu password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <ButtonComponent onClick={() => handleSubmit(onLoginFunction)}>
            Entrar
          </ButtonComponent>
          Ainda não possui cadastro ? Clique
          <a onClick={() => navigate(ROUTES.register)}>aqui</a>
        </form>
      </Container>
    </>
  );
};
