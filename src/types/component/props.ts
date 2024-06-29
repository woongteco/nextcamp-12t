import { ComponentProps, ReactNode } from "react";

export type TProps = {
  children: ReactNode;
};
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
export type TLabelProps = ComponentProps<"label"> & {
  required: boolean;
};
export type TCaptionProps = ComponentProps<"p" | "span"> & {
  inline: boolean;
};
export type TMenuItemProps = {
  key: string;
  href: string;
  label: string;
  active?: boolean;
};
