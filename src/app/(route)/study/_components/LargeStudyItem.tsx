import { faker } from "@faker-js/faker";
import Image from "next/image";
import { BadgeIcon, heartIcon } from "@public/icons";
import Link from "next/link";

export default function LargeStudyItem() {
  return (
    <>
      <div className="h-[28rem] relative">
        <img
          src={faker.image.avatar()}
          className="absolute rounded-[1.25rem] h-full"
          width={392}
          height={448}
          alt="study thumbnail"
        />

        <div className="w-full h-full absolute bg-gradient-to-t from-black to-black/30 bg-no-repeat rounded-[1.25rem]">
          <span className="absolute left-0 top-5 px-[1rem] py-[.35rem] bg-satus-danger rounded-r-3xl text-white text-caption font-bold ">
            모집중
          </span>
          <span className="flex items-center justify-center absolute right-4 top-5 w-[1.875rem] h-[1.875rem] bg-black bg-opacity-30 rounded-full cursor-pointer hover:bg-opacity-60">
            <Image src={heartIcon} className="" alt="heart Icon" />
          </span>
          <Link
            href={"/studyroom/:studyroomId"}
            className="absolute bottom-10 px-7 w-full"
          >
            <div className="flex items-end gap-[.25rem]">
              <img
                src={faker.image.avatar()}
                width={56}
                height={56}
                className="w-14 h-14 rounded-full"
                alt="user image"
              />
              <span className="font-semibold text-subtitle text-white">
                디자이너 이연진
              </span>
              <Image src={BadgeIcon} alt="pro badge" />
            </div>
            <p className="mt-3 text-[#D9D9DA] text-[.8125rem] font-normal">
              디자인의 안정감과 모던함을 추구하는 디자이너 입니다 함께 부드러운
              디자인을 위해 공부해요
            </p>
            <div className="w-full my-4 border border-primary-heavy2"></div>
            <div>
              <span className="text-label-400 font-light text-white">
                디자인 스터디
              </span>
              <p className="text-lg font-semibold text-white">
                안정감있는 디자인이란?
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
          </Link>
        </div>
      </div>
    </>
  );
}
