import { Container } from "./style";

export function ButtonLink ({title, ...rest}) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  )
};