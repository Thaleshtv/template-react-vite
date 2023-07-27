import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
      --background: #FAFAFA;
      --shape: #ffff;
      --black: #2D3740;
      --green: #0ACF97;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
  }

  html {
      @media (max-width: 1080px) {
          font-size: 93.75%;
      }
      @media (max-width: 720px) {
          font-size: 87.5%;
      }
  }


  body {
      background-color: var(--background);
      --webkit-font-smoothing: antialiased;
  }

  button {
      cursor: pointer;
  }

  h1,h2,h3,h4,h5,p {
      margin: 0;
      padding: 0;
  }

::-webkit-scrollbar {
  width: 8px;

::-webkit-scrollbar-thumb {
  background-color: #999;
  border-radius: 4px; 
}

::-webkit-scrollbar-track {
  background-color: #f0f0f0; 
}
`
