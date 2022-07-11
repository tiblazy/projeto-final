import Rodal from "rodal";
import { useContext, useEffect, useState } from "react";
import { Container } from "./style";
import { InputComponent } from "../Input/style";
import { TablesContext } from "../../providers/tablesContexts";
import "rodal/lib/rodal.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ButtonComponent } from "../Button/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCreateTable } from "../../validators/yup";
import { IoLogoGameControllerA } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

function TableModal({ tableVisible, setTableVisible }) {
  const [privateTable, setPrivateTable] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmShown, setConfirmShown] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPassInput, setConfirmpassInput] = useState("");
  const [loading, setLoading] = useState(false);

  const { tableCreate } = useContext(TablesContext);

  // deve ser chamada no botão que abrir o modal
  //     setTableVisible(true);

  function hide() {
    setTableVisible(false);
  }

  useEffect(() => {
    if (!privateTable) {
      setPasswordInput("");
      setConfirmpassInput("");
    }
  }, [privateTable]);

  function togglePassword() {
    setPasswordShown(!passwordShown);
  }

  function toggleConfirmPass() {
    setConfirmShown(!confirmShown);
  }

  const customStyles = {
    width: "75%",
    maxWidth: "450px",
    height: "75%",
    maxHeight: "600px",
  };

  const formSchema = schemaCreateTable();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmit(formData) {
    reset();

    hide();

    console.log(formData);

    tableCreate(formData, setLoading);
  }

  return (
    <Rodal visible={tableVisible} onClose={hide} customStyles={customStyles}>
      <Container>
        <h1>Criar mesa</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nome da mesa</label>
          <InputComponent
            type="name"
            name="name"
            {...register("name")}
            InputProps={{
              startAdornment: <FaUserCircle />,
            }}
          />
          <span>{errors.name?.message}</span>
          <label htmlFor="system">Sistema de jogo</label>
          <InputComponent
            type="text"
            name="system"
            {...register("system")}
            InputProps={{
              startAdornment: <IoLogoGameControllerA />,
            }}
          />
          <span>{errors.system?.message}</span>
          <InputComponent
            type="checkbox"
            name="private"
            onChange={() => {
              setPrivateTable(!privateTable);
            }}
            {...register("visibility")}
          />
          <label htmlFor="private">Mesa privada?</label>
          <label htmlFor="password">Senha</label>
          <InputComponent
            type={passwordShown ? "text" : "password"}
            name="password"
            disabled={!privateTable}
            {...register("password")}
            onChange={(event) => setPasswordInput(event.target.value)}
            value={passwordInput}
            InputProps={{
              endAdornment: !passwordShown ? (
                <AiFillEye onClick={togglePassword} />
              ) : (
                <AiFillEyeInvisible onClick={togglePassword} />
              ),
            }}
          />
          <span>{errors.password?.message}</span>
          <label htmlFor="confirmPass">Confirme sua senha</label>
          <InputComponent
            type={confirmShown ? "text" : "password"}
            name="confirmPass"
            disabled={!privateTable}
            {...register("confirmPass")}
            onChange={(event) => setConfirmpassInput(event.target.value)}
            value={confirmPassInput}
            InputProps={{
              endAdornment: !confirmShown ? (
                <AiFillEye onClick={toggleConfirmPass} />
              ) : (
                <AiFillEyeInvisible onClick={toggleConfirmPass} />
              ),
            }}
          />
          <span>{errors.confirmPass?.message}</span>
          <ButtonComponent type="submit">Criar</ButtonComponent>
        </form>
      </Container>
    </Rodal>
  );
}

export default TableModal;
