import { TLinkButtonProps } from "@/types/component/props";
import clsx from "clsx";
import Link from "next/link";
import { getStyles } from "./atomStyle";

export default function LinkButton(props: TLinkButtonProps) {
  const {
    colors = { bg: "bg-main-600", text: "text-white" },
    variation = "solid",
    className,
    children,
    ...restProps
  } = props;
  return (
    <Link
      className={clsx(
        "flex flex-row items-center justify-center gap-2 px-5 py-3 font-bold rounded-ten",
        [variation === "text" && "hover:underline"],
        className,
        getStyles(colors, variation)
      )}
      {...restProps}
    >
      {children}
    </Link>
  );
}
