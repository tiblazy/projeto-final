import Rodal from "rodal";
import { useContext } from "react";
import { InputComponent } from "../Input/style";
import "rodal/lib/rodal.css";
import { ButtonComponent } from "../Button/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCharacter } from "../../validators/yup";

import { Container, InputContainer } from "../Modals/style";

import { CharacterContext } from "../../providers/characterContexts";
import { TablesContext } from "../../providers/tablesContexts";
import { useParams } from "react-router-dom";
import { baseAPI } from "../../apis/api";
import { getUserToken } from "../../constants/localStorages";
import { toast } from "react-toastify";

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

  const { setCharacterData, createCharacter } = useContext(CharacterContext);
  const { tableUpdate } = useContext(TablesContext);

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

<<<<<<< HEAD
    const filtered = table.filter((elem) => {
      return parseInt(elem.id) === parseInt(id);
    });
    const newArr = [...filtered[0].characters, formData];

    console.log(filtered[0]);

=======
>>>>>>> edad03325593f370d18cea37fa6124b1e28f51c8
    const response = baseAPI.patch(
      `/tables/${id}`,
      { characters: newArr },
      {
        headers: { Authorization: `Bearer ${getUserToken}` },
      }
    );
    toastSuccess("Mesa atualizada com sucesso");
<<<<<<< HEAD
    reset();
    console.log(response);
=======
>>>>>>> edad03325593f370d18cea37fa6124b1e28f51c8
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
            <label htmlFor="lore">Lore do personagem</label>
            <InputComponent type="text" name="lore" {...register("lore")} />
            <span>{errors.lore?.message}</span>
          </InputContainer>
          <InputContainer>
            <label htmlFor="photo">Foto de perfil do personagem</label>
            <InputComponent type="url" name="photo" {...register("photo")} />
            <span>{errors.photo?.message}</span>
          </InputContainer>
          <ButtonComponent type="submit">Criar</ButtonComponent>
        </form>
      </Container>
    </Rodal>
  );
}

export default CharModal;
