import { Container } from "./style";
import { FiPlus, FiX  } from "react-icons/fi";

export function Mark({isNew = false, onClick, value, ...rest}) {
  return(
    <Container isNew = {isNew}>

      <input value = {value} type="text" readOnly = {!isNew} {...rest} />

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus/> : <FiX/>}
      </button>

    </Container>
  )
};