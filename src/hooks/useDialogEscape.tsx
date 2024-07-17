import { RefObject, useEffect } from "react";

export default function useDialogEscape({
  show,
  ref,
  close,
}: {
  show: boolean;
  ref: RefObject<HTMLDialogElement>;
  close: () => void;
}) {
  useEffect(() => {
    if (!show) {
      ref.current?.close();
    }

    const modalKeyClosehandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        ref.current?.close();
        close();
      }
    };
    document.addEventListener("keydown", modalKeyClosehandler);

    return () => {
      document.removeEventListener("keydown", modalKeyClosehandler);
    };
  }, [show]);
}
