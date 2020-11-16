import * as React from "react";
import DateSelector from "../src";
import { AppWrapper, GlobalStyles } from "./styled";

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyles />
      <h1>Date Convertor Example</h1>
      <DateSelector></DateSelector>
    </AppWrapper>
  );
};

export default App;
