import { Container, User } from "./style";
import { Input } from "../Input";
import { ButtonLink } from "../ButtonLink";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { api } from "../../resources/api";
import { useEffect, useState } from "react";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"


export function Header ({headerInput}) {

  const { user, signOut } = useAuth();

  const [ inputValue, setInputValue ] = useState("");
  

  const avatarUrlImage = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder;

  useEffect(() => {
    headerInput(inputValue);
  }, [inputValue])
  
  return(
    <Container>
      <h2 to={"/"}>RocketMovies</h2>

      <Input type="text" placeholder = "Pesquisar pelo título" onChange = {e => setInputValue(e.target.value)}/>

      <User>
        <div className="user_info">
          <span>{user.name}</span>
          <ButtonLink onClick={signOut} title="sair"/>
        </div>

        <Link to={"/profile"}>
        <img src={avatarUrlImage} alt={`Imagem de ${user.name}`} />
        </Link>
      </User>

    </Container>
  )
}