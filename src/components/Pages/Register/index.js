import React, { useContext, useState } from "react";
import { UsersContext } from "../../../providers/usersContexts";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "../../../validators/yup";

import { Container,Form,Background,Cards,A } from "./style";
import { InputComponent } from "../../Input/style";
import { ButtonComponent } from "../../Button/style";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import ROUTES from "../../../constants/routes";

export const Register = () => {

  const [isHidden, setIsHidden] = useState(false);
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
        <Container>
            <Background>
            </Background>

            <Form>
           
          <Cards>
          <h1> Cadastro </h1>
          <form onSubmit={handleSubmit(onRegisterFunction)}>
            
            <InputComponent
              width = '270px'
              label="Nome"
              placeholder="insira seu usuário"
              {...register("name")}
            />
            <p>{errors.name?.message}</p>
            
           
            <InputComponent
            width = '270px'
              label="Email"
              placeholder="insira seu email"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
           
           
            <InputComponent
            width = '270px'
              label="password"
              placeholder="insira seu password"
              type={isHidden ? "text" : "password"}
              {...register("password")}
              InputProps={{
                endAdornment: isHidden ? (
                  <AiFillEyeInvisible onClick={() => setIsHidden(!isHidden)} />
                ) : (
                  <AiFillEye onClick={() => setIsHidden(!isHidden)} />
                ),
              }}
            />
            <p>{errors.password?.message}</p>
           
           
            <InputComponent
            width = '270px'
              label="confirme sua senha"
              placeholder="confirme sua senha"
              type={isHidden ? "text" : "password"}
              {...register("confirmPassword")}
              InputProps={{
                endAdornment: isHidden ? (
                  <AiFillEyeInvisible onClick={() => setIsHidden(!isHidden)} />
                ) : (
                  <AiFillEye onClick={() => setIsHidden(!isHidden)} />
                ),
              }}
            />
            <p>{errors.confirmPassword?.message}</p>
           
            <ButtonComponent height='60px'>Cadastrar</ButtonComponent>
      
          </form>
          <A>
          Já possui cadastro? clique
            <a onClick={() => navigate(login)}> aqui </a> para fazer login
          </A>
          </Cards>
          </Form>
        </Container>
    </>
  );
};
