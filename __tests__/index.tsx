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
// import timezone_mock from 'timezone-mock';

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

  // Timezone is conifgured as UTC when running this test
  // TOASK: How do I configure my own jest file since the jest config is within ts-toolbox itself?
  it("should guess the current timezone to be Africa/Abidjan", () => {
    const { dateConvertor } = setup();
    // console.log(dateConvertor.debug());
    const dateConvertorText = dateConvertor.find(DateConvertorText).first();
    expect(dateConvertorText.html()).toContain("Africa/Abidjan");
  });

  // TOASK: The test below is a superset of the test above. What should I do in this situation?
  it("should start with a default toTimezone of Pacific/Auckland", () => {
    const { dateConvertor } = setup();
    const dateConvertorText = dateConvertor.find(DateConvertorText).first();
    expect(dateConvertorText.html()).toContain(
      "Africa/Abidjan --&gt; Pacific/Auckland"
    );
  });

  it("should use the given toTimezone", () => {
    const { dateConvertor } = setup({ toTimezone: "Australia/Adelaide" });
    const dateConvertorText = dateConvertor.find(DateConvertorText).first();
    expect(dateConvertorText.html()).toContain(
      "Africa/Abidjan --&gt; Australia/Adelaid"
    );
  });

  // TOASK: How would I test functionality such as choosing a timezone and seeing the values update? Integration test or similar?
});
