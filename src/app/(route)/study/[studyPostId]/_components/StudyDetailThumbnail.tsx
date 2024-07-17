import StudyDetailThumbnailInfo from "./StudyDetailThumbnailInfo";
import StudyDetailThumbnailImg from "./StudyDetailThumbnailImg";
import Image from "next/image";
import Keyword from "@/common/Atoms/Text/Keyword";
import ThumbnailInfoList from "./ThumbnailInfoLabel";
import ThumbnailInfoValue from "./ThumbnailInfoValue";
import Link from "next/link";
import ShareIconButton from "@/app/(route)/_components/ShareIconButton";
import { DetailFullHeartIcon } from "@public/icons";

export type TThumbnailInfo = {
  thumbnailUrl: string;
  title: string;
  jobCategory: {
    label: string;
    value: string;
  };
  targetCategory: {
    label: string;
    value: string;
  };
  expense: string;
  recruitmentPeople: string;
  recruitmentPeriod: string[];
  studyPeriod: string[];
  onoff: string;
  heartStatus: boolean;
  heartCount: number;
};
export default function StudyDetailThumbnail({
  thumbnailInfo,
}: {
  thumbnailInfo: TThumbnailInfo;
}) {
  const {
    thumbnailUrl,
    title,
    jobCategory,
    targetCategory,
    expense,
    recruitmentPeople,
    recruitmentPeriod,
    studyPeriod,
    onoff,
    heartStatus,
    heartCount,
  } = thumbnailInfo;
  return (
    <div className="flex gap-7">
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
      <div>
        <span className="block mb-3 text-[#888] text-xl">
          {jobCategory.label}
        </span>
        <p className="text-H2">{title}</p>
        <div className="flex gap-8 py-10">
          <ThumbnailInfoList />
          <ul className="flex flex-col gap-4 text-xl">
            <li>{targetCategory.label}</li>
            <li>{recruitmentPeople}</li>
            <li>{expense}</li>
            <li>
              {studyPeriod[0]} ~ {studyPeriod[1]}
            </li>
            <li>{onoff}</li>
          </ul>
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
            <ShareIconButton />
            <Image
              className="w-9 h-9"
              width={36}
              height={36}
              src={DetailFullHeartIcon}
              // DetailHeartIcon (빈 하트)
              alt="좋아요"
            />
            <span className="text-label-neutral font-semibold">
              {heartCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
