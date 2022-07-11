import Rodal from "rodal";
import { useContext, useEffect, useState } from "react";
import { Container } from "./style";
import { InputComponent } from "../Input/style";
import { TablesContext } from "../../providers/tablesContexts";
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
  }

  return (
    <Rodal
      visible={participantVisible}
      onClose={hide}
      customStyles={customStyles}
    >
      <Container></Container>
    </Rodal>
  );
}
