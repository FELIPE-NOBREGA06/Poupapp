import { Asside } from "./components/Aside";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { SearchInput } from "./SearchInput";
import { Typography } from "./components/Typorgraph/inde";

function App() {
  return (
    <Container>
      <Asside />
      <Main>
        <SearchInput />
        <div>
          <Typography variant="h1">Olá, João!</Typography>
          <Typography variant="body">
            Veja como estão suas finanças hoje.
          </Typography>
        </div>
      </Main>
    </Container>
  );
}

export default App;
