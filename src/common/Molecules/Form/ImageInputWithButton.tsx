"use client";
import Button, { TButtonProps } from "@/common/Atoms/Form/Button";
import { ComponentProps, MouseEvent, ReactNode, useRef } from "react";

export type TImageInputWithButtonProps = {
  buttonProps: Omit<TButtonProps, "children">;
  children: ReactNode; // be button's children
} & Omit<
  ComponentProps<"input">,
  "type" | "accept" | "hidden" | "style" | "ref"
>;

export default function ImageInputWithButton(
  props: TImageInputWithButtonProps
) {
  const {
    buttonProps: { onClick: buttonClick, ...buttonRest },
    children,
    ...inputProps
  } = props;
  const imageInput = useRef<HTMLInputElement>(null);
  const clickHanlder = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    if (imageInput.current) {
      imageInput.current.click();
    }
    buttonClick && buttonClick(e);
  };
  return (
    <>
      <input
        ref={imageInput}
        type="file"
        accept=".jpg,.jpeg,.png"
        hidden
        {...inputProps}
      />
      <Button {...buttonRest} onClick={clickHanlder}>
        {children}
      </Button>
    </>
  );
}
