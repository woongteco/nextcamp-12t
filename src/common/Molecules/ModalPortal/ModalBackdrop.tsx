export default function ModalBackdrop({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 z-modal-back bg-backdrop backdrop-blur-sm"
      onClick={onClick}
    ></div>
  );
}
