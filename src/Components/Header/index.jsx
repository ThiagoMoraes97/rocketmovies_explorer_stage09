import { Container, User } from "./style";
import { Input } from "../Input"
import { ButtonLink } from "../ButtonLink"

export function Header () { 
    return(
      <Container>
        <h2>RocketMovies</h2>

        <Input type="text" placeholder = "Pesquisar pelo título"/>

        <User>
          <div className="user_info">
            <span>Thiago Moraes</span>
            <ButtonLink title="sair"/>
          </div>

          <img src="https://github.com/ThiagoMoraes97.png" alt="Imagem de usuário." />
        </User>

      </Container>
    )
}