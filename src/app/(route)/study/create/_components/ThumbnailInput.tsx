"use client";

import GridField from "@/common/Atoms/Form/Field";
import { LabelText } from "@/common/Atoms/Form/Label";
import { AdditionIcon } from "@/common/Atoms/Image/Icon";
import handleAlert from "@/common/Molecules/handleAlert";
import { supabaseThumbnailImage } from "@/lib/actions/studyAction";
import { resizeFile } from "@/utils/resizeFile";
import { DefaultThumbnailImg } from "@public/images";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

export default function ThumbnailInput({
  imageUrl,
  setImageUrl,
}: {
  imageUrl: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}) {
  const fileInput = useRef<HTMLInputElement>(null);

  async function getImage(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;

    if (files && files.length > 0) {
      const file = files[0];

      const previewUrl = URL.createObjectURL(file);
      setImageUrl(previewUrl);

      const resizeImage = await resizeFile(file);
      const formDate = new FormData();
      formDate.append("file", resizeImage);

      const upload = await supabaseThumbnailImage(formDate);
      console.log(upload);
      if (upload.state && upload.result) {
        setImageUrl(upload.result);
      } else {
        handleAlert("error", upload.message);
      }
    }
  }

  const onClickImageButton = () => {
    fileInput.current?.click();
  };

  return (
    <GridField>
      <LabelText form>썸네일 이미지</LabelText>
      <div className="flex flex-col">
        <div className="flex items-start gap-8">
          <div>
            {imageUrl ? (
              <Image
                width={280}
                height={180}
                className="w-[280px] h-[180px] rounded-ten object-cover"
                src={imageUrl}
                alt="썸네일 이미지"
              />
            ) : (
              <>
                <input
                  type="file"
                  name="thumbnailUrl"
                  accept="image/*"
                  ref={fileInput}
                  onChange={(e) => getImage(e)}
                  hidden
                />
                <button
                  type="button"
                  onClick={onClickImageButton}
                  className="flex items-center justify-center flex-col gap-2 w-[280px] h-[180px] border rounded-ten border-[#e2e2e4] bg-[#f7f7f8] text-label-dimmed"
                >
                  <AdditionIcon color="#828285" />
                  <span>이미지 불러오기</span>
                </button>
              </>
            )}
          </div>
          <div className="relative">
            <Image
              className="w-[280px] h-[180px] rounded-ten object-cover"
              src={DefaultThumbnailImg}
              alt="썸네일 이미지"
              width={280}
              height={180}
            />
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex items-center flex-col gap-2 text-white">
              <AdditionIcon color="#fff" />
              <span>기본 제공 이미지</span>
            </div>
          </div>
        </div>
        <span className="mt-1 text-primary-normal text-sm">
          *썸네일 사이즈는 280x180 px를 권장합니다.
        </span>
      </div>
    </GridField>
  );
}
