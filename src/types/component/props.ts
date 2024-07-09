import { ImageProps } from "next/image";
import { ComponentProps, MouseEventHandler, ReactNode } from "react";

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
export type TLinkButtonProps = React.ComponentProps<"a"> & {
  colors?: TButtonProps["colors"];
  variation?: TButtonProps["variation"];
  href: string | object;
};
type TLabel<T> = ComponentProps<T> & {
  form?: boolean;
  required?: boolean;
};
export type TLabelProps = TLabel<"label">;
export type TLabelTextProps = TLabel<"p">;
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
  canClose?: boolean;
  onClose: MouseEventHandler<T>;
};
