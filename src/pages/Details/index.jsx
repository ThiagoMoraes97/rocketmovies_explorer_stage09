import { Container, Main } from "./style";
import { Header } from "../../Components/Header";
import { Tags } from "../../Components/Tags";
import { ButtonLink } from "../../Components/ButtonLink";
import { Rating } from "../../Components/Rating";
import { FiArrowLeft, FiClock  } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../resources/api";
import { useParams, useNavigate } from "react-router-dom";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"


export function Details() {

  const { user } = useAuth();
  const { id } = useParams();

  const navigate = useNavigate();

  const avatarUrlImage = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder;

  const [ title, setTitle ] = useState("");
  const [ rating, setRating ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ updatedAt, setUpdatedAt ] = useState("");
  const [ tags, setTags ] = useState([]);

  function handleNavigateBack() {
    navigate(-1)
  };

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/${id}`);
      const noteDetails = response.data
      
      setTitle(noteDetails.title);
      setRating(noteDetails.rating);
      setDescription(noteDetails.description);
      setTitle(noteDetails.title);
      setUpdatedAt(noteDetails.updated_at);
      setTags(noteDetails.tags);
    };

    fetchNotes();
  }, [])

  return(
    <Container>

      <Header/>

      <main>
        <Main>

          <ButtonLink title = "Voltar" icon = {FiArrowLeft} onClick = {handleNavigateBack}/>

          <div className="movie_info">
            <h1>{title}</h1>
            <Rating rating = {rating}/>
          </div>

          <div className="note_info">
            <div className="user_info">
            <img src={avatarUrlImage} alt = {`Imagem de ${user.name}`} />
              <p>Por <span>{user.name}</span></p>
            </div>

            <div className="time_info">
              <FiClock/>
              <p>{updatedAt}</p>
            </div>

          </div>

          {
            tags && (
              <div className="movie_tags">
               {
                tags.map( tag => (
                  <Tags title={tag.name} key={tag.id}/>
                ))
               }
              </div>
            )
          }

          <p>{description}</p>
        </Main>
      </main>

    </Container>
  )
};