import { ButtonComponent } from "../Button/style";
import { Container } from "./style";

function MesaInfo({ children }) {
  return (
    <Container>
      {children}
      <div>
        <ButtonComponent>Participantes</ButtonComponent>
        <ButtonComponent>Personagens</ButtonComponent>
      </div>
    </Container>
  );
}
export default MesaInfo;
