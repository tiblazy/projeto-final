import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Mesas from "../../Mesas";
import { Title, Header, TextArea, List } from "./style";
import { ButtonComponent } from "../../Button/style";
import { useContext } from "react";
import { TablesContext } from "../../../providers/tablesContexts";
import OptionsComponent from "../../Options";

function Home() {
  const { table } = useContext(TablesContext);
  console.log(table);
  return (
    <div>
      <Header>
        <nav>
          <Title>A taverna</Title>
          <OptionsComponent>
            <ButtonComponent>Cadastro</ButtonComponent>
            <ButtonComponent>Login</ButtonComponent>
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
        <section>
          <ButtonComponent heigth={"52px"} width={"186px"}>
            Cadastro
          </ButtonComponent>
          <ButtonComponent heigth={"52px"} width={"144px"}>
            Login
          </ButtonComponent>
        </section>
      </Header>
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
      <List>
        <h2>Lista de mesas públicas</h2>
        <ul>
          {table.map((item) => (
            <li key={item.id}>
              <Mesas
                tablename={item.tablename ? item.tablename : "Mesa sem nome"}
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
