import * as React from "react";
import { shallow, configure } from "enzyme";
import DateConvertor, { DateConvertorProps } from "../src";

// What is the purpose of enzyme here. Does it just allow tests to work for various react versions?
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("DateConvertor", () => {
  const setup = (props?: Partial<DateConvertorProps>) => {
    const initialOptions = {
      color: "blue",
    };

    // Do we make a shallow copy so we want see what changes?
    const dateConvertor = shallow(
      <DateConvertor {...initialOptions} {...props} />
    );

    return {
      dateConvertor,
    };
  };

  it("should have blue colored text", () => {
    const { dateConvertor } = setup();
    const containerDiv = dateConvertor.find("div").first();
    expect(containerDiv.prop("style")?.color).toBe("blue");
  });
});
