import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    }

    body, button, input {
        font-family: "Roboto Slab", sans-serif;
    }

    a , button {
        transition: filter 0.3s;
    }

    a:hover , button:hover{
        filter: brightness(0.8);
    }
`; 