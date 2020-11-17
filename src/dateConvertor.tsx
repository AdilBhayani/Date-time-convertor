import React from "react";
import * as moment from "moment-timezone";
import Select, { OptionTypeBase } from "react-select";
import { useState } from "react";

export interface DateConvertorProps {
  borderRadius?: string;
  border?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
}

export const DateConvertor = (props: DateConvertorProps) => {
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

  const {
    borderRadius,
    border,
    width,
    height,
    backgroundColor,
    color,
    fontSize,
  } = props;
  const result = (
    <div
      style={{
        border,
        borderRadius,
        width,
        height,
        backgroundColor,
        color,
        padding: "15px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ fontSize }}>View the time in another timezone</h2>
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

DateConvertor.defaultProps = {
  borderRadius: "25px",
  border: "4px solid #37474F",
  width: "500px",
  height: "175px",
  backgroundColor: "#DEE4E7",
  color: "#900C3F",
  fontSize: "1em",
};

// https://stackoverflow.com/questions/61226729/pass-style-as-props-in-react-component
// https://blog.bitsrc.io/understanding-react-default-props-5c50401ed37d
