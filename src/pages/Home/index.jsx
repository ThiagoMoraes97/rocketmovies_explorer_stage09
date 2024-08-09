import { Container, Content } from "./style";
import { Header } from "../../Components/Header"
import { Button } from "../../Components/Button";
import { FiPlus } from "react-icons/fi";

export function Home () {
  return(
    <Container>
      <Header/>

      <Content>
        <header>
          <h1>Meus filmes</h1>
          <Button icon={FiPlus} title="Adicionar filme"/>
        </header>

        <main>

        </main>
      </Content>
    </Container>
  )
}