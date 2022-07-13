import { useContext, useState, useEffect } from "react";
import { TablesContext } from "../../../providers/tablesContexts";
import { UsersContext } from "../../../providers/usersContexts";

import { useNavigate, useParams } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import CharModal from "../../CharModal";
import ParticipantModal from "../../ParticipantModal";
import EditProfileModal from "../../EditProfileModal";

import MesaInfo from "../../Mesa-info";
import { MesaContainer } from "./style";
import OptionsComponent from "../../Options";
import { ButtonComponent } from "../../Button/style";
import TextFieldComponent from "../../TextField";
import { AiFillCrown } from "react-icons/ai";
import { Header, Title } from "../Home/style";
import { FaUserAlt } from "react-icons/fa";
import Collapse from "../../Collapse";

function Table() {
  const { table } = useContext(TablesContext);
  const navigate = useNavigate();
  const { home } = ROUTES;
  const { id } = useParams();
  const [selectedTable, setSelectedTable] = useState([]);
  const { userData } = useContext(UsersContext);
  const [personagens, setPersonagens] = useState([]);

  const [master, setMaster] = useState(false);

  const [charVisible, setCharVisible] = useState(false);
  const [participantVisible, setParticipantVisible] = useState(false);
  const [EditProfVisible, setEditProfVisible] = useState(false);

  function filtered() {
    let newTable = table.filter((elem) => {
      return parseInt(id) === parseInt(elem.id);
    });
    return setSelectedTable(newTable[0]);
  }
  useEffect(() => {
    filtered();
  }, []);

  function permission() {
    if (parseInt(selectedTable.userId) === parseInt(userData.id)) {
      setMaster(true);
      setPersonagens(selectedTable.characters);
    } else {
      // const personagem = selectedTable.characters?.filter((elem) => {
      //   parseInt(elem.userId) === parseInt(userData.id)
      // });
      // setPersonagens(personagem);
      //   if (personagem.length > 0) {


      //   } else {
      //colocar botoes disabled
      //   }
    }
  }

  useEffect(() => {
    permission();
  }, [selectedTable]);

  function handleLogout() {
    setSelectedTable([]);
    setMaster(false);
    navigate(home);
  }
  return (
    <div>
      <Header>
        <nav>
          <section>
            <div>
              <img
                src={
                  userData.avatar
                    ? userData.avatar
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVtcuK-vJbBmZO2CV_3qOjfqCXr4CEtFU-w&usqp=CAU"
                }
              />
              <span onClick={() => setEditProfVisible(true)}>
                Edite seu perfil
              </span>
            </div>
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
        <Collapse
          title={"Quadro de avisos"}
          master={master}
          type={"notice_board"}
        >
          {selectedTable.notice_board
            ? selectedTable.notice_board
            : "Sem avisos por enquanto"}
        </Collapse>
        <TextFieldComponent
          title={"Quadro de avisos"}
          master={master}
          type={"notice_board"}
        >
          {selectedTable.notice_board
            ? selectedTable.notice_board
            : "Sem avisos por enquanto"}
        </TextFieldComponent>
        <Collapse title={"Lore da mesa"} master={master} type={"lore"}>
          {selectedTable.lore
            ? selectedTable.lore
            : "Escreva a lore da sua campanha aqui!"}
        </Collapse>
        <TextFieldComponent
          title={"Lore da mesa"}
          master={master}
          type={"lore"}
        >
          {selectedTable.lore
            ? selectedTable.lore
            : "Escreva a lore da sua campanha aqui!"}
        </TextFieldComponent>
        <Collapse
          title={"Detalhes da mesa"}
          master={master}
          // children={[
          //   selectedTable.image,
          //   selectedTable.maxParticipants,
          //   selectedTable.system,
          //   selectedTable.tablename,
          //   selectedTable.visibility,
          // ]}
        ></Collapse>
        <TextFieldComponent title={"Detalhes da mesa"} master={master}>
          {/* {selectedTable.image
            ? selectedTable.image
            : "Cole aqui o link de uma imagem de capa"}
          {selectedTable.maxParticipants
            ? selectedTable.maxParticipants
            : "Altere o maximo de participantes da mesa"}
          {selectedTable.system
            ? selectedTable.system
            : "Altere o sistema de jogo da sua mesa"}
          {selectedTable.tablename
            ? selectedTable.tablename
            : "Altere o nome da sua mesa"}
          {selectedTable.visibility
            ? selectedTable.visibility
            : "Altere o a visibilidade da sua mesa"} */}
        </TextFieldComponent>
      </MesaContainer>
      <CharModal charVisible={charVisible} setCharVisible={setCharVisible} />
      <ParticipantModal
        participantVisible={participantVisible}
        setParticipantVisible={setParticipantVisible}
      />
      <EditProfileModal
        EditProfVisible={EditProfVisible}
        setEditProfVisible={setEditProfVisible}
        userInfo={userData}
      />
    </div>
  );
}
export default Table;
