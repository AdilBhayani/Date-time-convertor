import * as React from "react";
import * as moment from "moment-timezone";
import Select, { OptionTypeBase } from "react-select";
import { useState } from "react";

export interface DateConvertorProps {}

export const DateConvertor = (_props: DateConvertorProps) => {
  const thisTimeZone = moment.tz.guess();
  const [chosenTimeZone, setChosenTimezone] = useState(thisTimeZone);

  const timeZones = moment.tz.names();
  const formatedTimezones = timeZones.map((timeZone) => {
    return {
      label: timeZone,
      value: timeZone,
    };
  });
  const timeHere = moment.tz(new Date().getTime(), thisTimeZone).format("LLL");
  const timeThere = moment
    .tz(new Date().getTime(), chosenTimeZone)
    .format("LLL");

  const handleOnChange = (newTimezone: OptionTypeBase) => {
    setChosenTimezone(newTimezone ? newTimezone["value"] : thisTimeZone);
    console.log(chosenTimeZone);
  };

  const result = (
    <div className="roundedDiv">
      <h2>View the time in another timezone</h2>
      <Select
        options={formatedTimezones}
        onChange={(value) => handleOnChange(value as OptionTypeBase)}
        isClearable={true}
      ></Select>
      <p>
        {thisTimeZone} --{">"} {chosenTimeZone}
      </p>
      <p>
        {timeHere} --{">"} {timeThere}
      </p>
    </div>
  );

  return result;
};

// Prop ideas
// Curve radius
// Height/width
// Border color and thickness
// Font style
