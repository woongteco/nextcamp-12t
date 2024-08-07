"use client";
import Button from "@/common/Atoms/Form/Button";
import Input from "@/common/Molecules/Form/Input";
import { usePathname } from "next/navigation";
import useModal from "@/hooks/useModal";
import handleAlert from "@/common/Molecules/handleAlert";

export default function ShareIconButton({
  width = "38",
  height = "38",
}: {
  width?: string;
  height?: string;
}) {
  const pathname = usePathname();
  const fullPathname = "https://chemeet.vercel.app" + pathname;

  const { Modal, open } = useModal({
    children: (
      <div className="flex flex-col gap-6">
        <p className="text-H3 text-label-normal">공유하기</p>
        <div className="flex gap-4">
          <Input.Text readOnly value={fullPathname} className="w-[400px]" />
          <Button variation="solid" onClick={copyPathname}>
            URL 복사
          </Button>
        </div>
      </div>
    ),
    key: "share-modal",
  });

  function copyPathname() {
    navigator.clipboard.writeText(fullPathname);
    handleAlert(
      "success",
      "URL이 복사되었어요",
      "원하는 곳에 붙여넣기 하여 케밋을 공유해보세요!"
    );
  }
  return (
    <>
      <Button.Icon onClick={open}>
        <svg
          width={width}
          height={height}
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.25 33C24.6269 33.0188 23.0886 32.2771 22.0924 30.9956C21.0962 29.7141 20.7569 28.0403 21.1755 26.472L11.7855 21.105C10.1629 22.5916 7.78454 22.9062 5.83125 21.8927C3.87795 20.8791 2.76583 18.7533 3.04707 16.5708C3.32831 14.3883 4.94301 12.6139 7.08943 12.1286C9.23585 11.6434 11.4568 12.5507 12.6495 14.4L21.174 9.5265C21.0637 9.10978 21.0053 8.68104 21 8.25C20.9785 5.74007 22.7217 3.55971 25.1748 3.02823C27.6279 2.49675 30.1172 3.76012 31.1365 6.05387C32.1557 8.34763 31.425 11.0418 29.3865 12.5063C27.3479 13.9707 24.5614 13.8031 22.713 12.105L13.4865 17.3775C13.4774 17.7665 13.423 18.1531 13.3245 18.5295L22.713 23.895C24.4414 22.3088 27.0132 22.064 29.0098 23.2955C31.0065 24.527 31.942 26.9351 31.3003 29.1915C30.6586 31.448 28.5959 33.0034 26.25 33ZM26.25 25.5C25.0074 25.5 24 26.5074 24 27.75C24 28.9926 25.0074 30 26.25 30C27.4927 30 28.5 28.9926 28.5 27.75C28.5 26.5074 27.4927 25.5 26.25 25.5ZM8.25002 15C7.00737 15 6.00002 16.0074 6.00002 17.25C6.00002 18.4926 7.00737 19.5 8.25002 19.5C9.49266 19.5 10.5 18.4926 10.5 17.25C10.5 16.0074 9.49266 15 8.25002 15ZM26.25 6C25.0074 6 24 7.00736 24 8.25C24 9.49264 25.0074 10.5 26.25 10.5C27.4927 10.5 28.5 9.49264 28.5 8.25C28.5 7.00736 27.4927 6 26.25 6Z"
            fill="#464748"
          />
        </svg>
      </Button.Icon>
      {Modal}
    </>
  );
}
