import { faker } from "@faker-js/faker";
import Image from "next/image";
import { BadgeIcon, PostCardHeart } from "@public/icons";
import Link from "next/link";
import { TStudyCard } from "@/dummies/studies";

export default function LargeStudyItem({ card }: { card: TStudyCard }) {
  return (
    <>
      <div className="h-[28rem] relative">
        <Image
          src={card.study.image}
          className="absolute rounded-[1.25rem] h-full"
          width={392}
          height={448}
          alt="스터디 썸네일 이미지"
        />

        <div className="w-full h-full absolute bg-gradient-to-t from-black to-black/30 bg-no-repeat rounded-[1.25rem]">
          <span className="absolute left-0 top-5 px-[1rem] py-[.35rem] bg-status-danger rounded-r-3xl text-white text-caption font-bold ">
            {card.study.RecruitmentStatus}
          </span>
          <span className="flex items-center justify-center absolute right-4 top-5 w-[1.875rem] h-[1.875rem] bg-black bg-opacity-30 rounded-full cursor-pointer hover:bg-opacity-60">
            <Image src={PostCardHeart} className="" alt="heart Icon" />
          </span>
          <Link
            href={"/study/:studyId"}
            className="absolute bottom-10 px-7 w-full"
          >
            <div className="flex items-center">
              <Image
                src={card.user.image}
                width={56}
                height={56}
                className="w-14 h-14 mr-5 rounded-full"
                alt="user image"
              />
              <span className="font-semibold text-subtitle text-white">
                {card.user.nickname}
              </span>
              {card.user.userType === "pro" ? (
                <Image className="ml-2" src={BadgeIcon} alt="pro badge" />
              ) : null}
            </div>
            <div className="w-full my-4 border border-primary-heavy2"></div>
            <div>
              <span className="text-label-400 font-light text-white">
                {card.study.categoryJob}
              </span>
              <p className="text-lg font-semibold text-white">
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
          </Link>
        </div>
      </div>
    </>
  );
}
