import Image from "next/image";
import { BadgeIcon } from "@public/icons";
import Link from "next/link";
import Keyword from "@/common/Atoms/Text/Keyword";
import dayjs from "dayjs";
import { TStudyCard } from "@/types/model/StudyCard";

export default function WideStudyItem({ card }: { card: TStudyCard }) {
  const nowDay = dayjs(new Date()).format("YYYY.MM.DD");
  const recruitmentDay = dayjs(card.recruitmentPeriod[1]);
  const resultDay = dayjs(nowDay).diff(recruitmentDay, "days");

  return (
    <Link href={`/study/${card.studyId}`} className="h-[11.25rem] relative">
      <Image
        src={card.thumbnailUrl}
        className="absolute rounded-[1.25rem] h-full"
        width={588}
        height={180}
        alt="스터디 썸네일 이미지"
      />

      <div className="w-full h-full absolute bg-gradient-to-r from-black/30 to-black bg-no-repeat rounded-[1.25rem]">
        <Keyword
          bg={`${resultDay > 0 ? "bg-slate-700" : "bg-status-danger"}`}
          text="text-white"
          className="absolute left-0 top-5 rounded-l-none"
        >
          {resultDay > 0 ? "모집마감" : "모집중"}
        </Keyword>
        <div className="absolute bottom-5 flex items-end justify-between px-5 w-full">
          <div className="flex items-center gap-[.25rem]">
            <Image
              src={card.thumbnailUrl}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
              alt="프로필 이미지"
            />
            <span className="font-semibold text-subtitle text-white">
              {card.user.name}
            </span>
            {card.user.role === "pro" ? (
              <Image src={BadgeIcon} alt="pro badge" />
            ) : null}
          </div>
          <div className="flex flex-col w-1/2">
            <span className="text-label-400 font-light text-white">
              {card.jobCategory.value}
            </span>
            <p className="text-lg font-semibold text-white line-clamp-2">
              {card.title}
            </p>
            <div className="mt-2 flex gap-1">
              <Keyword
                text="text-line-neutral"
                className="border border-line-neutral"
              >
                모집 {card.recruitmentPeople}명
              </Keyword>
              <Keyword
                text="text-line-neutral"
                className="border border-line-neutral"
              >
                {recruitmentDay.format("MM/DD")}
              </Keyword>
              <Keyword
                text="text-line-neutral"
                className="border border-line-neutral"
              >
                좋아요 {card.heartCount}
              </Keyword>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
