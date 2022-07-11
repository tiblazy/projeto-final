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

  const hide = () => {
    setIsVisible(false);
    reset();
  };

  const customStyles = {
    width: "100%",
    maxWidth: "320px",

    color: "#7E0902",
  };

  const schema = schemaPassword();
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
    if (data.password === tablePassword) {
      navigate(`/tables/${tableId}`);
      setIsVisible(false);
      reset();
    } else {
      setError("Senha incorreta");
      removeError();
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
            type={isHidden ? "text" : "password"}
            name="password"
            {...register("password")}
            InputProps={{
              endAdornment: isHidden ? (
                <AiFillEyeInvisible onClick={() => setIsHidden(!isHidden)} />
              ) : (
                <AiFillEye onClick={() => setIsHidden(!isHidden)} />
              ),
            }}
          />

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
