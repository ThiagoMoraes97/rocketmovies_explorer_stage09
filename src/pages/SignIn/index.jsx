import { Container, Form, Background } from "./style";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import theaterBackground from "../../assets/theater.png"
import { FiMail, FiLock  } from "react-icons/fi";


export function SignIn () {
    return (
        <Container>
            
            <Form>
                <header>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                </header>

                <main>
                    <h2>Faça seu login</h2>
                    <Input type="text" placeholder = "E-mail" icon={FiMail}/>
                    <Input type="password" placeholder = "Senha" icon={FiLock}/>
                    <Button title="Entrar"/>
                </main>

                <a href="#">Criar conta</a>
            </Form>
            

            <Background>
                <img src={theaterBackground} alt="Imagem com as cadeiras de um teatro." />
            </Background>
        </Container>
    )
}