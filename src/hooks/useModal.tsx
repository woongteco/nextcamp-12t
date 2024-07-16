import { useEffect, useId, useReducer, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { TProps } from "@/types/component/props";
import ModalPortal from "@/common/Molecules/ModalPortal/ModalPortal";
import useDialogEscape from "./useDialogEscape";

type TModalHookParams<T> = TProps & {
  onClose?: () => void;
  defaultValue?: boolean;
  key?: string;
};
export default function useModal<T>(props: TModalHookParams<T>) {
  const { onClose, children, defaultValue = false, key = undefined } = props;
  const modalRef = useRef<HTMLDialogElement>(null);
  const modalKey = key || useId();
  const [show, setShow] = useState(defaultValue);

  useDialogEscape({
    show,
    ref: modalRef,
    close: () => setShow(false),
  });

  function open() {
    if (show === false) {
      setShow(true);
    }
  }
  function close() {
    if (show === true) {
      setShow(false);
      onClose && onClose();
      return;
    }
  }

  const element = show
    ? createPortal(
        <ModalPortal ref={modalRef} onClose={close}>
          {children}
        </ModalPortal>,
        document.body,
        modalKey
      )
    : null;

  return {
    Modal: element,
    open,
    close,
  };
}
