const moment = jest.requireActual("moment");
Date.now = () => new Date("2020-01-09T08:49:30Z").getTime();
module.exports = moment;

import DateConvertor from "../../../src";
import { mount } from "@cypress/react";

describe("<DateConvertor/>", () => {
  it("convert the time to Sydney time", async () => {
    mount(<DateConvertor />);
  });
});
