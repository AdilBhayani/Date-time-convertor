const moment = jest.requireActual("moment");
Date.now = () => new Date("2020-01-09T08:49:30Z").getTime();
module.exports = moment;

import { toMatchImageSnapshot } from "jest-image-snapshot";
expect.extend({ toMatchImageSnapshot });

import * as React from "react";
import { render } from "@testing-library/react";
import DateConvertor from "../src";
import { generateImage } from "jsdom-screenshot";

describe("<DateConvertor/>", () => {
  it("renders correctly without any props", async () => {
    render(<DateConvertor />);

    const screenshot = await generateImage();
    expect(screenshot).toMatchImageSnapshot();
  });

  it("renders correctly in small size", async () => {
    render(<DateConvertor size="small" />);

    const screenshot = await generateImage();
    expect(screenshot).toMatchImageSnapshot();
  });

  it("renders respect the color prop", async () => {
    render(<DateConvertor color="blue" />);

    const screenshot = await generateImage();
    expect(screenshot).toMatchImageSnapshot();
  });
});
