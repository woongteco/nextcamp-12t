"use client";
import Button from "@/common/Atoms/Form/Button";
import { TImageInputWithButtonProps } from "@/types/component/props";
import { MouseEvent, useRef } from "react";

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
        accept="image/*"
        hidden
        {...inputProps}
      />
      <Button {...buttonRest} onClick={clickHanlder}>
        {children}
      </Button>
    </>
  );
}
