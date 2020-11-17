import * as React from "react";
import DateSelector from "../src";
import { AppWrapper, GlobalStyles } from "./styled";

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyles />
      <h1>Date Convertor Example</h1>
      <DateSelector
        color="blue"
        borderRadius="50px"
        border="4px solid #67474F"
      ></DateSelector>
    </AppWrapper>
  );
};

export default App;
