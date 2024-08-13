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
          <Button icon={FiPlus} title="Adicionar filme"/>
        </header>

        <main>
          <Note oneStar twoStar threeStar tag = {[{id: 1, name: "Ficção Científica"}, {id: 2, name: "Drama"}, {id: 3, name: "Família"} ]}/>
          <Note oneStar twoStar tag = {[{id: 1, name: "Ficção Científica"}, {id: 2, name: "Drama"}, {id: 3, name: "Família"} ]}/>
          <Note oneStar tag = {[{id: 1, name: "Ficção Científica"}, {id: 2, name: "Drama"}, {id: 3, name: "Família"} ]}/>
        </main>
      </Content>
    </Container>
  )
}