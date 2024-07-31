"use client";
import { Suspense, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import ModalPortal from "@/common/Molecules/ModalPortal/ModalPortal";
import useDialogEscape from "./useDialogEscape";
import { TPopoverHookParams } from "./usePopover";
import LoadingContainer from "@/common/Layout/LoadingContainer";

export default function useModal(props: TPopoverHookParams) {
  const { onClose, children, defaultValue = false, key = undefined } = props;
  const modalRef = useRef<HTMLDialogElement>(null);
  const uid = useId();
  const modalKey = key || uid;
  const [dovEnv, setDocEnv] = useState(false);
  const [show, setShow] = useState(defaultValue);

  useEffect(() => {
    if (typeof document !== undefined) {
      setDocEnv(true);
    }
  }, []);

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

  const element = show ? (
    dovEnv ? (
      createPortal(
        <ModalPortal ref={modalRef} onClose={close}>
          {children}
        </ModalPortal>,
        document.body,
        modalKey
      )
    ) : (
      <LoadingContainer className="w-full h-full" />
    )
  ) : null;

  return {
    Modal: element,
    open,
    close,
  };
}
