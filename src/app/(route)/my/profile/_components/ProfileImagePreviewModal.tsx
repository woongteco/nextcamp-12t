import Button from "@/common/Atoms/Form/Button";
import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import ImageInputWithButton from "@/common/Molecules/Form/ImageInputWithButton";
import { ChangeEventHandler } from "react";

type PropsToPreviewModal = {
  imageUrl: string;
  getImage: ChangeEventHandler;
  onSave: () => void;
};
export default function ProfileImagePreviewModal(props: PropsToPreviewModal) {
  const { imageUrl, getImage, onSave } = props;
  return (
    <div className="flex flex-col items-center">
      <SectionTitle size="md">프로필 미리보기</SectionTitle>
      <input
        type="image"
        alt="preview"
        src={imageUrl}
        className="w-20 h-20 rounded-full my-4 aspect-square"
      />
      <div className="flex items-center justify-start gap-4">
        <ImageInputWithButton
          buttonProps={{
            variation: "outline",
            colors: { bg: "bg-main-600", text: "text-main-600" },
          }}
          onChange={getImage}
        >
          다시 선택
        </ImageInputWithButton>
        <Button variation="solid" onClick={onSave}>
          저장
        </Button>
      </div>
    </div>
  );
}
