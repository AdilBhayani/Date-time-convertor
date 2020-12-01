import * as React from "react";
import DateSelector from "../src";
import { AppWrapper, GlobalStyles } from "./styled";

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyles />
      <h1>Date Convertor Example</h1>
      <DateSelector size="small" toTimezone="Australia/Adelaide" />
    </AppWrapper>
  );
};

export default App;

// Why do I need to have last two dependencies in package.json. Just used in dev.
// This needs to be configured see confluence page.
// Have tried to setup tslint rules but doesn't seem to be working.
// Mess around with this to get it working.
// Can't run `yarn build`. Fails wit "esModuleInterop": true error. But tsconfig.json has the flag
// Just needed to import things in a different way. Read into ES module interloop and react pragma.
