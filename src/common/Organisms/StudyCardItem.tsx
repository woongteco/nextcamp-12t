/**
 * @props type: "default" (| "link" | "wide" | "large")
 * - default는 가장 기본적으로 사용되는 스터디 카드 UI 디자인입니다.
 * - link type은 커뮤니티 글 상세 페이지에서만 사용되기 때문에 common 컴포넌트 내에서는 직접 구현되지 않습니다.
 * - wide type과 large type은 스터디 탐색 페이지에서만 사용되기 때문에
 * common 컴포넌트 내에서는 직접 구현되지 않습니다.
 */

import Link from "next/link";
import Keyword from "../Atoms/Text/Keyword";
import Profile from "../Molecules/Profile";
import Thumbnail from "../Atoms/Image/Thumbnail";
import dayjs from "dayjs";
import { TStudyCard } from "@/types/model/StudyCard";

export default function StudyCardItem({ card }: { card: TStudyCard }) {
  const nowDay = dayjs(new Date()).format("YYYY.MM.DD");
  const recruitmentDay = dayjs(card.recruitmentPeriod[1]);
  const resultDay = dayjs(nowDay).diff(recruitmentDay, "days");

  return (
    <li
      key={card.studyId}
      className="bg-white rounded-twenty border border-line-alt hover:shadow-normal overflow-hidden"
    >
      <Link href={`/study/${card.studyId}`}>
        <div className="h-[11.25rem] relative overflow-hidden">
          <Keyword
            bg={`${resultDay > 0 ? "bg-slate-700" : "bg-status-danger"}`}
            text="text-white"
            className="absolute left-0 top-5 rounded-l-none"
          >
            {resultDay > 0 ? "모집마감" : "모집중"}
          </Keyword>
          <Thumbnail
            useIn="list"
            loading="lazy"
            placeholder="blur"
            blurDataURL={card.thumbnailUrl + "?blur=2"}
            src={card.thumbnailUrl}
            alt={`${card.title} thumbnail`}
            className="thumbnailImage object-cover min-w-full w-auto h-auto"
          />
        </div>
        <div className="block my-4 px-3 h-[7.75rem]">
          <span className="text-label-400 text-label-dimmed line-clamp-1">
            {card.jobCategory.value}
          </span>
          <p className="text-lg font-semibold line-clamp-1">{card.title}</p>
          <div className="flex items-center gap-[.25rem] pt-2">
            <Profile
              user={{
                profile_img: card.user.profile_img,
                name: card.user.name,
                position: card.user.position,
                role: card.user.role,
              }}
              size="small"
            />
          </div>
          <div className="mt-4 flex gap-1">
            <Keyword bg="bg-card" text="text-label-normal">
              모집 {card.recruitmentPeople}명
            </Keyword>
            <Keyword bg="bg-card" text="text-label-normal">
              {recruitmentDay.format("MM/DD")}마감
            </Keyword>
            <Keyword bg="bg-card" text="text-label-normal">
              좋아요 {card.heartCount}
            </Keyword>
          </div>
        </div>
      </Link>
    </li>
  );
}
