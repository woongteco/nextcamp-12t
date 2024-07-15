import { ImageProps } from "next/image";
import { ComponentProps, MouseEventHandler, ReactNode, RefObject } from "react";

export type TProps = {
  children: ReactNode;
};
export type TClassnameProps = { className: string };
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
export type TImageInputWithButtonProps = {
  buttonProps: Omit<TButtonProps, "children">;
  children: ReactNode; // be button's children
} & Omit<
  ComponentProps<"input">,
  "type" | "accept" | "hidden" | "style" | "ref"
>;
export type TLinkButtonProps = React.ComponentProps<"a"> & {
  colors?: TButtonProps["colors"];
  variation?: TButtonProps["variation"];
  href: string | object;
};
type TLabel = {
  form?: boolean;
  required?: boolean;
};
export type TLabelProps = ComponentProps<"label"> & TLabel;
export type TLabelTextProps = ComponentProps<"p"> & TLabel;
export type TCaptionProps = ComponentProps<"p" | "span"> & {
  inline: boolean;
};
export type TNavItemProps = {
  key: string;
  href: string;
  label: string;
  active: boolean;
};
export type TImageThumbnailProps = ImageProps & {
  src: string;
  alt: string;
  useIn?: "list" | "specific" | "linked";
};
export type TModalPortalProps<T> = TProps & {
  onClose: MouseEventHandler<T>;
  ref?: RefObject<HTMLDialogElement>;
};
export type TCustomSelectProps = {
  isCreatable?: boolean;
  unstyled?: boolean;
};
