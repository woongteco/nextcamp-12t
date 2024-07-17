import { MouseEventHandler } from "react";

export default function ModalBackdrop({
  onClick,
}: {
  onClick?: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 z-modal-back bg-backdrop backdrop-blur-sm"
      onClick={onClick}
    ></div>
  );
}
