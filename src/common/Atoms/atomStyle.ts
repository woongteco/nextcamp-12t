import { TButtonProps } from "@/types/component/props";

export const getStyles = (
  colors: TButtonProps["colors"],
  variation: TButtonProps["variation"]
): string => {
  const c = colors || { bg: "bg-main-600", text: "text-white" };
  switch (variation) {
    case "solid":
      const solidHover = c.bg + "/75";
      return `${c.bg} ${c.text} hover:${solidHover} hover:saturate-150`;
    case "outline":
      const border = "border-" + c.bg.split("bg-").at(0);
      const outlineHover = c.bg + "/15";
      return `border ${border} bg-transparent ${c.text} hover:${outlineHover}`;
    case "text":
      return `${c.text} hover:${c.bg}/15`;
    default:
      return "";
  }
};

export const inputStyle =
  "px-[18px] py-[15px] rounded-ten border border-line-input hover:border-label-alt focus:outline-main-600 placeholder:text-label-assist placeholder:text-body-400";
