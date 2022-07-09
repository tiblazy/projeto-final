import { useState } from "react";

import Rodal from "rodal";
import "rodal/lib/rodal.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaPassword } from "../../validators/yup";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Container } from "./style";
import { InputComponent } from "../Input/style";
import { ButtonComponent } from "../Button/style";
import { useNavigate } from "react-router-dom";

export const PasswordModal = ({
  isVisible,
  setIsVisible,

  tableId,
  tablePassword = null,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const hide = () => setIsVisible(false);
  const customStyles = {
    width: "75%",
    maxWidth: "450px",
    height: "75%",
    maxHeight: "250px",
  };

  const schema = schemaPassword;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const removeError = () =>
    setInterval(() => {
      setError(null);
    }, 3000);

  const onSubmit = (data) => {
    setIsVisible(false);

    if (tablePassword === null) {
      navigate(`tables/${tableId}`);
      if (data.password === tablePassword) {
        navigate(`/tables/{tableId}`);
        reset();
      } else {
        setError("Senha incorreta");
        removeError();
        reset();
      }
    }
  };

  return (
    <Rodal visible={isVisible} onClose={hide} customStyles={customStyles}>
      <Container>
        <h1>Entrar nessa mesa</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Senha</label>
          <InputComponent
            placeholder="insira a senha da sala"
            type={isHidden ? "password" : "text"}
            name="password"
            {...register("password")}
          />
          {isHidden ? (
            <AiFillEye onClick={() => setIsHidden(!isHidden)} />
          ) : (
            <AiFillEyeInvisible onClick={() => setIsHidden(!isHidden)} />
          )}
          {error ? (
            <p>{error}</p>
          ) : errors.password ? (
            <p>{errors.password?.message}</p>
          ) : null}

          <ButtonComponent onClick={() => handleSubmit(onSubmit)}>
            Entrar
          </ButtonComponent>
        </form>
      </Container>
    </Rodal>
  );
};
