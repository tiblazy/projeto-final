import Rodal from "rodal";
import { InputComponent } from "../Input/style";
import "rodal/lib/rodal.css";
import { ButtonComponent } from "../Button/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaParticipant } from "../../validators/yup";
import { Container, InputContainer } from "../Modals/style";

function ParticipantModal({ participantVisible, setParticipantVisible }) {
  function hide() {
    setParticipantVisible(false);
  }

  const customStyles = {
    width: "75%",
    maxWidth: "450px",
    height: "50%",
    maxHeight: "400px",
    borderRadius: "20px",
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
          <InputContainer>
            <label htmlFor="name">Nome do participante</label>
            <InputComponent type="name" name="name" {...register("name")} />
            <span>{errors.name?.message}</span>
          </InputContainer>
          <InputContainer>
            <label htmlFor="email">Email</label>
            <InputComponent type="email" name="email" {...register("email")} />
            <span>{errors.email?.message}</span>
          </InputContainer>
          <ButtonComponent type="submit">Adicionar</ButtonComponent>
        </form>
      </Container>
    </Rodal>
  );
}

export default ParticipantModal;
