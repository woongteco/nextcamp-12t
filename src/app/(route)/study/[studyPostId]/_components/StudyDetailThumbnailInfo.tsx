import ShareIconButton from "@/app/(route)/_components/ShareIconButton";
import { DetailFullHeartIcon } from "@public/icons";
import Image from "next/image";
import Link from "next/link";
import ThumbnailInfoValue from "./ThumbnailInfoValue";
import ThumbnailInfoList from "./ThumbnailInfoLabel";

type TthumbnailInfo = {
  jobCategory: { label: string; value: string };
  title: string;
  heartCount: number;
};
export type TThumbnailValue = {
  targetCategory: { label: string; value: string };
  RecruitmentPeople: string;
  expense: string;
  studyPeriod: string[];
  onoff: string;
};

export default function StudyDetailThumbnailInfo({
  thumbnailInfo,
  thumbnailValue,
}: {
  thumbnailInfo: TthumbnailInfo;
  thumbnailValue: TThumbnailValue;
}) {
  const { jobCategory, title, heartCount } = thumbnailInfo;
  return (
    <div>
      <span className="block mb-3 text-[#888] text-xl">
        {jobCategory.label}
      </span>
      <p className="text-H2">{title}</p>
      <div className="flex gap-8 py-10">
        <ThumbnailInfoList />
        <ThumbnailInfoValue thumbnailValue={thumbnailValue} />
      </div>

      <div className="flex items-center gap-5">
        <Link
          href={"/studyroom/:studyroomId"}
          className="w-full max-w-[12.5rem] h-16 border rounded-ten border-main-700 text-main-700 text-center leading-[62px] font-semibold text-base"
        >
          스터디룸 살펴보기
        </Link>
        <button className="px-2 w-full max-w-[12.5rem] h-16 border rounded-ten bg-main-700 font-semibold text-base text-white">
          스터디 참여 신청하기
        </button>
        <div className="flex items-center gap-3">
          <ShareIconButton width="38" height="38" />
          <Image
            className="w-9 h-9"
            width={36}
            height={36}
            src={DetailFullHeartIcon}
            // DetailHeartIcon (빈 하트)
            alt="좋아요"
          />
          <span className="text-label-neutral font-semibold">{heartCount}</span>
        </div>
      </div>
    </div>
  );
}
