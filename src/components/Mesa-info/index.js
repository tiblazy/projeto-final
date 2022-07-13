import { ButtonComponent } from "../Button/style";
import { Container } from "./style";
import { useContext } from "react";
import { TablesContext } from "../../providers/tablesContexts";
import { useParams } from "react-router-dom";

function MesaInfo({ children }) {
  const { id } = useParams();
  const { table } = useContext(TablesContext);

  const filtered = table.filter((elem) => {
    return parseInt(elem.id) === parseInt(id);
  });

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
