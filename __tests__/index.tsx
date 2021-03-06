import * as React from "react";
import { shallow } from "enzyme";
import DateConvertor, { DateConvertorProps } from "../src";

// What is the purpose of enzyme here. Does it just allow tests to work for various react versions?
// Yeah it configures enzyme. This is typically done using a file for enzyme setup. jest.config

import {
  DateConvertorContainer,
  DateConvertorHeading,
  DateConvertorText,
  defaultColor,
  defaultSize,
} from "../src/styled";

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

  // Timezone is conifgured as UTC when running this test. I can mock the moment.js libary. This code runs in node and not the browser. JS DOM, a library which mimics the DOM and all it's API/functionality.
  //
  // Asked: How do I configure my own jest file since the jest config is within ts-toolbox itself? That is always the problem for these kind of libaries but it is a tradeoff between ease and customisability.
  it("should guess the current timezone to be Africa/Abidjan", () => {
    const { dateConvertor } = setup();
    // console.log(dateConvertor.debug());
    const dateConvertorText = dateConvertor.find(DateConvertorText).first();
    expect(dateConvertorText.html()).toContain("Africa/Abidjan");
  });

  // Asked: The test below is a superset of the test above. What should I do in this situation? This is probably fine. When it gets really verbose and repeatitive. This is okay for tests but not for prod code.
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

  // Asked: How would I test functionality such as choosing a timezone and seeing the values update? Integration test or similar? This will be covered in unit. You almost always also want to have integration tests. It is okay to have like 
  // one or two integration tests. This is always a plus. For this we would recommend using a cypress tests. Puppetter is another option, which runs in the browser and does some actions for you. Do a bit of research and get familar with 
  // the options available. On top of puppetter we can also add VR tests. Snapshot testing with cypress. `yarn add cypress -D`
});
