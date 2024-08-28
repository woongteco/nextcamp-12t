import { TLinkButtonProps } from "@/types/component/props";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { LinkButtonVariants } from "./atomStyle";

export default function LinkButton(props: TLinkButtonProps) {
  const {
    variation = "solid",
    color = "main",
    size = "fit",
    className,
    children,
    ...restProps
  } = props;
  return (
    <Link
      className={cn(
        LinkButtonVariants({ variant: `${variation}.${color}`, size }),
        className
      )}
      {...restProps}
    >
      {children}
    </Link>
  );
}
