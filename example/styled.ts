import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Helvetica;
    background-color: #BDC8E1;
  }

  h1 {
    font-size: 1.5em;
    color: #900C3F;
  }
`;

// https://medium.com/javascript-in-plain-english/power-and-beauty-of-flexbox-layout-in-react-native-7f80feff64f4
export const DateConvertorWrapper = styled.div`
  flex: 8;
  padding: 5em;
`;

export const FullWidthWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 3em;
`;

export const OptionsSidebar = styled.div`
  flex: 2;
  padding: 3em;
  border-right: 1px solid #e2e2e2;
  overflow: auto;
  align-items: center;
  justify-content: center;
`;

export const TextFieldsWrapper = styled.div`
  justify-content: space-around;
  flex-direction: column;
`;

export const CheckboxWrapper = styled.div`
  padding-top: 5px;
`

export const ColumnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const AppWrapper = styled.div`
  max-height: 80vh;
  max-width: 90vw;
  box-shadow: 1px 5px 5px 1px rgba(0, 0, 0, 0.3);
  background: white;
  position: absolute;
  overflow: hidden;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledHr = styled.hr`
  border-top: 3px solid #bbb;
  border-radius: 3px;
  width: 80%;
`;
