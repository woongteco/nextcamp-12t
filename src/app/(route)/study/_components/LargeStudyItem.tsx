import Image from "next/image";
import { BadgeIcon } from "@public/icons";
import Link from "next/link";
import Keyword from "@/common/Atoms/Text/Keyword";
import dayjs from "dayjs";
import { TStudyCard } from "@/types/model/StudyCard";
import { DummyProfileImg } from "@public/images";

export default function LargeStudyItem({ card }: { card: TStudyCard }) {
  const nowDay = dayjs(new Date()).format("YYYY.MM.DD");
  const recruitmentDay = dayjs(card.recruitmentPeriod[1]);
  const resultDay = dayjs(nowDay).diff(recruitmentDay, "days");

  return (
    <div className="h-[28rem] relative">
      <Image
        src={card.thumbnailUrl}
        className="absolute rounded-[1.25rem] h-full"
        width={392}
        height={448}
        alt="스터디 썸네일 이미지"
      />

      <div className="w-full h-full absolute bg-gradient-to-t from-black to-black/30 bg-no-repeat rounded-[1.25rem]">
        <Keyword
          bg={`${resultDay > 0 ? "bg-slate-700" : "bg-status-danger"}`}
          text="text-white"
          className="absolute left-0 top-5 rounded-l-none"
        >
          {resultDay > 0 ? "모집마감" : "모집중"}
        </Keyword>
        <Link
          href={`/study/${card.studyId}`}
          className="absolute bottom-10 px-7 w-full"
        >
          <div className="flex items-center">
            {!card.user.profile_img ? (
              <Image
                src={DummyProfileImg}
                width={56}
                height={56}
                className="w-14 h-14 mr-5 rounded-full"
                alt="user image"
              />
            ) : (
              <Image
                src={card.user.profile_img || ""}
                width={56}
                height={56}
                className="w-14 h-14 mr-5 rounded-full"
                alt="user image"
              />
            )}
            <span className="font-semibold text-subtitle text-white">
              {card.user.name}
            </span>
            {card.user.role === "pro" ? (
              <Image className="ml-2" src={BadgeIcon} alt="pro badge" />
            ) : null}
          </div>
          <div className="w-full my-4 border border-primary-heavy2"></div>
          <div>
            <span className="text-label-400 font-light text-white">
              {card.jobCategory.label}
            </span>
            <p className="text-lg font-semibold text-white">{card.title}</p>

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
        </Link>
      </div>
    </div>
  );
}
