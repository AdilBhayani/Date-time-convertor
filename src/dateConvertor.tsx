import * as React from "react";
import { useState } from "react";
import * as moment from "moment-timezone";
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
  size?: Size;
  initialTimeZone?: string;
  color?: string;
}

const defaultProps: DateConvertorProps = {
  size: defaultSize,
  color: defaultColor,
};

export const DateConvertor = (props: DateConvertorProps) => {
  // Using a deafult parameter doesn't work. Just gets an empty object instead
  props = {
    ...defaultProps,
    ...props,
  };

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
    setChosenTimezone(newTimezone ? newTimezone.value : thisTimeZone);
  };

  const result = (
    <DateConvertorContainer
      // Why do I have to force the non null assertion here
      size={props.size!}
      color={props.color!}
    >
      <DateConvertorHeading size={props.size!}>
        View the time in another timezone
      </DateConvertorHeading>
      <Select
        options={formatedTimezones}
        // TODO: Use memoization for the following
        // tslint:disable-next-line jsx-no-lambda
        onChange={(value) => handleOnChange(value as OptionTypeBase)}
        isClearable={true}
        styles={props.size === "small" ? customSelectStyles : {}}
      />
      <DateConvertorText size={props.size!}>
        {thisTimeZone} --{">"} {chosenTimeZone}
      </DateConvertorText>
      <DateConvertorText size={props.size!}>
        {timeHere} --{">"} {timeThere}
      </DateConvertorText>
    </DateConvertorContainer>
  );

  return result;
};
