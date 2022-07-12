import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { InputComponent } from "../Input/style";
import { ButtonComponent } from "../Button/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaEditProfile } from "../../validators/yup";
import { baseAPI } from "../../apis/api";
import { getUserToken } from "../../constants/localStorages";
import { Container, InputContainer } from "../Modals/style";

function EditProfileModal({ EditProfVisible, setEditProfVisible, userInfo }) {
  function hide() {
    setEditProfVisible();
  }

  const customStyles = {
    width: "75%",
    maxWidth: "450px",
    height: "70%",
    maxHeight: "550px",
    borderRadius: "20px",
  };

  const schema = schemaEditProfile();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(formData) {
    console.log(formData);

    baseAPI.patch(`/users?username_like=:${userInfo.username}`, formData, {
      headers: {
        Authorization: `Bearer ${getUserToken}`,
      },
    });

    hide();
    reset();
  }

  return (
    <Rodal visible={EditProfVisible} onClose={hide} customStyles={customStyles}>
      <Container>
        <h1>Edite seu perfil</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor="name">Nome</label>
            <InputComponent
              type="name"
              name="name"
              {...register("name")}
              value={userInfo.name}
            />
            <span>{errors.name?.message}</span>
          </InputContainer>
          <InputContainer>
            <label htmlFor="email">Email</label>
            <InputComponent
              type="email"
              name="email"
              {...register("email")}
              value={userInfo.email}
            />
            <span>{errors.email?.message}</span>
          </InputContainer>
          <InputContainer>
            <label htmlFor="photo">Foto de perfil</label>
            <InputComponent
              type="url"
              name="photo"
              {...register("photo")}
              value={userInfo.img}
            />
            <span>{errors.url?.message}</span>
          </InputContainer>
          <ButtonComponent type="submit">Editar</ButtonComponent>
        </form>
      </Container>
    </Rodal>
  );
}

export default EditProfileModal;
