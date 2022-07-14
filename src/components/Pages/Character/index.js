import { useNavigate } from "react-router-dom";
import ROUTES from "../../../constants/routes";
import { ButtonComponent } from "../../Button/style";
import Collapse from "../../Collapse/index";
import TextFieldComponent from "../../TextField";
import { CharacterContainer, CharInfo, Header } from "./style";
import { useLocation } from "react-router-dom";

const Character = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { home } = ROUTES;

  if (state.atributtes) {
    state.atributtes = JSON.stringify(state.atributtes);
  }

  if (!state.lore) {
    state.lore = "vazio";
  }

  if (state.bag.length === 0) {
    state.bag = "vazio";
  }

  return (
    <>
      <Header>
        <h1>A taverna</h1>
        <ButtonComponent
          onClick={() => {
            navigate(home);
          }}
        >
          Sair
        </ButtonComponent>
      </Header>
      <CharInfo>
        <img
          alt="avatar"
          src={
            state.image
              ? state.image
              : "https://steamuserimages-a.akamaihd.net/ugc/585783733698585290/7F498B23660D38D243734B03149F28C28952DC13/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
          }
        />
        <section>
          <h2>{state.name}</h2>
          <p>Classe: {state.classe}</p>
          <p>Idade: {state.idade}</p>
        </section>
      </CharInfo>
      <CharacterContainer>
        <Collapse
          master={true}
          title={"Atributos"}
          type={"atributtes"}
          children={state.atributtes}
        ></Collapse>
        <Collapse
          master={true}
          title={"Lore"}
          type={"lore"}
          children={state.lore}
        ></Collapse>
        <Collapse
          master={true}
          title={"Mochila"}
          type={"bag"}
          children={state.bag}
        ></Collapse>
        <TextFieldComponent
          page={true}
          master={true}
          title={"Atributos"}
          type={"atributtes"}
          children={state.atributtes}
        ></TextFieldComponent>
        <TextFieldComponent
          page={true}
          master={true}
          title={"Lore"}
          type={"lore"}
          children={state.lore}
        ></TextFieldComponent>
        <TextFieldComponent
          page={true}
          master={true}
          title={"Mochila"}
          type={"bag"}
          children={state.bag}
        ></TextFieldComponent>
      </CharacterContainer>
    </>
  );
};

export default Character;
