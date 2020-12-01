import * as React from "react";
import { shallow, configure } from "enzyme";
import DateConvertor, { DateConvertorProps } from "../src";

// What is the purpose of enzyme here. Does it just allow tests to work for various react versions?
// Yeah it configures enzyme. This is typically done using a file for enzyme setup. jest.config
import Adapter from "enzyme-adapter-react-16";
import {
  DateConvertorContainer,
  DateConvertorHeading,
  DateConvertorText,
  defaultColor,
  defaultSize,
} from "../src/styled";

configure({ adapter: new Adapter() });

describe("DateConvertor", () => {
  const setup = (props?: Partial<DateConvertorProps>) => {
    const dateConvertor = shallow(<DateConvertor {...props} />);

    return {
      dateConvertor,
    };
  };

  it("should have correct color by default", () => {
    const { dateConvertor } = setup();
    const containerDiv = dateConvertor.find(DateConvertorContainer);
    expect(containerDiv.prop("color")).toBe(defaultColor);
  });

  it("should have correct size by default", () => {
    const { dateConvertor } = setup();
    const containerDiv = dateConvertor.find(DateConvertorContainer);
    const heading = dateConvertor.find(DateConvertorHeading);
    const text = dateConvertor.find(DateConvertorText).first();
    expect(containerDiv.prop("size")).toBe(defaultSize);
    expect(heading.prop("size")).toBe(defaultSize);
    expect(text.prop("size")).toBe(defaultSize);
  });

  it("should use the given color", () => {
    const { dateConvertor } = setup({ color: "blue" });
    const containerDiv = dateConvertor.find(DateConvertorContainer);
    expect(containerDiv.prop("color")).toBe("blue");
  });

  it("should use the given size", () => {
    const { dateConvertor } = setup({ size: "small" });
    const containerDiv = dateConvertor.find(DateConvertorContainer);
    const heading = dateConvertor.find(DateConvertorHeading);
    const text = dateConvertor.find(DateConvertorText).first();
    expect(containerDiv.prop("size")).toBe("small");
    expect(heading.prop("size")).toBe("small");
    expect(text.prop("size")).toBe("small");
  });
});
