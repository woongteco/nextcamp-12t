import Link from "next/link";
import Keyword from "@/common/Atoms/Text/Keyword";
import dayjs from "dayjs";
import { StudyDataFull, StudySchema } from "@/types/model/StudyCard";
import Thumbnail from "@/common/Atoms/Image/Thumbnail";
import Profile from "@/common/Molecules/Profile";
import { NULL_USER_FOR_PROFILE } from "@/constants/null_user";

export default function WideStudyItem({ card }: { card: StudyDataFull }) {
  const nowDay = dayjs(new Date()).format("YYYY.MM.DD");
  const recruitmentDay = dayjs(card.studyInfo.recruitmentPeriod[1]);
  const resultDay = dayjs(nowDay).diff(recruitmentDay, "days");

  return (
    <Link href={`/study/${card.studyId}`} className="h-[11.25rem] relative">
      <Thumbnail
        src={card.studyInfo.thumbnailUrl || ""}
        className="absolute rounded-[1.25rem] h-full"
        useIn="wide"
        alt={`${card.studyInfo.title} 스터디 썸네일 이미지`}
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
            <Profile
              size="small"
              user={
                card.writer
                  ? {
                      profile_img: card.writer.profile_img,
                      name: card.writer.name,
                      role: card.writer.role,
                      position_tag: card.writer.position_tag,
                    }
                  : NULL_USER_FOR_PROFILE
              }
            />
          </div>
          <div className="flex flex-col w-1/2">
            <span className="text-label-400 font-light text-white">
              {card.studyInfo.jobCategory}
            </span>
            <p className="text-lg font-semibold text-white line-clamp-2">
              {card.studyInfo.title}
            </p>
            <div className="mt-2 flex gap-1">
              <Keyword
                text="text-line-neutral"
                className="border border-line-neutral"
              >
                모집 {card.studyInfo.recruitmentPeople}명
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
