import { Container, Form, Background } from "./style";
import { useState } from "react";
import { api } from "../../resources/api";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import theaterBackground from "../../assets/theater.png"
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";



export function SignUp () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navegate = useNavigate();

    function handleSignUp(event){
        event.preventDefault()
        
        if(!name || !email || !password){
            return alert("Todos os campos devem ser preenchidos!")
        };

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário(a) cadastrado(a) com sucesso!");
            navegate("/");
        })
        .catch( error => {
            console.log(error.response)
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível cadastrar usuário(a)!")
            }
        });
    };

    return (
        <Container>
            
            <Form>
                <header>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                </header>

                <main>
                    <h2>Crie sua conta</h2>
                    <Input type="text" placeholder = "Nome" icon={FiUser} onChange = {e => setName(e.target.value)}/>
                    <Input type="email" placeholder = "E-mail" icon={FiMail} onChange = {e => setEmail(e.target.value)}/>
                    <Input type="password" placeholder = "Senha" icon={FiLock} onChange = {e => setPassword(e.target.value)}/>
                    <Button title="Cadastrar" onClick = {handleSignUp}/>
                </main>

                <Link to = "/">
                    <FiArrowLeft/>
                    Voltar para o login
                </Link>
            </Form>
            

            <Background>
                <img src={theaterBackground} alt="Imagem com as cadeiras de um teatro." />
            </Background>
        </Container>
    )
}