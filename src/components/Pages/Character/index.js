import { useNavigate } from "react-router-dom";
import ROUTES from "../../../constants/routes";
import { ButtonComponent } from "../../Button/style";
import Collapse from "../../Collapse/index";
import TextFieldComponent from "../../TextField";
import { CharacterContainer, CharInfo, Header } from "./style";

const Character = () => {
  const navigate = useNavigate();
  const { home } = ROUTES;

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
        <img src="https://steamuserimages-a.akamaihd.net/ugc/585783733698585290/7F498B23660D38D243734B03149F28C28952DC13/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" />
        <section>
          <h2>Nome do personagem</h2>
          <p>Classe: </p>
          <p>Idade: </p>
        </section>
      </CharInfo>
      <CharacterContainer>
        <Collapse master={true} title={"Atributos"}></Collapse>
        <Collapse master={true} title={"Lore"}></Collapse>
        <Collapse master={true} title={"Mochila"}></Collapse>
        <TextFieldComponent
          master={true}
          title={"Atributos"}
        ></TextFieldComponent>
        <TextFieldComponent master={true} title={"Lore"}></TextFieldComponent>
        <TextFieldComponent
          master={true}
          title={"Mochila"}
        ></TextFieldComponent>
      </CharacterContainer>
    </>
  );
};

export default Character;
