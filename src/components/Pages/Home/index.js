import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Cards from "../../Cards";
import { Title, Header, TextArea, List } from "./style";

function Home() {
  return (
    <div>
      <Header>
        <section>
          <Title>A taverna</Title>
          <MoreHorizIcon />
        </section>
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
      </Header>
      <TextArea>
        <p>
          Bem vindo (a), aqui você pode gerenciar suas mesas de RPG sem
          complicações!
        </p>
        <hr width="222px"></hr>
        <p>
          Participe de uma mesa pública ou crie a sua e adicione seus amigos!
        </p>
      </TextArea>
      <List>
        <h2>Lista de mesas públicas</h2>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </List>
    </div>
  );
}

export default Home;
