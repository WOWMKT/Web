import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        vertical-align: baseline;
    }
    body{
        line-height: 1;
        font-family: 'Noto Sans KR', sans-serif;
        background-color: #ffffff;
        margin-bottom: 100px;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }

    html {
        font-size: 10px; /* Default font size */
        
        /* Media query for tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
            font-size: 8px;
        }

        /* Media query for mobile */
        @media (min-width: 450px) and (max-width: 768px) {
            font-size: 6px;
        }
        @media (max-width: 450px) {
            font-size: 4px;
        }
    }
`;

export default GlobalStyle;
