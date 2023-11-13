import { createGlobalStyle } from 'styled-components';
// import background from "./public/background.jpg";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');

  * {
    margin:0;
    padding:0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
  box-sizing: border-box;
  font-size: 62.5%;
    @media only screen and (max-width:56.25em){
        font-size: 50%;
    } 
    @media only screen and (max-width:37.5em){
        font-size: 43.75%;
    } 
  }
  
  body {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    color: #222;
    line-height: 1.6;
    background-color: white;
    min-height:100vh;
    width:100%;
  }
`;
export default GlobalStyles;
