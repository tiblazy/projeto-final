import React, { useContext, useEffect,useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../../../providers/usersContexts";

import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../../validators/yup";

import { getUserToken } from "../../../constants/localStorages";
import ROUTES from "../../../constants/routes";

import { Container,Form,Background,Cards,A} from "./style";
import { InputComponent } from "../../Input/style";
import { ButtonComponent } from "../../Button/style";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const Login = () => {
  const { login } = useContext(UsersContext);
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(false);

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
            width = '270px'
            label="Email"
            placeholder="insira seu email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          
          <InputComponent
            width = '270px'
            label="Password"
            type={isHidden ? "text" : "password"}
            placeholder="insira seu password"
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
          
          <ButtonComponent  height='60px' onClick={() => handleSubmit(onLoginFunction)}>
            Entrar
          </ButtonComponent>
          </form>
          <A>
          Ainda não possui cadastro ? Clique
          <a onClick={() => navigate(ROUTES.register)}> aqui</a>
          </A>
        
        </Cards>
        </Form>
        <Background>
        </Background>
      </Container>
    </>
  );
};
