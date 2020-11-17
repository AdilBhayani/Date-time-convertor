import * as React from "react";
import { shallow, configure } from "enzyme";
import DateConvertor, { DateConvertorProps } from "../src";

const Adapter = require("enzyme-adapter-react-16");

configure({ adapter: new Adapter() });

describe("DateConvertor", () => {
  const setup = (props?: Partial<DateConvertorProps>) => {
    const initialOptions = {
      color: "blue",
    };

    const dateConvertor = shallow(
      <DateConvertor {...initialOptions} {...props} />
    );

    return {
      dateConvertor,
    };
  };

  it("should be magic", () => {
    const { dateConvertor } = setup();
    const containerDiv = dateConvertor.find("div").first();
    expect(containerDiv.prop("style").color).toBe("blue");
  });
});
