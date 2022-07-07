import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Cards from "../../Cards";
import { Title, Header, TextArea, List } from "./style";
import { ButtonComponent } from "../../Button/style";

function Home() {
  return (
    <div>
      <Header>
        <Title>A taverna</Title>
        <h2>Descobrir</h2>
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
          <li>
            <Cards />
          </li>
          <li>
            <Cards />
          </li>
          <li>
            <Cards />
          </li>
          <li>
            <Cards />
          </li>
          <li>
            <Cards />
          </li>
          <li>
            <Cards />
          </li>
        </ul>
      </List>
    </div>
  );
}

export default Home;
