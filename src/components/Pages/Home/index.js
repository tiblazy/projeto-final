import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Mesas from "../../Mesas";
import { Title, Header, TextArea, List } from "./style";
import { ButtonComponent } from "../../Button/style";
import { useContext, useState } from "react";
import { TablesContext } from "../../../providers/tablesContexts";
import OptionsComponent from "../../Options";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../constants/routes";
import { UsersContext } from "../../../providers/usersContexts";
import { PasswordModal } from "../../PasswordModal";
import TableModal from "../../TableModal";
import ListHome from "../../ListHome";
import Dashboard from "../../Dashboard";

function Home() {
  const { logado, userData, setLogado } = useContext(UsersContext);
  const { table, privateTable, Private } = useContext(TablesContext);
  const navigate = useNavigate();
  const { login, register } = ROUTES;
  const [filtered, setFiltered] = useState([]);
  const [local, setLocal] = useState(false);
  const [arr, setArr] = useState([...table]);

  const [input, setInput] = useState("");

  const [tableId, setTableId] = useState(null);
  const [tablePassword, setTablePassword] = useState(null);

  const tablePub = table.filter((item) => item.visibility === "public");

  const [isHiddenCreateTableModal, setIsHiddenCreateTableModal] =
    useState(false);
  const [isHiddenPasswordModal, setIsHiddenPasswordModal] = useState(false);

  if (logado) {
    Private();
    // console.log(privateTable);
  }

  function handleLogout() {
    setLogado(false);
    localStorage.removeItem("@HELLFIRE/userAccess");
    setLocal(false);
  }

  if (input && logado) {
    let list = privateTable.filter((elem) => {
      let lower = elem.tablename.toLowerCase();
      let Lower = input.toLocaleLowerCase();
      return lower.includes(Lower);
    });
    setInput("");
    return setFiltered(list);
  } else if (input && !logado) {
    let list = table.filter((elem) => {
      let lower = elem.tablename.toLowerCase();
      let Lower = input.toLocaleLowerCase();
      return lower.includes(Lower);
    });
    setInput("");
    return setFiltered(list);
  }

  return (
    <div>
      <Header>
        <nav>
          {logado ? (
            <section>
              <img
                src={
                  userData.perfil
                    ? userData.perfil
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVtcuK-vJbBmZO2CV_3qOjfqCXr4CEtFU-w&usqp=CAU"
                }
              />
              <Title onClick={() => setFiltered([])}>
                Bem vindo(a) {userData.username}!
              </Title>
            </section>
          ) : (
            <Title onClick={() => setFiltered([])}>A taverna</Title>
          )}

          <OptionsComponent>
            {logado ? (
              <div>
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
              </div>
            ) : (
              <div>
                <ButtonComponent onClick={() => navigate(register)}>
                  Cadastro
                </ButtonComponent>
                <ButtonComponent onClick={() => navigate(login)}>
                  Login
                </ButtonComponent>
              </div>
            )}
          </OptionsComponent>
        </nav>
        {logado && (
          <h2 onClick={() => setLocal(!local)}>
            {local ? "Descobrir" : "Suas mesas"}
          </h2>
        )}

        <TextField
          sx={{ backgroundColor: "#D3CDC0" }}
          placeholder="Pesquisar mesa..."
          onChange={(event) => setInput(event.target.value)}
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
        {logado ? <h2>Suas mesas</h2> : <h2>Lista de mesas públicas</h2>}
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
    </div>
  );
}

export default Home;
