import Rodal from "rodal";
import { Container } from "./style";
import { InputComponent } from "../Input/style";
import "rodal/lib/rodal.css";
import { ButtonComponent } from "../Button/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaParticipant } from "../../validators/yup";

function ParticipantModal({ participantVisible, setParticipantVisible }) {
  function hide() {
    setParticipantVisible(false);
  }

  const customStyles = {
    width: "75%",
    maxWidth: "450px",
    height: "75%",
    maxHeight: "600px",
  };

  const schema = schemaParticipant();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(formData) {
    console.log(formData);

    reset();
  }

  return (
    <Rodal
      visible={participantVisible}
      onClose={hide}
      customStyles={customStyles}
    >
      <Container>
        <h1>Adicione um participante</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nome do participante</label>
          <InputComponent type="name" name="name" {...register("name")} />
          <span>{errors.name?.message}</span>
          <label htmlFor="email">Email</label>
          <InputComponent type="email" name="email" {...register("email")} />
          <span>{errors.email?.message}</span>
          <ButtonComponent type="submit">Adicionar</ButtonComponent>
        </form>
      </Container>
    </Rodal>
  );
}

export default ParticipantModal;
