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

  * {
    box-sizing: content-box;
  }
`;

export const AppWrapper = styled.div``;
