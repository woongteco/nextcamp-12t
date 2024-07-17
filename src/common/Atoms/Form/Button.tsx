import { TButtonProps, TIconButtonProps } from "@/types/component/props";
import { getStyles } from "../atomStyle";
import clsx from "clsx";

export default function Button(props: TIconButtonProps | TButtonProps) {
  switch (props.variation) {
    case "icon": {
      const {
        variation,
        className,
        size = 40,
        colors = { bg: "bg-main-600" },
        children,
        ...restProps
      } = props;
      const square = `w-[${size}px] h-[${size}px]`;
      return (
        <button
          className={clsx(
            className,
            "flex items-center justify-center rounded-lg",
            `${colors.bg}/0 hover:${colors.bg}/15`,
            square,
            "disabled:border-label-assist disabled:text-label-assist disabled:cursor-not-allowed disabled:opacity-35"
          )}
          {...restProps}
        >
          {children}
        </button>
      );
    }
    default: {
      const {
        variation,
        className,
        colors = { bg: "bg-main-600", text: "text-white" },
        startIcon = null,
        endIcon = null,
        fullWidth = false,
        children,
        ...restProps
      } = props;
      return (
        <button
          className={clsx(
            "flex flex-row items-center justify-center gap-2 px-5 py-3 font-bold text-nowrap text-ellipsis overflow-hidden rounded-ten",
            [getStyles(colors, variation), "w-full" && fullWidth, className],
            "disabled:border-label-assist disabled:text-label-assist disabled:cursor-not-allowed disabled:opacity-35"
          )}
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
