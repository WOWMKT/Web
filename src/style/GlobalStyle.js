import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

${reset}

  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
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
        vertical-align: baseline;

    }
    html,
    body,
    #root {
        width: 100vw;
        height: 100vh;
        font-family: 'Pretendard', sans-serif; /* Pretendard 폰트를 사용할 요소 선택 */
        font-size: 62.5%;  // 1rem을 10px로 설정        
        background-color: white;
    }
    * {
    font-weight: 400;
    box-sizing: border-box;
    }

    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    input:focus {
    outline: none;
  }

body {
  font-family: 'Pretendard', sans-serif; 
  width: 100vw;
}
`;

export default GlobalStyle;