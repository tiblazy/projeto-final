import { useEffect, useState } from "react";
import { baseAPI } from "../../apis/api";
import { getUserToken } from "../../constants/localStorages";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCreateTable } from "../../validators/yup";

import { toast } from "react-toastify";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { CheckBoxContainer, Container, InputContainer } from "../Modals/style";
import { IoLogoGameControllerA } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { InputComponent } from "../Input/style";
import { ButtonComponent } from "../Button/style";

function TableModal({ tableVisible, setTableVisible }) {
  const [privateTable, setPrivateTable] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmShown, setConfirmShown] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPassInput, setConfirmpassInput] = useState("");

  const toastSuccess = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  function hide() {
    setTableVisible(false);
  }

  // if()

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
    maxWidth: "420px",
    height: "85%",
    maxHeight: "620px",
    borderRadius: "20px",
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

  const ownerId = localStorage.getItem("@HELLFIRE/userID");
  const ownerName = localStorage.getItem("@HELLFIRE/username");

  async function onSubmit(formData) {
    reset();

    hide();

    if (formData.visibility === true) {
      formData.visibility = "private";
    } else {
      formData.visibility = "public";
      formData.password = null;
    }

    const newTable = {
      tablename: formData.name,
      visibility: formData.visibility,
      password: formData.password,
      userId: parseInt(ownerId),
      username: ownerName,
      system: formData.system,
      image: null,
      lore: null,
      notice_board: null,
      maxParticipants: 5,
      participants: [],
      characters: [],
      createdAt: new Date(),
    };

    const response = await baseAPI.post("/tables", newTable, {
      headers: {
        Authorization: `Bearer ${getUserToken}`,
      },
    });

    if (response.status == 201) {
      toastSuccess("Mesa criada com sucesso");
    }
  }

  return (
    <Rodal visible={tableVisible} onClose={hide} customStyles={customStyles}>
      <Container>
        <h1>Criar mesa</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
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
          </InputContainer>

          <InputContainer>
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
          </InputContainer>

          <CheckBoxContainer>
            <input
              type="checkbox"
              name="private"
              onClick={() => {
                setPrivateTable(!privateTable);
              }}
              {...register("visibility")}
            />
            <label htmlFor="private">Mesa privada?</label>
          </CheckBoxContainer>

          <InputContainer>
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
          </InputContainer>

          <InputContainer>
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
          </InputContainer>
          <ButtonComponent type="submit">Criar</ButtonComponent>
        </form>
      </Container>
    </Rodal>
  );
}

export default TableModal;
