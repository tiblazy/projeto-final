import Rodal from "rodal";
import { useContext } from "react";
import { InputComponent } from "../Input/style";
import "rodal/lib/rodal.css";
import { ButtonComponent } from "../Button/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCharacter } from "../../validators/yup";
import { Container, InputContainer } from "../Modals/style";

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

  const { setCharacterData, createCharacter } = useContext();

  function onSubmit(formData) {
    console.log(formData);

    setCharacterData(formData);
    createCharacter();

    reset();
    hide();
  }

  return (
    <Rodal visible={charVisible} onClose={hide} customStyles={customStyles}>
      <Container>
        <h1>Crie um personagem</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor="name">Nome do personagem</label>
            <InputComponent type="name" name="name" {...register("name")} />
          </InputContainer>
          <InputContainer>
            <label htmlFor="class">Escolha uma classe</label>
            <InputComponent type="text" name="class" {...register("class")} />
          </InputContainer>
          <InputContainer>
            <label htmlFor="lore">Lore do personagem</label>
            <InputComponent type="text" name="lore" {...register("lore")} />
          </InputContainer>
          <InputContainer>
            <label htmlFor="photo">Foto de perfil do personagem</label>
            <InputComponent type="url" name="photo" {...register("photo")} />
          </InputContainer>
          <ButtonComponent type="submit">Criar</ButtonComponent>
        </form>
      </Container>
    </Rodal>
  );
}

export default CharModal;
