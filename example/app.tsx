import * as React from "react";
import DateConvertor, { Size } from "../src";
import {
  AppWrapper,
  OptionsSidebar,
  DateConvertorWrapper,
  GlobalStyles,
  FullWidthWrapper,
  ColumnsWrapper,
  StyledHr,
  CheckboxWrapper,
  TextFieldsWrapper,
} from "./styled";
import TextField from "@atlaskit/field-text";
import Checkbox from "@atlaskit/checkbox";
import { useState } from "react";
import GHCorner from "react-gh-corner";

export interface AppState {
  size: Size;
  color: string;
  toTimezone: string;
}
// Rounded or not rounded
// Text alignment

export type StatePropName = keyof AppState;

const App = () => {
  const [size, setSize] = useState("large" as Size);
  const [color, setColor] = useState("#900c3f");

  // Since I am using hooks, how would I generalise this function so that it could work for all state hooks?
  const onCheckboxChange = (_propName?: StatePropName) => {
    if (size === "large") {
      setSize("small");
    } else {
      setSize("large");
    }
  };

  const onTextFieldChange = (color: string | null) => {
    if (color) {
      setColor(color);
    }
  };

  return (
    <AppWrapper>
      <GHCorner
        href="https://github.com/AdilBhayani/Date-time-convertor"
        position="top-right"
        bgColor="red"
        size={250}
        ariaLabel="Date Convertor"
        openInNewTab={true}
      />
      <FullWidthWrapper>
        <h1>Date Convertor Example</h1>
        <StyledHr />
      </FullWidthWrapper>
      <ColumnsWrapper>
        <OptionsSidebar>
          <CheckboxWrapper>
            <Checkbox
              defaultChecked={true}
              label={"Enlarged"}
              onChange={() => onCheckboxChange()}
            />
          </CheckboxWrapper>
          <TextFieldsWrapper>
            {/* TOASK: How would I go about debouncing this? */}
            <TextField
              value={color}
              label="Color"
              onChange={(e) => {
                e.persist();
                console.log(e);
                onTextFieldChange((e.target as HTMLInputElement).value);
              }}
            />
          </TextFieldsWrapper>
        </OptionsSidebar>
        <DateConvertorWrapper>
          <DateConvertor size={size} color={color} />
        </DateConvertorWrapper>
      </ColumnsWrapper>
      <GlobalStyles />
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
