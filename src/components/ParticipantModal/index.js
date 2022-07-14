import { useContext } from "react";
import { TablesContext } from "../../providers/tablesContexts";

import { useParams } from "react-router-dom";
import { getUserToken } from "../../constants/localStorages";
import { baseAPI } from "../../apis/api";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaParticipant } from "../../validators/yup";
import { Container, InputContainer } from "../Modals/style";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { InputComponent } from "../Input/style";
import { ButtonComponent } from "../Button/style";

import { toast } from "react-toastify";

function ParticipantModal({ participantVisible, setParticipantVisible }) {
  function hide() {
    setParticipantVisible(false);
  }
  const { table } = useContext(TablesContext);
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

  const { id } = useParams();

  function onSubmit(formData) {
    console.log(formData);
    const filtered = table.filter((elem) => {
      return parseInt(elem.id) === parseInt(id);
    });
    const newArr = [...filtered[0].participants, formData];

    const response = baseAPI.patch(
      `/tables/${id}`,
      { participants: newArr },
      {
        headers: { Authorization: `Bearer ${getUserToken}` },
      }
    );
    toastSuccess("Mesa atualizada com sucesso");

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
            <label htmlFor="username">Nome do participante</label>
            <InputComponent
              type="username"
              name="username"
              {...register("username")}
            />
            <span>{errors.username?.message}</span>
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
