import { Container, Form, Background } from "./style";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import theaterBackground from "../../assets/theater.png"
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";


export function SignUp () {
    return (
        <Container>
            
            <Form>
                <header>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                </header>

                <main>
                    <h2>Crie sua conta</h2>
                    <Input type="text" placeholder = "Nome" icon={FiUser}/>
                    <Input type="email" placeholder = "E-mail" icon={FiMail}/>
                    <Input type="password" placeholder = "Senha" icon={FiLock}/>
                    <Button title="Cadastrar"/>
                </main>

                <a href="#">
                    <FiArrowLeft/>
                    Voltar para o login
                </a>
            </Form>
            

            <Background>
                <img src={theaterBackground} alt="Imagem com as cadeiras de um teatro." />
            </Background>
        </Container>
    )
}