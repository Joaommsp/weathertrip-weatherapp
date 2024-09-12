import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #FEFAF9;
    overflow-x: hidden;
  }
`;

export default globalStyles