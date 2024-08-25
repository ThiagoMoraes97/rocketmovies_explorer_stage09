import { Container, Content } from "./style";
import { Header } from "../../Components/Header"
import { Button } from "../../Components/Button";
import { Note } from "../../Components/Note";
import { FiPlus } from "react-icons/fi";

export function Home () {
  return(
    <Container>
      <Header/>

      <Content>
        <header>
          <h1>Meus filmes</h1>
          <Button icon={FiPlus} title="Adicionar filme" link = "/create"/>
        </header>

        <main>
          <Note rating={4} tag = {[{id: 1, name: "Ficção Científica"}, {id: 2, name: "Drama"}, {id: 3, name: "Família"} ]}/>
          <Note rating={2} tag = {[{id: 1, name: "Ficção Científica"}, {id: 2, name: "Drama"}, {id: 3, name: "Família"} ]}/>
          <Note rating={3} tag = {[{id: 1, name: "Ficção Científica"}, {id: 2, name: "Drama"}, {id: 3, name: "Família"} ]}/>
        </main>
      </Content>
    </Container>
  )
}