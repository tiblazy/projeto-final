import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Mesas from "../../Mesas";
import { Title, Header, TextArea, List } from "./style";
import { ButtonComponent } from "../../Button/style";
import { useContext } from "react";
import { TablesContext } from "../../../providers/tablesContexts";
import OptionsComponent from "../../Options";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../constants/routes";
import { UsersContext } from "../../../providers/usersContexts";

function Home() {
  const { table, privateTable } = useContext(TablesContext);
  const navigate = useNavigate();
  const { login, register } = ROUTES;
  const { logado, userData, setLogado } = useContext(UsersContext);
  console.log(userData);
  console.log(privateTable);

  function handleLogout() {
    setLogado(false);
    localStorage.removeItem("@HELLFIRE/userAccess");
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
              <Title>Bem vindo(a) {userData.username}!</Title>
            </section>
          ) : (
            <Title>A taverna</Title>
          )}

          <OptionsComponent>
            {logado ? (
              <div>
                <ButtonComponent>Criar mesa</ButtonComponent>
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
        <TextField
          sx={{ backgroundColor: "#D3CDC0" }}
          placeholder="Pesquisar mesa..."
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
            <ButtonComponent heigth={"52px"} width={"186px"}>
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
          {logado
            ? privateTable.map((item) => (
                <li key={item.id}>
                  <Mesas
                    tablename={
                      item.tablename ? item.tablename : "Mesa sem nome"
                    }
                    owner={item.owner ? item.owner : "Sem nome do mestre"}
                    system={item.system ? item.system : "NULL"}
                    image={item.image}
                    participants={
                      item.participants ? item.participants.length : "NaN"
                    }
                  />
                </li>
              ))
            : table.map((item) => (
                <li key={item.id}>
                  <Mesas
                    tablename={
                      item.tablename ? item.tablename : "Mesa sem nome"
                    }
                    owner={item.owner ? item.owner : "Sem nome do mestre"}
                    system={item.system ? item.system : "NULL"}
                    image={item.image}
                    participants={
                      item.participants ? item.participants.length : "NaN"
                    }
                  />
                </li>
              ))}
        </ul>
      </List>
    </div>
  );
}

export default Home;
