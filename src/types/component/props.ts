import { ComponentProps, ReactNode } from "react";

export type TButtonProps = ComponentProps<"button"> & {
  variation?: "solid" | "outline" | "icon";
  color?: string;
  fullWidth?: boolean;
};
export type TLabelProps = ComponentProps<"label"> & {
  required: boolean;
};
export type TCaptionProps = ComponentProps<"p" | "span"> & {
  inline: boolean;
};
export type TMenuItemProps = {
  href: string;
  label: string;
  active?: boolean;
};
