import { Aside } from "./components/Aside";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { SearchInput } from "./SearchInput";
import { Typography } from "./components/Typorgraph/index";
import Card from "./components/Card";
import { DailyBudget } from "./components/DailyBudget";

function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <SearchInput />
        <div>
          <Typography variant="h1">Olá, João!</Typography>
          <Typography variant="body">
            Veja como estão suas finanças hoje.
          </Typography>
        </div>
        <section>
          <Card>
            <Card.Header>Orçamento diário disponível</Card.Header>
            <Card.Body>
              <DailyBudget value={250} />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>Progresso da meta financeira</Card.Header>
            <Card.Body>R$ 200</Card.Body>
          </Card>
          <Card>
            <Card.Header>Orçamento diário disponível</Card.Header>
            <Card.Body>R$ 2OO</Card.Body>
          </Card>
          <Card>
            <Card.Header>Orçamento diário disponível</Card.Header>
            <Card.Body>R$ 2OO</Card.Body>
          </Card>
        </section>
      </Main>
    </Container>
  );
}

export default App;
