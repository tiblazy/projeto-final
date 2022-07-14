import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../../../providers/usersContexts";

import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../../validators/yup";

import { getUserToken } from "../../../constants/localStorages";
import ROUTES from "../../../constants/routes";

import { Container, Form, Background, Cards, A } from "./style";
import { InputComponent } from "../../Input/style";
import { ButtonComponent } from "../../Button/style";
import VisibilityOffOutlined from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import EmailIcon from "@mui/icons-material/Email";
import { IconButton, InputAdornment } from "@mui/material";

export const Login = () => {
  const { login } = useContext(UsersContext);
  const navigate = useNavigate();
  const [reveal, setReveal] = useState(false);

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
        <Form>
          <Cards>
            <h1> Login </h1>
            <form onSubmit={handleSubmit(onLoginFunction)}>
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
                label="Password"
                placeholder="insira sua senha"
                {...register("password")}
                error={errors.password && true}
                helperText={
                  errors.password?.message && errors.password?.message
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

              <ButtonComponent
                height="60px"
                onClick={() => handleSubmit(onLoginFunction)}
              >
                Entrar
              </ButtonComponent>
            </form>
            <A>
              Ainda não possui cadastro ? Clique
              <span onClick={() => navigate(ROUTES.register)}> aqui</span>
            </A>
          </Cards>
        </Form>
        <Background></Background>
      </Container>
    </>
  );
};
