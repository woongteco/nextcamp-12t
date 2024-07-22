import { useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { TProps } from "@/types/component/props";
import useDialogEscape from "./useDialogEscape";
import SidePopup from "@/common/Molecules/SidePopup";
import usePopoverScrollPrevent from "./usePopoverScrollPrevent";

export type TPopoverHookParams = TProps & {
  onClose?: () => void;
  defaultValue?: boolean;
  key?: string;
};
export default function usePopover(props: TPopoverHookParams) {
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

  usePopoverScrollPrevent(show);

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
        <SidePopup ref={modalRef} onClose={close}>
          {children}
        </SidePopup>,
        document.body,
        modalKey
      )
    : null;

  return {
    Popup: element,
    open,
    close,
  };
}
