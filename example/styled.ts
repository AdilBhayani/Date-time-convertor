import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Helvetica;
    background-color: #BDC8E1;
    text-align: center;
  }

  h1 {
    font-size: 1.5em;
    color: #900C3F;
  }

  // Could potentially move this into component
  h2 {
    font-size: 1em;
  }

  // Could potentially move this into component
  .roundedDiv {
    border-radius: 25px;
    border: 4px solid #37474F;
    padding: 15px;
    width: 500px;
    height: 150px;
    margin:0 auto;
    background-color: #DEE4E7;
    color: #900C3F;
  }

  * {
    box-sizing: content-box;
  }
`;

export const AppWrapper = styled.div``;
