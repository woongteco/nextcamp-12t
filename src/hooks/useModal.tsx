import { useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import ModalPortal from "@/common/Molecules/ModalPortal/ModalPortal";
import useDialogEscape from "./useDialogEscape";
import { TPopoverHookParams } from "./usePopover";

export default function useModal(props: TPopoverHookParams) {
  const { onClose, children, defaultValue = false, key = undefined } = props;
  const modalRef = useRef<HTMLDialogElement>(null);
  const uid = useId();
  const modalKey = key || uid;
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
