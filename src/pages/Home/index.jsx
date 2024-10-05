import { Container, Content } from "./style";
import { Header } from "../../Components/Header"
import { Button } from "../../Components/Button";
import { Note } from "../../Components/Note";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../resources/api";

export function Home () {

  const [ notes, setNotes ] = useState([]);
  const [ search, setSearch ] = useState("");

  const navigate = useNavigate();

  function headerInputChanger (data) {
    setSearch(data)
  };

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    };

    fetchNotes();
  }, [search])

  return(
    <Container>
      <Header headerInput = {headerInputChanger}/>

      <Content>
        <header>
          <h1>Meus filmes</h1>

          <Button 
            icon={FiPlus} 
            title="Adicionar filme" 
            onClick = {() => {navigate("/create")}}
          />

        </header>

        {
          notes && (
            <main>
              {
                notes.map( note => (
                  <Note key={note.id} rating={note.rating} title = {note.title} tag = {note.tags} description={note.description} onClick = {() => {navigate(`/details/${note.id}`)}}/>
                ))
              }
          </main>
          )
        }
      </Content>
    </Container>
  )
}