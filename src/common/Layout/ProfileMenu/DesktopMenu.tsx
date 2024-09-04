"use client";

import { AlarmIcon, CreateStudyIcon } from "@public/icons";
import Image from "next/image";
import Link from "next/link";
import DefaultProfileMenuItems from "./DefaultProfileMenuItems";
import { ReactNode } from "react";
import { TAlert, TAlertItem } from "./ResponsiveMenu";
import AlertList from "@/app/_components/AlertList";

type DesktopMenuProps = {
  profileImage: ReactNode;
  userId: string;
  data: TAlert[];
};

export default function DesktopMenu({
  profileImage,
  userId,
  data,
}: DesktopMenuProps) {
  const alertList = data.flatMap(({ alertList }) =>
    alertList.flatMap(({ type, typeId, title, comments }: TAlertItem) =>
      comments.map(({ _id, comment, read }) => ({
        type,
        typeId,
        title,
        comments: [{ _id, comment, read }],
      }))
    )
  );

  const commentReadList = data.flatMap((el) =>
    el.alertList.flatMap((item) => item.comments.map((c) => c.read))
  );

  async function handleReadAlert(id: string, type: string) {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/alert/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ type }),
    });
  }

  return (
    <div className="gap-8 items-center hidden lg:flex">
      <Link
        href={"/study/create"}
        className="flex items-center justify-center gap-2 w-36 py-2 leading-8 text-main-600 border border-solid border-main-600 rounded-[1.3rem]"
      >
        <Image src={CreateStudyIcon} alt="create study" />
        <span className="text-label-400">스터디 만들기</span>
      </Link>
      <div className="flex gap-2 items-center">
        <div className="relative [&:hover>ul]:block cursor-pointer px-2 ">
          {profileImage}
          <ul className="fixed top-[4.0625rem] right-4 xl:right-[calc(50vw-605px)] w-40 p-1 pt-2 bg-white shadow-emphasize rounded-b-xl hidden [&_li]:py-[6px] [&_li]:px-3 cursor-default">
            <DefaultProfileMenuItems />
          </ul>
        </div>
        <div className="w-[1px] h-6 bg-gray-400" />
        <div className="[&:hover>div]:block cursor-pointer h-16 flex items-center px-2">
          <div className="relative">
            <Image src={AlarmIcon} alt="alarm" />
            {commentReadList.length !== 0 &&
              commentReadList.includes(false) && (
                <div className="absolute w-2 h-2 -top-[2px] right-[3px] bg-red-500 rounded-full" />
              )}
          </div>
          <div className="fixed top-[4.0625rem] right-4 xl:right-[calc(50vw-690px)] w-80 p-3 bg-white shadow-emphasize rounded-b-xl hidden cursor-default">
            <div className="flex items-center gap-1 font-semibold text-lg">
              <Image src={AlarmIcon} className="w-5 h-5 mt-[2px]" alt="alarm" />
              <span>알림</span>
            </div>
            <ul>
              {commentReadList.length ? (
                alertList.map((alert) => (
                  <li
                    key={alert.comments[0].comment}
                    className="relative"
                    onClick={() =>
                      handleReadAlert(alert.comments[0]._id, "no-all")
                    }
                  >
                    <AlertList {...alert} />
                    {!alert.comments[0].read && (
                      <div className="absolute w-[6px] h-[6px] top-0 left-[2px] bg-red-500 rounded-full" />
                    )}
                  </li>
                ))
              ) : (
                <div className="flex items-center justify-center text-gray-600 h-20">
                  <p>새로운 알림이 없습니다.</p>
                </div>
              )}
              {alertList.length !== 0 && (
                <div className="text-right text-xs text-gray-600">
                  <button
                    type="button"
                    className="p-2 border rounded-lg hover:bg-gray-100"
                    onClick={() => handleReadAlert(userId, "read-all")}
                  >
                    모든 알림 읽음
                  </button>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
