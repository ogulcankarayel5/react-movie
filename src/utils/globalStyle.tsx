import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
@font-face {
  font-family:'MontserratBlack';
  src: url('../assets/fonts/Montserrat-Black.ttf') format('truetype');
  font-style: normal; 
}

 *,
 *::before,
 *::after {
   box-sizing: inherit;
}
* {
    font-family: 'MontserratBlack';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;
    margin:0;
    padding:0;

   }

  html {
    font-size: 16px;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.primary};
    height: 100%;
  }
`
