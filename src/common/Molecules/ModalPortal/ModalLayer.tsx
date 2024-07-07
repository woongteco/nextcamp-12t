import Button from "@/common/Atoms/Form/Button";
import { TModalPortalProps } from "@/types/component/props";

export default function ModalLayer({
  children,
  canClose = true,
  onClose,
}: TModalPortalProps) {
  if (
    (canClose && onClose === undefined) ||
    (onClose !== undefined && canClose === false)
  ) {
    throw new Error(
      "ModalLayer 컴포넌트를 닫기 위해서는 canClose 속성(true)과 onClose 함수를 함께 가져야합니다."
    );
  }
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center lg:px-[96px] lg:py-[94px] z-modal">
      <div className="relative w-full h-full lg:max-w-full lg:max-h-full lg:w-fit lg:h-fit lg:rounded-twenty bg-white p-14 overflow-auto">
        {canClose && (
          <Button
            variation="icon"
            className="absolute right-8 top-8"
            onClick={onClose}
          >
            <CloseIcon />
          </Button>
        )}
        {children}
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="transparent" />
      <path
        d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
        stroke="#171719"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
