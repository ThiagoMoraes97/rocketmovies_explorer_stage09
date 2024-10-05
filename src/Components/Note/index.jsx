import { Container } from "./style";
import { Tags } from "../Tags";
import { Rating } from "../Rating";

export function Note ({title, tag, rating, description, onClick}) {
  return(
    <Container onClick = {onClick}>

      <header>
        <h1>{title}</h1>
        <Rating rating={rating}/>
      </header>

      <p>{description}</p>

      {tag.map( tags => <Tags key = {tags.id} title={tags.name}/>)}
    </Container>
  )
};