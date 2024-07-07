import { useState } from "react";
import { createPortal } from "react-dom";

import Button from "@/common/Atoms/Form/Button";
import ModalPortal from "@/common/Molecules/ModalPortal/ModalPortal";

export default function ProfileImageInput({
  setProfileImg,
}: {
  setProfileImg: Function;
}) {
  const [showModal, setShowModal] = useState<boolean>(false);
  function onSave() {
    // ...프로필 이미지 저장
    // setProfileImg("")
    setShowModal(false);
  }
  return (
    <>
      <div className="flex items-center gap-4">
        <Button variation="solid" onClick={() => setShowModal(true)}>
          이미지 변경하기
        </Button>
        <Button
          variation="text"
          colors={{ bg: "bg-label-neutral", text: "text-label-neutral" }}
        >
          이미지 제거
        </Button>
      </div>
      {showModal &&
        createPortal(
          <ModalPortal canClose onClose={onSave}>
            <Button variation="solid" onClick={onSave}>
              저장
            </Button>
          </ModalPortal>,
          document.body,
          "image-upload"
        )}
    </>
  );
}
