import { Container, Form } from "./style";
import{ Header } from "../../Components/Header"
import{ ButtonLink } from "../../Components/ButtonLink"
import{ Button } from "../../Components/Button"
import{ Input } from "../../Components/Input"
import{ Mark } from "../../Components/Mark"
import{ Textarea } from "../../Components/Textarea"
import { FiArrowLeft } from "react-icons/fi";
import { useEffect, useState } from "react";
import { api } from "../../resources/api";

export function Create () {
  const [ title, setTitle] = useState("");
  const [rating, setRating ] = useState("");
  const [ description, setDescription ] = useState("");

  const [ tags, setTags ] = useState([]);
  const [ newTag, setNewTag] = useState("");

  function handleAddNewTag () {
    setTags( prevState => [...prevState, newTag] );
    setNewTag("");
  };

  function handleRemoveTag (deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  };

  async function handleAddMoviesNotes() {

    if(!title) {
      return alert("Deve ser adicionado um título!")
    };

    if(!rating) {
      return alert("Deve ser adicionado uma nota do filme!")
    };

    if(!description) {
      return alert("Deve ser adicionado uma observação!")
    };

    if(newTag !== ""){
      return alert("Para concluir a adição da TAG, deve clicar no botão de adicionar!")
    };
  
    try {
      await api.post("/notes", {
        title,
        description,
        rating,
        tags
      });

      alert("Nota adicionada com sucesso!");

    } catch (error) {

      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possível adicionar a nota!")
      }
  
    }
  }


  return( 
    <Container>
      <Header/>

      <Form>

        <header>
          <ButtonLink to = {"/"} title = "Voltar" icon = {FiArrowLeft}/>
          <h1>Novo filme</h1>
        </header>

        <main>
          <section className="movie_info">
            <Input placeholder = "Título" onChange = {e => setTitle(e.target.value)}/>
            <Input placeholder = "Sua nota (de 0 a 5)" onChange = {e => setRating(e.target.value)}/>
          </section>

          <Textarea placeholder = "Observações" onChange = {e => setDescription(e.target.value)}/>

          <h2>Marcadores</h2>

          <section className="tags">
            {
              tags.map((tag, index) =>(
                <Mark 
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              )
            )
            }
            <Mark 
              isNew 
              placeholder = "Novo marcador"
              value={newTag}
              onChange = { e => setNewTag(e.target.value)}
              onClick={handleAddNewTag}
            />
          </section>

          <section className="buttons">
            <Button title = "Excluir filme"/>
            <Button title = "Salvar alterações" onClick = {handleAddMoviesNotes}/>
          </section>

        </main>
      </Form>
    </Container>
  )
}