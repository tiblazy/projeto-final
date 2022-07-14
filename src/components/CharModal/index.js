import { useContext } from "react";
import { TablesContext } from "../../providers/tablesContexts";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCharacter } from "../../validators/yup";

import { useParams } from "react-router-dom";
import { baseAPI } from "../../apis/api";
import { getUserToken } from "../../constants/localStorages";

import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { toast } from "react-toastify";
import { Container, InputContainer } from "../Modals/style";
import { ButtonComponent } from "../Button/style";
import { InputComponent } from "../Input/style";

function CharModal({ charVisible, setCharVisible }) {
  function hide() {
    setCharVisible(false);
  }

  const customStyles = {
    width: "75%",
    maxWidth: "450px",
    height: "75%",
    maxHeight: "600px",
    borderRadius: "20px",
  };

  const schema = schemaCharacter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { id } = useParams();
  const { table } = useContext(TablesContext);

  const toastSuccess = (message, route = null) => {
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

  function onSubmit(formData) {
    console.log(formData);

    const filtered = table.filter((elem) => {
      return parseInt(elem.id) === parseInt(id);
    });
    const newArr = [...filtered[0].characters, formData];

    console.log(filtered[0]);

    const response = baseAPI.patch(
      `/tables/${id}`,
      { characters: newArr },
      {
        headers: { Authorization: `Bearer ${getUserToken}` },
      }
    );
    toastSuccess("Mesa atualizada com sucesso");
    reset();
    console.log(response);
  }

  return (
    <Rodal visible={charVisible} onClose={hide} customStyles={customStyles}>
      <Container>
        <h1>Crie um personagem</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor="name">Nome do personagem</label>
            <InputComponent type="name" name="name" {...register("name")} />
            <span>{errors.name?.message}</span>
          </InputContainer>
          <InputContainer>
            <label htmlFor="class">Escolha uma classe</label>
            <InputComponent type="text" name="class" {...register("class")} />
            <span>{errors.class?.message}</span>
          </InputContainer>
          <InputContainer>
            <label htmlFor="email">email do jogador</label>
            <InputComponent type="text" name="email" {...register("email")} />
            <span>{errors.email?.message}</span>
          </InputContainer>
          <InputContainer>
            <label htmlFor="avatar">Foto de perfil do personagem</label>
            <InputComponent type="url" name="avatar" {...register("avatar")} />
            <span>{errors.avatar?.message}</span>
          </InputContainer>
          <ButtonComponent type="submit">Criar</ButtonComponent>
        </form>
      </Container>
    </Rodal>
  );
}

export default CharModal;
