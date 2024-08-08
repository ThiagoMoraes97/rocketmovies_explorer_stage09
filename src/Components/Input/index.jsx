import { Container } from "./style";

export function Input ({icon: Icon ,...rest}) {
    return ( 
        <Container>
            {Icon && <Icon className = "icon"/>}
            <input {...rest} />
        </Container>
    )
};