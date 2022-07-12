import Rodal from "rodal";
import { useContext } from "react";
import { Container } from "./style";
import { InputComponent } from "../Input/style";
import "rodal/lib/rodal.css";
import { ButtonComponent } from "../Button/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCharacter } from "../../validators/yup";
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
  };

  const schema = schemaCharacter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { id } = useParams();

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

    // setCharacterData(formData);
    // createCharacter();

    const response = baseAPI.patch(
      `/tables/${id}`,
      { characters: formData },
      {
        headers: { Authorization: `Bearer ${getUserToken}` },
      }
    );
    toastSuccess("Mesa atualizada com sucesso");
    console.log(response);
  }

  return (
    <Rodal visible={charVisible} onClose={hide} customStyles={customStyles}>
      <Container>
        <h1>Crie um personagem</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nome do personagem</label>
          <InputComponent type="name" name="name" {...register("name")} />
          <label htmlFor="class">Escolha uma classe</label>
          <InputComponent type="text" name="class" {...register("class")} />
          <label htmlFor="lore">Lore do personagem</label>
          <InputComponent type="text" name="lore" {...register("lore")} />
          <label htmlFor="photo">Foto de perfil do personagem</label>
          <InputComponent type="url" name="photo" {...register("photo")} />
          <ButtonComponent type="submit">Criar</ButtonComponent>
        </form>
      </Container>
    </Rodal>
  );
}

export default CharModal;
