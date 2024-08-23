"use client";

import { AlarmIcon, CreateStudyIcon } from "@public/icons";
import Image from "next/image";
import Link from "next/link";
import DefaultProfileMenuItems from "./DefaultProfileMenuItems";
import { TUserAlert } from "./ResponsiveMenu";
import AlertList from "@/app/_components/AlertList";
import { ReactNode, useEffect, useState } from "react";

type DesktopMenuProps = {
  profileImage: ReactNode;
  alertList: TUserAlert[];
};

export default function DesktopMenu({
  profileImage,
  alertList,
}: DesktopMenuProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alertList.forEach((el) => {
      setCount(el.comments.length);
    });
  }, [count]);

  return (
    <div className="gap-8 items-center hidden lg:flex">
      <Link
        href={"/study/create"}
        className="flex items-center justify-center gap-2 w-36 py-2 leading-8 text-main-600 border border-solid border-main-600 rounded-[1.3rem]"
      >
        <Image src={CreateStudyIcon} alt="create study" />
        <span className="text-label-400">스터디 만들기</span>
      </Link>
      <div className="flex gap-4 items-center">
        <div className="relative [&:hover>ul]:block cursor-pointer">
          {profileImage}
          <ul className="fixed top-[4.0625rem] right-2 xl:right-[calc(50vw-620px)] w-40 p-1 pt-2 bg-white shadow-emphasize rounded-b-xl hidden [&_li]:py-[6px] [&_li]:px-3 cursor-default">
            <DefaultProfileMenuItems />
          </ul>
        </div>
        <div className="w-[1px] h-6 bg-gray-400" />
        <div className="relative [&:hover>div]:block cursor-pointer h-16 flex items-center">
          <Image src={AlarmIcon} alt="alarm" />
          {count !== 0 && (
            <div className="absolute top-2 left-3 px-[5px] py-[2px] rounded-lg bg-red-500 text-white text-xs">
              {count}
            </div>
          )}
          <div className="fixed top-[4.0625rem] right-2 xl:right-[calc(50vw-620px)] w-80 p-3 bg-white shadow-emphasize rounded-b-xl hidden cursor-default">
            <div className="flex items-center gap-2 mb-2 font-semibold text-lg">
              <Image src={AlarmIcon} className="w-5 h-5 mt-[2px]" alt="alarm" />
              <span>알림</span>
            </div>
            {alertList.length ? (
              alertList.map(
                (list, index) =>
                  list.comments.length && (
                    <div key={index}>
                      <AlertList list={list} setCount={setCount} />
                      <button
                        type="button"
                        className="w-full text-right text-sm text-gray-600"
                        onClick={() => setCount(0)}
                      >
                        모든 알림 읽음
                      </button>
                    </div>
                  )
              )
            ) : (
              <div className="flex items-center justify-center text-gray-600 h-20">
                <p>새로운 알림이 없습니다.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
