import { useContext, useState, useEffect } from "react";
import { TablesContext } from "../../../providers/tablesContexts";
import { UsersContext } from "../../../providers/usersContexts";

import { useNavigate, useParams } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import CharModal from "../../CharModal";
import ParticipantModal from "../../ParticipantModal";

import MesaInfo from "../../Mesa-info";
import { MesaContainer } from "./style";
import OptionsComponent from "../../Options";
import { ButtonComponent } from "../../Button/style";
import TextFieldComponent from "../../TextField";
import { AiFillCrown } from "react-icons/ai";
import { Header, Title } from "../Home/style";
import { FaUserAlt } from "react-icons/fa";

function Table() {
  const { table } = useContext(TablesContext);
  const navigate = useNavigate();
  const { home } = ROUTES;
  const { id } = useParams();
  const [selectedTable, setSelectedTable] = useState([]);
  const { userData } = useContext(UsersContext);

  const [master, setMaster] = useState(true);

  //alterar esse state para renderizar a tela de jogador e tela de mestre

  const [charVisible, setCharVisible] = useState(false);
  const [participantVisible, setParticipantVisible] = useState(false);

  function filtered() {
    let newTable = table.filter((elem) => {
      return parseInt(id) === parseInt(elem.id);
    });
    return setSelectedTable(newTable[0]);
  }
  useEffect(() => {
    filtered();
  }, []);

  function handleLogout() {
    setSelectedTable([]);
    navigate(home);
  }
  return (
    <div>
      <Header>
        <nav>
          <section>
            <img
              src={
                userData.perfil
                  ? userData.perfil
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVtcuK-vJbBmZO2CV_3qOjfqCXr4CEtFU-w&usqp=CAU"
              }
            />
            <Title>A Taverna</Title>
          </section>
          {master ? (
            <OptionsComponent>
              <ButtonComponent onClick={() => setCharVisible(true)}>
                Criar Personagem
              </ButtonComponent>
              <ButtonComponent onClick={() => setParticipantVisible(true)}>
                Adicionar participante
              </ButtonComponent>
              <ButtonComponent onClick={() => handleLogout()}>
                Sair
              </ButtonComponent>
            </OptionsComponent>
          ) : (
            <OptionsComponent>
              <ButtonComponent onClick={() => handleLogout()}>
                Sair
              </ButtonComponent>
            </OptionsComponent>
          )}
        </nav>
        {master ? (
          <section>
            <ButtonComponent onClick={() => setCharVisible(true)}>
              Criar Personagem
            </ButtonComponent>
            <ButtonComponent onClick={() => setParticipantVisible(true)}>
              Adicionar participante
            </ButtonComponent>
            <ButtonComponent onClick={() => handleLogout()}>
              Sair
            </ButtonComponent>
          </section>
        ) : (
          <section>
            <ButtonComponent onClick={() => handleLogout()}>
              Sair
            </ButtonComponent>
          </section>
        )}
      </Header>
      <MesaInfo>
        <section>
          <h2>{selectedTable.tablename}</h2>
          <p>
            <AiFillCrown /> {selectedTable.username}
          </p>
        </section>
        <div>
          <p>
            Criado em:{" "}
            {selectedTable.createdAt
              ?.split("T")[0]
              .split("-")
              .reverse()
              .join("/")}
          </p>
          <p>Sistema: {selectedTable.system}</p>
          <p>
            <FaUserAlt /> {selectedTable.participants?.length}
          </p>
        </div>
      </MesaInfo>
      <MesaContainer>
        <TextFieldComponent title={"Quadro de avisos"} master={master} />
        <TextFieldComponent title={"Lore da mesa"} master={master} />

        <TextFieldComponent title={"Detalhes da mesa"} master={master} />
      </MesaContainer>
      <CharModal charVisible={charVisible} setCharVisible={setCharVisible} />
      <ParticipantModal
        participantVisible={participantVisible}
        setParticipantVisible={setParticipantVisible}
      />
    </div>
  );
}
export default Table;
