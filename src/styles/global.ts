import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.white};
        color: ${(props) => props.theme.primary};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    button{
        cursor: pointer;
    }
    `;
