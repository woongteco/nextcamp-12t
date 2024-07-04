import { faker } from "@faker-js/faker";
import Image from "next/image";
import { BadgeIcon, heartIcon } from "../../../../../public/icons";
import Link from "next/link";

export default function GoodStudyItem() {
  return (
    <Link href={"/studyroom/:studyroomId"} className="h-[11.25rem] relative">
      <img
        src={faker.image.avatar()}
        className="absolute rounded-[1.25rem] h-full"
        width={588}
        height={180}
        alt="study thumbnail"
      />

      <div className="w-full h-full absolute bg-gradient-to-r from-black/30 to-black bg-no-repeat rounded-[1.25rem]">
        <span className="absolute left-0 top-5 px-[1rem] py-[.35rem] bg-satus-danger rounded-r-3xl text-white text-caption font-bold ">
          모집중
        </span>
        <span className="flex items-center justify-center absolute right-4 top-5 w-[1.875rem] h-[1.875rem] bg-black bg-opacity-30 rounded-full cursor-pointer hover:bg-opacity-60">
          <Image src={heartIcon} className="" alt="heart Icon" />
        </span>
        <div className="absolute bottom-5 flex items-end justify-between px-5 w-full">
          <div className="flex items-center gap-[.25rem]">
            <img
              src={faker.image.avatar()}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
              alt="user image"
            />
            <span className="font-semibold text-subtitle text-white">
              디자이너 이연진
            </span>
            <Image src={BadgeIcon} alt="pro badge" />
          </div>
          <div className="flex flex-col">
            <span className="text-label-400 font-light text-white">
              디자인 스터디
            </span>
            <p className="text-lg font-semibold text-white">
              독학으로 피그마 마스터하기!
            </p>

            <div className="mt-2 flex gap-1">
              <span className="px-[1rem] py-[.35rem] text-caption border border-line-neutral text-line-neutral rounded-[4rem]">
                모집 10명
              </span>
              <span className="px-[1rem] py-[.35rem] text-caption border border-line-neutral text-line-neutral rounded-[4rem]">
                7/26
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
