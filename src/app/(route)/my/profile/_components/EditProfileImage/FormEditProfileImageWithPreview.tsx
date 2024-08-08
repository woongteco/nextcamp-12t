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
import { updateUserData } from "@/lib/actions/profileAction";

export type ProfileImageFormProps = {
  id: string;
  initProfileUrl: string;
};

export default function FormEditProfileImageWithPreview({
  id,
  initProfileUrl,
}: ProfileImageFormProps) {
  const [imageUrl, setImageUrl] = useState<string>(initProfileUrl);
  const modalClose = () => {
    setImageUrl(initProfileUrl);
  };

  const { Modal, open, close } = useModal({
    defaultValue: false,
    onClose: modalClose,
    children: (
      <ProfileImagePreviewModal
        imageUrl={imageUrl}
        getImage={getImage}
        onSave={onSave}
      />
    ),
  });

  useEffect(() => {
    if (initProfileUrl !== imageUrl) {
      if (!imageUrl) {
        close();
        return;
      }
      open();
    }

    return () => {
      close();
    };
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

  async function onSave() {
    console.log("save");
    try {
      const result = await updateUserData(id, { profile_img: imageUrl });

      if (result.state) {
        close();
        handleAlert("success", result.message);
      } else {
        handleAlert("error", result.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function onDelete() {
    if (!imageUrl) {
      handleAlert("error", "저장된 프로필 이미지가 없습니다.");
      return;
    }

    try {
      const result = await updateUserData(id, { profile_img: "" });
      setImageUrl("");

      if (result.state) {
        handleAlert("success", result.message);
      } else {
        handleAlert("error", result.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ProfileInputArea label="프로필 이미지">
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
              color: "main",
            }}
            onChange={(e) => getImage(e)}
          >
            이미지 변경하기
          </ImageInputWithButton>
          <Button variation="text" color="default" onClick={onDelete}>
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
