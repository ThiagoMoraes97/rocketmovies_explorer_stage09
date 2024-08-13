import { Container } from "./style";

export function ButtonLink ({title, icon: Icon ,...rest}) {
  return (
    <Container {...rest }>
      {Icon && <Icon/>}
      {title}
    </Container>
  )
};