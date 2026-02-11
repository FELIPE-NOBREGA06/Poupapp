import { Asside } from "./components/Aside";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { SearchInput } from "./SearchInput";

function App() {
  return (
    <Container>
      <Asside />
      <Main>
        <SearchInput />
      </Main>
    </Container>
  );
}

export default App;
