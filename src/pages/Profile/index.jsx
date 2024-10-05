import { Container, Form } from "./style";
import { FiArrowLeft, FiCamera, FiUser, FiLock, FiMail } from "react-icons/fi";
import { ButtonLink } from "../../Components/ButtonLink";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import {api} from "../../resources/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Profile () {

  const { user, updateProfile } = useAuth();
  
  const avatarUrlImage = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder;

  const [ name, setName ] = useState(user.name);
  const [ email, setEmail] = useState(user.email);
  const [ passwordOld, setPasswordOld] = useState("");
  const [ passwordNew, setPasswordNew ] = useState("");


  const [avatar, setAvatar] = useState(avatarUrlImage);
  const [ avatarFile, setAvatarFile ] = useState(null);

  function handleUpdateFile(event) {

    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);

  };

  async function handleUpdate(event) {

    event.preventDefault()

    const user = {
      name, 
      email,
      password: passwordNew, 
      old_password: passwordOld
    };

    await updateProfile(user, avatarFile);
  };

  return(
    <Container>

      <header>
        <ButtonLink to = {"/"} icon={FiArrowLeft} title="Voltar"/>
      </header>

      <Form>
        <div className="profile_picture">
          <img src= {avatar} alt="Imagem de usuário." />
          <label htmlFor="fileUpload">
            <FiCamera />
            <input type="file" id="fileUpload" onChange={handleUpdateFile} />
          </label> 
        </div>

        <Input icon={FiUser} placeholder = "Nome" type = "text" value = {name} onChange = {e => setName(e.target.value)}/>
        <Input icon={FiMail} placeholder = "E-mail" type = "email" value = {email} onChange = {e => setEmail(e.target.value)}/>
        <Input icon={FiLock} placeholder = "Senha atual" type = "password" onChange = {e => setPasswordOld(e.target.value)}/>
        <Input icon={FiLock} placeholder = "Nova senha" type = "password" onChange = {e => setPasswordNew(e.target.value)}/>

        <Button title= "Salvar" onClick = {handleUpdate}/>

      </Form>

    </Container>
  )
}