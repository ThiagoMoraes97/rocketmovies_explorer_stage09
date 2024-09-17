import { Container, Form, Background } from "./style";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import theaterBackground from "../../assets/theater.png"
import { FiMail, FiLock  } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn () {

    const [ email, setEmail ] = useState(""); 
    const [ password, setPassword ] = useState(""); 

    const {signIn} = useAuth();

    function handleSignIn(event){
        event.preventDefault()
        signIn({email, password});
    };
  
    return (
        <Container>
            
            <Form>
                <header>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                </header>

                <main>
                    <h2>Faça seu login</h2>
                    <Input type="text" placeholder = "E-mail" icon={FiMail} onChange = {e => setEmail(e.target.value)}/>
                    <Input type="password" placeholder = "Senha" icon={FiLock} onChange = {e => setPassword(e.target.value)}/>
                    <Button title="Entrar" onClick = {handleSignIn}/>
                </main>

                <Link to="/register">Criar conta</Link>
            </Form>
            

            <Background>
                <img src={theaterBackground} alt="Imagem com as cadeiras de um teatro." />
            </Background>
        </Container>
    )
}