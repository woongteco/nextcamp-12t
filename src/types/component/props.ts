import { ComponentProps } from "react";

export type TButtonProps = ComponentProps<"button"> & {
  variation?: "solid" | "outline" | "icon";
  color?: string;
  fullWidth?: boolean;
};
export type TLabelProps = React.ComponentProps<"label"> & {
  required: boolean;
};
export type TCaptionProps = React.ComponentProps<"p" | "span"> & {
  inline: boolean;
};
export type TNavItemProps = Omit<ComponentProps<"li">, "className"> & {
  active: boolean;
};
