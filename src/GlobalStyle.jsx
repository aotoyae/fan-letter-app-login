import { createGlobalStyle } from "styled-components";
import background from "assets/background.jpg";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: url(${background});
    background-size: cover;
  }

  h1 {
    font-size: 30px;
    line-height: 50px;
  }

  p {
    line-height: 30px;
  }
`;

export default GlobalStyle;
