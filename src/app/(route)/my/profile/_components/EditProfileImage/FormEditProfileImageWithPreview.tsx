"use client";
import { ChangeEvent, useEffect, useState } from "react";
import ProfileInputArea from "../ProfileInputArea";
import useModal from "@/hooks/useModal";
import ProfileImagePreviewModal from "./ProfileImagePreviewModal";
import handleAlert from "@/common/Molecules/handleAlert";
import ProfileImg from "@/common/Atoms/Image/ProfileImg";
import { DummyProfileImg } from "@public/images";
import ImageInputWithButton from "@/common/Molecules/Form/ImageInputWithButton";
import Button from "@/common/Atoms/Form/Button";

export type ProfileImageFormProps = {
  initProfileUrl?: string;
  saveImage?: (imageUrl: string) => any;
};

export default function FormEditProfileImageWithPreview({
  initProfileUrl,
  saveImage,
}: ProfileImageFormProps) {
  const [imageUrl, setImageUrl] = useState<string>(initProfileUrl || "");
  const { Modal, open, close } = useModal({
    children: (
      <ProfileImagePreviewModal
        imageUrl={imageUrl}
        getImage={getImage}
        onSave={onSave}
      />
    ),
  });

  useEffect(() => {
    if (imageUrl) {
      open();
    }
  }, [imageUrl]);

  function getImage(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      const fileReader = new FileReader();

      fileReader.onload = () => {
        const encoding = fileReader.result as string;
        setImageUrl(encoding);
      };

      fileReader.readAsDataURL(file);
    }
  }

  // console.log(imageUrl);

  async function onSave() {
    // TODO: DB에 저장
    try {
      // const updated = await saveImage(imageUrl);
      close();
      handleAlert("success", "프로필 이미지가 저장되었습니다.");
      // console.log({ updated });
    } catch (error: any) {
      handleAlert("error", error.message);
    }
  }

  async function onDelete() {
    // await saveImage("");
    setImageUrl("");
  }

  return (
    <ProfileInputArea label="아바타 이미지">
      <div>
        <div className="flex items-center gap-4">
          <ProfileImg
            size="xlarge"
            src={imageUrl || DummyProfileImg}
            alt="프로필 이미지 미리보기"
          />
          <ImageInputWithButton
            name="profileImage"
            buttonProps={{
              variation: "outline",
              colors: {
                bg: "bg-main-600",
                text: "text-main-600",
              },
            }}
            onChange={(e) => getImage(e)}
          >
            이미지 변경하기
          </ImageInputWithButton>
          <Button
            variation="text"
            colors={{ bg: "bg-label-neutral", text: "text-label-neutral" }}
            onClick={onDelete}
          >
            이미지 제거
          </Button>
        </div>
        <p className="text-label-400 text-label-alt mt-2">
          *권장 이미지 - 확장자: png, jpg, jpeg / 용량: 1MB 이하
        </p>
      </div>
      {Modal}
    </ProfileInputArea>
  );
}
