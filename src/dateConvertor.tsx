import * as React from "react";
import { useState } from "react";
import { tz } from "moment-timezone";

import Select, { OptionTypeBase } from "react-select";
import { Size } from "./types";
import {
  customSelectStyles,
  DateConvertorContainer,
  DateConvertorHeading,
  DateConvertorText,
  defaultColor,
  defaultSize,
} from "./styled";

export interface DateConvertorProps {
  size: Size;
  initialTimeZone: string;
  color: string;
  toTimezone: string;
}

export interface DateConvertorOptionalProps {
  size?: Size;
  initialTimeZone?: string;
  color?: string;
  toTimezone?: string;
}

const defaultProps: DateConvertorOptionalProps = {
  size: defaultSize,
  color: defaultColor,
  toTimezone: "Pacific/Auckland",
};

export const DateConvertor = (
  optionalProps: DateConvertorOptionalProps = defaultProps
) => {
  // Asked: Using a deafult parameter doesn't work. Just gets an empty object instead
  const props = {
    ...defaultProps,
    ...optionalProps,
  } as DateConvertorProps;

  console.log(tz.guess);
  const thisTimeZone = tz.guess();
  console.log(thisTimeZone, "kasdhkdka");
  const [chosenTimeZone, setChosenTimezone] = useState(props.toTimezone);

  const timeZones = tz.names();
  const formatedTimezones = timeZones.map((timeZone) => {
    return {
      label: timeZone,
      value: timeZone,
    };
  });
  const timeHere = tz(new Date().getTime(), thisTimeZone).format("LLL");
  const timeThere = tz(new Date().getTime(), chosenTimeZone).format("LLL");

  const handleOnChange = (newTimezone: OptionTypeBase) => {
    setChosenTimezone(newTimezone ? newTimezone.value : thisTimeZone);
  };

  const result = (
    <DateConvertorContainer
      // TOASK: Why do I have to force the non null assertion here
      size={props.size}
      color={props.color}
    >
      <DateConvertorHeading size={props.size}>
        View the time in another timezone
      </DateConvertorHeading>
      <Select
        options={formatedTimezones}
        // TODO: Use memoization for the following
        // tslint:disable-next-line jsx-no-lambda
        onChange={(value) => handleOnChange(value as OptionTypeBase)}
        isClearable={true}
        styles={props.size === "small" ? customSelectStyles : {}}
        defaultValue={{
          label: props.toTimezone,
          value: defaultProps.toTimezone,
        }}
      />
      <DateConvertorText size={props.size}>
        {thisTimeZone} --{">"} {chosenTimeZone}
      </DateConvertorText>
      <DateConvertorText size={props.size}>
        {timeHere} --{">"} {timeThere}
      </DateConvertorText>
    </DateConvertorContainer>
  );

  return result;
};
