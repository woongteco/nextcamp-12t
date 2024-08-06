import GridField from "@/common/Atoms/Form/Field";
import { LabelText } from "@/common/Atoms/Form/Label";
import { AdditionIcon } from "@/common/Atoms/Image/Icon";
import { DefaultThumbnailImg } from "@public/images";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ThumbnailInput() {
  const [preview, setPreview] = useState<string>("");
  const fileInput = useRef<HTMLInputElement>(null);
  const onUloadImage = (e: any) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      const fileReader = new FileReader();

      fileReader.onloadend = () => {
        const encoding = fileReader.result as string;
        setPreview(encoding);
        return encoding;
      };

      fileReader.readAsDataURL(file);
    }
  };

  const onClickImageButton = () => {
    fileInput.current?.click();
  };

  return (
    <GridField>
      <LabelText form>썸네일 이미지</LabelText>
      <div className="flex flex-col">
        <div className="flex items-start gap-8">
          <div>
            {preview ? (
              <Image
                width={280}
                height={180}
                className="w-[280px] h-[180px] rounded-ten object-cover"
                src={preview}
                alt="썸네일 이미지"
              />
            ) : (
              <>
                <input
                  type="file"
                  name="thumbnailUrl"
                  accept="image/*"
                  ref={fileInput}
                  onChange={onUloadImage}
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
