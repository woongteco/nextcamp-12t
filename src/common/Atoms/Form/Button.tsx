import { cn } from "@/utils/cn";
import { ComponentProps, ReactNode } from "react";
import { ButtonVariants } from "../atomStyle";

export type TButtonProps = ComponentProps<"button"> & {
  variation?: "solid" | "outline" | "text";
  color?: "default" | "main" | "sub" | "danger" | "assist";
  size?: "fit" | "full" | "form";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

function Button(props: TButtonProps) {
  const {
    variation = "solid",
    color = "main",
    className,
    startIcon = null,
    endIcon = null,
    size = "fit",
    children,
    ...restProps
  } = props;
  return (
    <button
      className={cn(
        ButtonVariants({ variant: `${variation}.${color}`, size }),
        className
      )}
      {...restProps}
    >
      {startIcon || null}
      {children}
      {endIcon || null}
    </button>
  );
}

export type TIconButtonProps = ComponentProps<"button"> & {
  size?: number;
};

function Icon(props: TIconButtonProps) {
  const { className, size = 40, children, ...restProps } = props;
  // const color = `${colors.bg}/0 hover:${colors.bg}/15`;
  const square = `w-[${size}px] h-[${size}px]`;
  return (
    <button
      className={cn(
        className,
        "flex items-center justify-center rounded-lg",
        // color,
        square,
        "disabled:border-label-assist disabled:text-label-assist disabled:cursor-not-allowed disabled:opacity-35"
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Object.assign(Button, {
  Icon,
});
