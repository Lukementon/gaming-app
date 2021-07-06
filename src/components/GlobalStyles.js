import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    &::-webkit-scrollbar{
      width: 0.5rem;
    
    }
    &::-webkit-scrollbar-thumb{
      background: rgb(120,120,120);
    }
    &::-webkit-scrollbar-track {
    background: white;
  }
  }
 
  body{
    font-family: 'Lato', sans-serif;
    background: rgb(80,80,80);
 
    
  }
  h2{
    font-size: 3rem;
    font-family: 'Abril Fatface', cursive;
    font-weight: lighter;
  }
  h3{
    font-size: 1.3rem;  
    padding: 1.5rem 0rem;
  }
  p{
    font-size:1.2rem;
    line-height: 200%;
    
  }
  a{
    text-decoration: none;
    color: white;
  }
  img{
    display: block;
  }
  input{
    font-weight: bold;
    font-family: 'Lato', sans-serif;
  }
`;

export default GlobalStyles;
