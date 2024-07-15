import Image from "next/image";
import { BadgeIcon, PostCardHeart } from "@public/icons";
import Link from "next/link";
import { TStudyCard } from "@/dummies/studies";
import Keyword from "@/common/Atoms/Text/Keyword";

export default function WideStudyItem({ card }: { card: TStudyCard }) {
  return (
    <Link href={"/study/:studyID"} className="h-[11.25rem] relative">
      <Image
        src={card.study.image}
        className="absolute rounded-[1.25rem] h-full"
        width={588}
        height={180}
        alt="스터디 썸네일 이미지"
      />

      <div className="w-full h-full absolute bg-gradient-to-r from-black/30 to-black bg-no-repeat rounded-[1.25rem]">
        <Keyword
          bg="bg-status-danger"
          text="text-white"
          className="absolute left-0 top-5 rounded-l-none"
        >
          {card.study.RecruitmentStatus}
        </Keyword>

        <span className="flex items-center justify-center absolute right-4 top-5 w-[1.875rem] h-[1.875rem] bg-black bg-opacity-30 rounded-full cursor-pointer hover:bg-opacity-60">
          <Image src={PostCardHeart} alt="찜하기" />
        </span>
        <div className="absolute bottom-5 flex items-end justify-between px-5 w-full">
          <div className="flex items-center gap-[.25rem]">
            <Image
              src={card.user.image}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
              alt="프로필 이미지"
            />
            <span className="font-semibold text-subtitle text-white">
              {card.user.nickname}
            </span>
            {card.user.userType === "pro" ? (
              <Image src={BadgeIcon} alt="pro badge" />
            ) : null}
          </div>
          <div className="flex flex-col w-1/2">
            <span className="text-label-400 font-light text-white">
              {card.study.categoryJob}
            </span>
            <p className="text-lg font-semibold text-white line-clamp-2">
              {card.study.title}
            </p>
            <div className="mt-2 flex gap-1">
              <span className="px-[1rem] py-[.35rem] text-caption border border-line-neutral text-line-neutral rounded-[4rem]">
                {card.study.people}
              </span>
              <span className="px-[1rem] py-[.35rem] text-caption border border-line-neutral text-line-neutral rounded-[4rem]">
                {card.study.deadline}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
