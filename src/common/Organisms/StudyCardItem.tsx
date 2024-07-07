/**
 * @props type: "default" (| "link" | "wide" | "large")
 * - default는 가장 기본적으로 사용되는 스터디 카드 UI 디자인입니다.
 * - link type은 커뮤니티 글 상세 페이지에서만 사용되기 때문에 common 컴포넌트 내에서는 직접 구현되지 않습니다.
 * - wide type과 large type은 스터디 탐색 페이지에서만 사용되기 때문에
 * common 컴포넌트 내에서는 직접 구현되지 않습니다.
 */

import Link from "next/link";
import Image from "next/image";
import { TStudyCard } from "@/app/(route)/study/page";
import Keyword from "../Atoms/Text/Keyword";
import { BadgeIcon, heartIcon } from "@public/icons";
import Profile from "../Molecules/Profile";
import Thumbnail from "../Atoms/Image/Thumbnail";

export default function StudyCardItem({ card }: { card: TStudyCard }) {
  return (
    <div className="bg-white rounded-twenty border border-line-alt hover:shadow-normal overflow-hidden">
      <Link href={"/study/" + card.id}>
        <div className="h-[11.25rem] relative overflow-hidden">
          <Keyword
            bg="bg-status-danger"
            text="text-white"
            className="absolute left-0 top-5 rounded-l-none"
          >
            {card.study.RecruitmentStatus}
          </Keyword>
          {/* <img
          src={card.study.image}
          className="w-full h-full"
          alt="study thumbnail"
        /> */}
          <Thumbnail
            useIn="list"
            loading="lazy"
            placeholder="blur"
            blurDataURL={card.study.image + "?blur=2"}
            src={card.study.image}
            alt={`${card.study.title} thumbnail`}
            className="thumbnailImage object-cover min-w-full w-auto h-auto"
          />
          {/* <Image
            width={268}
            height={180}
            loading="lazy"
            placeholder="blur"
            blurDataURL={card.study.image + "?blur=2"}
            src={card.study.image}
            alt={`${card.study.title} thumbnail`}
            className="thumbnailImage object-cover min-w-full w-auto h-auto"
          /> */}
          <form
            action=""
            className="flex items-center justify-center absolute right-4 top-5 w-[1.875rem] h-[1.875rem] bg-black bg-opacity-30 rounded-full cursor-pointer"
          >
            <button>
              <Image src={heartIcon} className="" alt="heart Icon" />
            </button>
          </form>
        </div>
        <div className="block my-4 px-3 h-[7.75rem]">
          <span className="text-label-400 text-label-dimmed line-clamp-1">
            {card.study.categoryJob}
          </span>
          <p className="text-lg font-semibold line-clamp-1">
            {card.study.title}
          </p>
          <div className="flex items-center gap-[.25rem] pt-2">
            <Profile
              user={{
                profileUrl: card.user.image,
                userId: card.user.nickname,
                name: card.user.nickname.split(" ")[1],
                position: card.user.nickname.split(" ")[0],
                role: card.user.userType,
              }}
              size="small"
            />
            {/* <img
            src={card.user.image}
            className="w-5 h-5 rounded-full"
            alt="user image"
          />
          <span className="font-semibold text-label-60
          0">
            {card.user.nickname}
          </span>
          {card.user.userType === "pro" ? (
            <Image src={BadgeIcon} alt="pro badge" />
          ) : null} */}
          </div>
          <div className="mt-4 flex gap-1">
            <Keyword bg="bg-card" text="text-label-normal">
              {card.study.people}
            </Keyword>
            <Keyword bg="bg-card" text="text-label-normal">
              {card.study.deadline}
            </Keyword>
          </div>
        </div>
      </Link>
    </div>
  );
}
