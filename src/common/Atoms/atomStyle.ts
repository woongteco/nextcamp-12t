import { TButtonProps } from "@/types/component/props";
import { CSSObjectWithLabel } from "react-select";

export const getStyles = (
  colors: TButtonProps["colors"],
  variation: TButtonProps["variation"]
): string => {
  const c = colors || { bg: "bg-main-600", text: "text-white" };
  switch (variation) {
    case "solid":
      const solidHover = `hover:${c.bg}/75`;
      return `${c.bg} ${c.text} ${solidHover} hover:saturate-150`;
    case "outline":
      const border = "border-" + c.bg.split("bg-").at(1);
      const outlineHover = `hover:${c.bg}/15`;
      return `border ${border} bg-transparent ${c.text} ${outlineHover}`;
    case "text":
      return `${c.text} hover:${c.bg}/15`;
    default:
      return "";
  }
};

export const inputStyle =
  "px-[18px] py-[15px] rounded-ten border border-line-input hover:border-label-alt focus:outline-main-600 placeholder:text-label-assist placeholder:text-body-400";

export const selectCommonStyle = {
  singleValue: (styles: CSSObjectWithLabel): CSSObjectWithLabel => ({
    ...styles,
    fontWeight: "600",
  }),
  indicatorSeparator: (styles: CSSObjectWithLabel): CSSObjectWithLabel => ({
    ...styles,
    visibility: "hidden",
    opacity: 0,
  }),
  multiValue: (styles: CSSObjectWithLabel): CSSObjectWithLabel => ({
    ...styles,
    backgroundColor: "#D9E8FF",
    borderRadius: "14px",
    overflow: "hidden",
    ":hover": {
      backgroundColor: "#C7DEFF",
    },
  }),
  multiValueLabel: (styles: CSSObjectWithLabel): CSSObjectWithLabel => ({
    ...styles,
    paddingLeft: "12px",
    paddingRight: "4px",
    color: "#2A7FFE",
  }),
  multiValueRemove: (styles: CSSObjectWithLabel): CSSObjectWithLabel => ({
    ...styles,
    paddingRight: "6px",
    color: "#2A7FFE",
  }),
};
