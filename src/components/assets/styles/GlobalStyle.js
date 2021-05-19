import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle `
@font-face {
    font-family:"Montserrat" ;
    src: url('../fonts/Montserrat-Regular.ttf') format('ttf');
    font-weight:normal;
    font-style:normal;
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  outline: none;
  border: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html{
    font-size:62.5%;
}

body {
    font-size:1.6rem;
    color:white;
    overflow-y: hidden;
}

`

export default GlobalStyle