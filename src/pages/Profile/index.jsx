import { Container, Form } from "./style";
import { FiArrowLeft, FiCamera, FiUser, FiLock, FiMail } from "react-icons/fi";
import { ButtonLink } from "../../Components/ButtonLink";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";

export function Profile () {
  return(
    <Container>

      <header>
        <ButtonLink icon={FiArrowLeft} title="Voltar"/>
      </header>

      <Form>
        <div className="profile_picture">
          <img src="https://github.com/ThiagoMoraes97.png" alt="Imagem de usuário." />
          <label htmlFor="fileUpload">
            <FiCamera />
            <input type="file" id="fileUpload" />
          </label> 
        </div>

        <Input icon={FiUser} placeholder = "Nome" type = "text"/>
        <Input icon={FiMail} placeholder = "E-mail" type = "email"/>
        <Input icon={FiLock} placeholder = "Senha atual" type = "password"/>
        <Input icon={FiLock} placeholder = "Nova senha" type = "password"/>

        <Button title= "Salvar"/>

      </Form>

    </Container>
  )
}