import Image from "next/image";
import Keyword from "@/common/Atoms/Text/Keyword";
import ThumbnailInfoList from "./ThumbnailInfoLabel";
import Link from "next/link";
import ShareIconButton from "@/app/(route)/_components/ShareIconButton";
import dayjs from "dayjs";
import SaveHeartButton from "@/common/Molecules/Form/SaveHeartButton";
import { DefaultThumbnailImg } from "@public/images";
import ApplyButton from "./ApplyButton";

export type TThumbnailInfo = {
  expense: number;
  jobCategory: { label: string; value: string };
  location: { label: string; value: string };
  place: string | null;
  recruitmentPeople: number;
  recruitmentPeriod: [string, string];
  studyPeriod: [string, string];
  targetCategory: { label: string; value: string };
  thumbnailUrl: string | null;
  title: string;
};
export default function StudyDetailThumbnail({
  studyInfo,
  heart,
}: {
  studyInfo: TThumbnailInfo;
  heart: number;
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
    place,
    location,
  } = studyInfo;

  const nowDay = dayjs(new Date()).format("YYYY.MM.DD");
  const recruitmentDay = dayjs(recruitmentPeriod[1]);
  const resultDay = dayjs(nowDay).diff(recruitmentDay, "days");

  return (
    <div className="flex gap-7">
      <div className="relative">
        <Image
          width={582}
          height={438}
          className="w-[36.375rem] h-[27.375rem] rounded-3xl"
          src={thumbnailUrl || DefaultThumbnailImg}
          alt="썸네일 이미지"
        />
        <div className="flex gap-1 absolute left-0 top-6">
          <Keyword
            bg={`${resultDay < 0 ? "bg-status-danger" : "bg-slate-700"}`}
            text="text-white"
            className="rounded-l-none "
          >
            {resultDay < 0 ? "모집중" : "모집마감"}
          </Keyword>
          <Keyword bg="bg-status-danger" text="text-white">
            {dayjs(recruitmentDay).format("MM/DD")} 마감
          </Keyword>
        </div>
      </div>
      <div className="flex-1">
        <span className="block mb-3 text-[#888] text-xl">
          {jobCategory.label}
        </span>
        <p className="text-H2">{title}</p>
        <div className="flex gap-8 py-10">
          <ThumbnailInfoList />
          <ul className="flex flex-col gap-4 text-xl">
            <li>{targetCategory.label}</li>
            <li>{recruitmentPeople}명</li>
            <li>{expense.toLocaleString("ko-KR")}원</li>
            <li>
              {studyPeriod[0]} ~ {studyPeriod[1]}
            </li>
            <li>{location.label}</li>
          </ul>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href={"/studyroom/:studyroomId"}
            className="w-full max-w-[12.5rem] h-16 border rounded-ten border-main-700 text-main-700 text-center leading-[62px] font-semibold text-base"
          >
            스터디룸 살펴보기
          </Link>
          <ApplyButton resultDay={resultDay} />
          <div className="flex items-center gap-3">
            <ShareIconButton />
            <SaveHeartButton heart={heart} />
          </div>
        </div>
      </div>
    </div>
  );
}
