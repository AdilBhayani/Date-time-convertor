import styled from "styled-components";
import { Size } from "./types";

export interface DateConvertorHeading {
  size: Size;
}

export interface DateConvertorContainer {
  size: Size;
  color: string;
}

export interface DateConvertorText {
  size: Size;
}

export const DateConvertorHeading = styled.h2`
  font-size: ${({ size }: DateConvertorHeading) =>
    size === "large" ? "20px" : "15px"};
`;

export const DateConvertorContainer = styled.div`
  background-color: #dee4e7;
  border-radius: 25px;
  border: 4px solid #37474f;
  color: ${({ color }: DateConvertorContainer) => color};
  margin: 0 auto;
  padding: 15px;
  width: ${({size}: DateConvertorContainer) => size === "large" ? "500px" : "250px"};
`;

export const DateConvertorText = styled.p`
  font-size: ${({size}: DateConvertorText) => size === "large" ? "16px" : "12px"};
`;

export const customSelectStyles = {
  control: (provided: any) => ({
    ...provided,
    minHeight: "15px",
  }),

  valueContainer: (provided: any) => ({
    ...provided,
    height: "15px",
    padding: "0 6px",
  }),

  input: (provided: any) => ({
    ...provided,
    margin: "0px",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,
    height: "15px",
  }),
};

export const defaultColor = "#900c3f";
export const defaultSize = "large";