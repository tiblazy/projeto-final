import React, { useContext, useState } from "react";
import { UsersContext } from "../../../providers/usersContexts";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "../../../validators/yup";

import { Container, Form, Background, Cards, A } from "./style";
import { InputComponent } from "../../Input/style";
import { ButtonComponent } from "../../Button/style";
import VisibilityOffOutlined from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import EmailIcon from "@mui/icons-material/Email";
import { IconButton, InputAdornment } from "@mui/material";

import ROUTES from "../../../constants/routes";

export const Register = () => {
  const [reveal, setReveal] = useState(false);
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
    <Container>
      <Background></Background>

      <Form>
        <Cards>
          <h1> Cadastro </h1>
          <form onSubmit={handleSubmit(onRegisterFunction)}>
            <InputComponent
              label="Nome"
              placeholder="insira seu usuário"
              {...register("name")}
              error={errors.name && true}
              helperText={errors.name?.message && errors.name?.message}
              type={"text"}
            />

            <InputComponent
              label="Email"
              placeholder="insira seu email"
              {...register("email")}
              error={errors.email && true}
              helperText={errors.email?.message && errors.email?.message}
              type={"text"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton sx={{ cursor: "default" }}>
                      <EmailIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <InputComponent
              label="password"
              placeholder="insira seu password"
              {...register("password")}
              error={errors.password && true}
              helperText={errors.password?.message && errors.password?.message}
              type={reveal ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={() => setReveal(!reveal)}>
                      {reveal ? (
                        <VisibilityOffOutlined />
                      ) : (
                        <VisibilityOutlined />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <InputComponent
              label="confirme sua senha"
              placeholder="confirme sua senha"
              {...register("confirmPassword")}
              error={errors.confirmPassword && true}
              helperText={
                errors.confirmPassword?.message &&
                errors.confirmPassword?.message
              }
              type={reveal ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={() => setReveal(!reveal)}>
                      {reveal ? (
                        <VisibilityOffOutlined />
                      ) : (
                        <VisibilityOutlined />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <ButtonComponent height="60px">Cadastrar</ButtonComponent>
          </form>
          <A>
            Já possui cadastro? clique
            <span onClick={() => navigate(login)}> aqui </span> para fazer login
          </A>
        </Cards>
      </Form>
    </Container>
  );
};
