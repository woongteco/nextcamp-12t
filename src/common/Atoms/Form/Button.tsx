import { TButtonProps, TIconButtonProps } from "@/types/component/props";

export default function Button(props: TIconButtonProps | TButtonProps) {
  switch (props.variation) {
    case "icon": {
      const {
        variation,
        size = 40,
        colors = { bg: "bg-main-600" },
        children,
      } = props;
      const square = `w-[${size}px] h-[${size}px]`;
      return (
        <button
          className={`flex items-center justify-center rounded-lg ${square} ${colors.bg}/0 hover:${colors.bg}/15`}
        >
          {children}
        </button>
      );
    }
    default: {
      const {
        variation,
        colors = { bg: "bg-main-600", text: "text-white" },
        startIcon = null,
        endIcon = null,
        children,
        ...restProps
      } = props;
      const border = "border-" + colors.bg.split("bg-").at(0);
      const styles = {
        solid: `${colors.bg} ${colors.text} hover:${colors.bg}/75 hover:saturate-150`,
        outline: `border ${border} ${colors.bg}/0 ${colors.text} hover:${colors.bg}/15`,
        text: `${colors.text} hover:${colors.bg}/15`,
      };
      return (
        <button
          className={`flex flex-row gap-2 px-5 py-3 font-bold rounded-[10px] ${
            styles[variation]
          } ${restProps.fullWidth ? "w-full" : "w-fit"}`}
          {...restProps}
        >
          {startIcon || null}
          {children}
          {endIcon || null}
        </button>
      );
    }
  }
}
