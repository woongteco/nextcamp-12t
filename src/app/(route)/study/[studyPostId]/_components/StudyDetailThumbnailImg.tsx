import Keyword from "@/common/Atoms/Text/Keyword";
import Image from "next/image";

type TThumbnailImg = {
  thumbnailUrl: string;
  RecruitmentPeriod: string[];
};
export default function StudyDetailThumbnailImgComponent({
  thumbnailImg,
}: {
  thumbnailImg: TThumbnailImg;
}) {
  const { thumbnailUrl, RecruitmentPeriod } = thumbnailImg;
  return (
    <div className="relative">
      <Image
        width={582}
        height={438}
        className="w-[36.375rem] h-[27.375rem] rounded-3xl"
        src={thumbnailUrl}
        alt="썸네일 이미지"
      />
      <Keyword
        bg="bg-status-danger"
        text="text-white"
        className="absolute left-0 top-6 rounded-l-none"
      >
        모집중
      </Keyword>
      <Keyword
        bg="bg-status-danger"
        text="text-white"
        className="absolute left-[68px] top-6"
      >
        5/17 마감
      </Keyword>
    </div>
  );
}
