import { ButtonComponent } from "../../Button/style";
import MesaInfo from "../../Mesa-info";
import OptionsComponent from "../../Options";
import { AiFillCrown } from "react-icons/ai";
import { Header, Title } from "../Home/style";
import { FaUserAlt } from "react-icons/fa";

function Table() {
  return (
    <div>
      <Header>
        <nav>
          <section>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVtcuK-vJbBmZO2CV_3qOjfqCXr4CEtFU-w&usqp=CAU" />
            <Title>A Taverna</Title>
          </section>
          <OptionsComponent>
            <ButtonComponent>Criar Personagem</ButtonComponent>
            <ButtonComponent>Adicionar participante</ButtonComponent>
            <ButtonComponent>Sair</ButtonComponent>
          </OptionsComponent>
        </nav>
        <section>
          <ButtonComponent>Criar Personagem</ButtonComponent>
          <ButtonComponent>Adicionar participante</ButtonComponent>
          <ButtonComponent>Sair</ButtonComponent>
        </section>
      </Header>
      <MesaInfo>
        <section>
          <h2>Nome da mesa</h2>
          <p>
            <AiFillCrown /> Nome do Mestre
          </p>
        </section>
        <div>
          <p>Criado em: </p>
          <p>Sistema: </p>
          <p>
            <FaUserAlt /> N° de Participantes
          </p>
        </div>
      </MesaInfo>
    </div>
  );
}
export default Table;
