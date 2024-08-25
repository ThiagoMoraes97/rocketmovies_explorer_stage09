import { Container, Form } from "./style";
import{ Header } from "../../Components/Header"
import{ ButtonLink } from "../../Components/ButtonLink"
import{ Button } from "../../Components/Button"
import{ Input } from "../../Components/Input"
import{ Mark } from "../../Components/Mark"
import{ Textarea } from "../../Components/Textarea"
import { FiArrowLeft } from "react-icons/fi";

export function Create () {
  return( 
    <Container>
      <Header/>

      <Form>

        <header>
          <ButtonLink title = "Voltar" icon = {FiArrowLeft}/>
          <h1>Novo filme</h1>
        </header>

        <main>
          <section className="movie_info">
            <Input placeholder = "Título"/>
            <Input placeholder = "Sua nota (de 0 a 5)"/>
          </section>

          <Textarea placeholder = "Observações"/>

          <h2>Marcadores</h2>

          <section className="tags">
            <Mark value = "React"/>
            <Mark isNew placeholder = "Novo marcador"/>
          </section>

          <section className="buttons">
            <Button title = "Excluir filme"/>
            <Button title = "Salvar alterações"/>
          </section>

        </main>
      </Form>
    </Container>
  )
}