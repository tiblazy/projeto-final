import { useContext, useState } from "react";
import { UsersContext } from "../../../providers/usersContexts";
import { TablesContext } from "../../../providers/tablesContexts";

import { useNavigate } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import { PasswordModal } from "../../PasswordModal";
import TableModal from "../../TableModal";
import ListHome from "../../ListHome";
import Dashboard from "../../Dashboard";

import OptionsComponent from "../../Options";
import { Title, Header, TextArea, List } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { ButtonComponent } from "../../Button/style";
import EditProfileModal from "../../EditProfileModal";

function Home() {
  const { logado, userData, setLogado } = useContext(UsersContext);
  const { table, privateTable, Private } = useContext(TablesContext);
  const navigate = useNavigate();
  const { login, register } = ROUTES;
  const [filtered, setFiltered] = useState([]);
  const [local, setLocal] = useState(false);

  const [tableId, setTableId] = useState(null);
  const [tablePassword, setTablePassword] = useState(null);

  const [isHiddenCreateTableModal, setIsHiddenCreateTableModal] =
    useState(false);
  const [isHiddenPasswordModal, setIsHiddenPasswordModal] = useState(false);

  const [EditProfVisible, setEditProfVisible] = useState(false);

  if (logado) {
    Private();
  }

  function handleLogout() {
    setLogado(false);
    localStorage.removeItem("@HELLFIRE/userAccess");
    localStorage.removeItem("@HELLFIRE/userTableList");
    localStorage.removeItem("@HELLFIRE/userID");
    localStorage.removeItem("@HELLFIRE/username");
    setLocal(false);
  }

  const nonImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVtcuK-vJbBmZO2CV_3qOjfqCXr4CEtFU-w&usqp=CAU";

  function filtrar(input) {
    if (local) {
      let list = privateTable.filter((elem) => {
        let lower = elem.tablename.toLowerCase();
        let Lower = input.toLocaleLowerCase();
        return lower.includes(Lower);
      });
      setFiltered(list);
    } else if (!local) {
      let list = table.filter((elem) => {
        let lower = elem.tablename.toLowerCase();
        let Lower = input.toLocaleLowerCase();
        return lower.includes(Lower);
      });
      setFiltered(list);
    }
  }

  return (
    <div>
      <Header>
        <nav>
          {logado ? (
            <section>
              <div>
                <img
                  alt="avatar"
                  src={userData.avatar ? userData.avatar : nonImage}
                />
                <span onClick={() => setEditProfVisible(true)}>
                  Edite seu perfil
                </span>
              </div>
              <Title
                onClick={() => {
                  setFiltered([]);
                }}
              >
                Bem vindo(a) {userData.username}!
              </Title>
            </section>
          ) : (
            <Title
              onClick={() => {
                setFiltered([]);
              }}
            >
              A taverna
            </Title>
          )}
          <OptionsComponent>
            {logado ? (
              <>
                <ButtonComponent onClick={() => setLocal(!local)}>
                  {local ? "Descobrir" : "Suas mesas"}
                </ButtonComponent>
                <ButtonComponent
                  onClick={() =>
                    setIsHiddenCreateTableModal(!isHiddenCreateTableModal)
                  }
                >
                  Criar mesa
                </ButtonComponent>
                <ButtonComponent onClick={() => handleLogout()}>
                  Logout
                </ButtonComponent>
              </>
            ) : (
              <>
                <ButtonComponent onClick={() => navigate(register)}>
                  Cadastro
                </ButtonComponent>
                <ButtonComponent onClick={() => navigate(login)}>
                  Login
                </ButtonComponent>
              </>
            )}
          </OptionsComponent>
        </nav>

        <TextField
          sx={{ backgroundColor: "#D3CDC0" }}
          placeholder="Pesquisar mesa..."
          onKeyUp={(e) => {
            filtrar(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        {logado ? (
          <section>
            <ButtonComponent onClick={() => setLocal(!local)}>
              {local ? "Descobrir" : "Suas mesas"}
            </ButtonComponent>
            <ButtonComponent
              heigth={"52px"}
              width={"186px"}
              onClick={() =>
                setIsHiddenCreateTableModal(!isHiddenCreateTableModal)
              }
            >
              Criar mesa
            </ButtonComponent>
            <ButtonComponent
              heigth={"52px"}
              width={"186px"}
              onClick={() => handleLogout()}
            >
              Logout
            </ButtonComponent>
          </section>
        ) : (
          <section>
            <ButtonComponent
              heigth={"52px"}
              width={"186px"}
              onClick={() => navigate(register)}
            >
              Cadastro
            </ButtonComponent>
            <ButtonComponent
              heigth={"52px"}
              width={"144px"}
              onClick={() => navigate(login)}
            >
              Login
            </ButtonComponent>
          </section>
        )}
      </Header>

      {!logado && (
        <TextArea>
          <p>
            Bem vindo (a), aqui você pode gerenciar suas mesas de RPG sem
            complicações!
          </p>
          <hr></hr>
          <p>
            Participe de uma mesa pública ou crie a sua e adicione seus amigos!
          </p>
        </TextArea>
      )}

      <List>
        {logado && local ? (
          <h2>Suas mesas</h2>
        ) : logado && !local ? (
          <h2>Lista de mesas</h2>
        ) : (
          <h2>Lista de mesas públicas</h2>
        )}
        <ul>
          {local ? (
            <Dashboard
              privateTable={filtered.length > 0 ? filtered : privateTable}
              setIsHiddenPasswordModal={setIsHiddenPasswordModal}
              setTableId={setTableId}
              setTablePassword={setTablePassword}
            />
          ) : (
            <ListHome
              logado={logado}
              tablePub={filtered.length > 0 ? filtered : table}
              setIsHiddenPasswordModal={setIsHiddenPasswordModal}
              setTableId={setTableId}
              setTablePassword={setTablePassword}
            />
          )}
        </ul>
      </List>

      <PasswordModal
        isVisible={isHiddenPasswordModal}
        setIsVisible={setIsHiddenPasswordModal}
        tableId={tableId}
        tablePassword={tablePassword}
      />

      <TableModal
        tableVisible={isHiddenCreateTableModal}
        setTableVisible={setIsHiddenCreateTableModal}
      />
      <EditProfileModal
        EditProfVisible={EditProfVisible}
        setEditProfVisible={setEditProfVisible}
        userInfo={userData}
      />
    </div>
  );
}

export default Home;
