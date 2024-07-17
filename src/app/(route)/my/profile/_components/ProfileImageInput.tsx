import { ChangeEvent, useState } from "react";

import useModal from "@/hooks/useModal";
import ProfileImagePreviewModal from "./ProfileImagePreviewModal";
import Button from "@/common/Atoms/Form/Button";
import ImageInputWithButton from "@/common/Molecules/Form/ImageInputWithButton";

export default function ProfileImageInput({
  setProfileImg,
}: {
  setProfileImg: Function;
}) {
  const [imageUrl, setImageUrl] = useState("");
  const { Modal, open, close } = useModal({
    children: (
      <ProfileImagePreviewModal
        imageUrl={imageUrl}
        getImage={getImage}
        onSave={onSave}
      />
    ),
  });
  function getImage(e: ChangeEvent<HTMLInputElement>) {
    const { files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      const src = URL.createObjectURL(file);
      setImageUrl(src);
      return src;
    }
  }
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const url = getImage(e);
    if (url) {
      open();
    }
  }
  function onSave() {
    // ...프로필 이미지 저장
    setProfileImg(imageUrl);
    close();
  }
  return (
    <>
      <div>
        <div className="flex items-center gap-4">
          <ImageInputWithButton
            buttonProps={{
              variation: "outline",
              colors: {
                bg: "bg-main-600",
                text: "text-main-600",
              },
            }}
            onChange={onChange}
          >
            이미지 변경하기
          </ImageInputWithButton>
          <Button
            variation="text"
            colors={{ bg: "bg-label-neutral", text: "text-label-neutral" }}
            onClick={() => setProfileImg("")}
          >
            이미지 제거
          </Button>
        </div>
        <p className="text-label-400 text-label-alt mt-2">
          *권장 이미지 - 확장자: png, jpg, jpeg / 용량: 1MB 이하
        </p>
      </div>
      {Modal}
    </>
  );
}