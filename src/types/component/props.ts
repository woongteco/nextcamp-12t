import { ComponentProps, ElementType, ReactNode } from "react";

export type TProps = {
  children: ReactNode;
};
export type TClassnameProps = { className: string }; //React.ComponentProps["className"];
export type TIconButtonProps = ComponentProps<"button"> & {
  variation: "icon";
  size?: number;
  colors?: {
    bg: string;
    text?: string;
  };
};
export type TButtonProps = ComponentProps<"button"> & {
  variation: "solid" | "outline" | "text";
  colors?: {
    bg: string;
    text?: string;
  };
  fullWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};
export type TLinkButtonProps = React.ComponentProps<"a"> & {
  colors?: TButtonProps["colors"];
  variation?: TButtonProps["variation"];
  href: string | object;
};
type TLabel<T> = ComponentProps<ElementType<T>> & {
  form?: boolean;
  required?: boolean;
};
export type TLabelProps = TLabel<"label">;
export type TLabelTextProps = TLabel<"p">;
export type TCaptionProps = ComponentProps<"p" | "span"> & {
  inline: boolean;
};
export type TMenuItemProps = {
  key: string;
  href: string;
  label: string;
  active?: boolean;
};
