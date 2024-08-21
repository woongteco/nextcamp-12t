"use client";

import Link from "next/link";
import { TUserAlert } from "@/common/Layout/ProfileMenu/ResponsiveMenu";
import { Dispatch, SetStateAction } from "react";

type AlertListProps = {
  alertList: TUserAlert[];
  setCount: Dispatch<SetStateAction<number>>;
};

export default function AlertList({ alertList, setCount }: AlertListProps) {
  return (
    <>
      <ul className="flex flex-col justify-center gap-2 pb-2 text-sm mb-3">
        {alertList.map((list) =>
          list.comments.length ? (
            list.comments.map((item, index) => (
              <div key={item + index}>
                <li className="flex flex-col gap-1 rounded-lg p-2 hover:bg-gray-100">
                  <Link href={`post/${list.postId}`}>
                    <p className="font-medium">{list.contents.title}</p>
                    <p className="text-sm text-gray-500">
                      작성한 커뮤니티 글에 새로운 댓글이 있습니다.
                    </p>
                  </Link>
                </li>
                {index !== list.comments.length - 1 && (
                  <p className="block w-full h-[1px] bg-gray-300" />
                )}
              </div>
            ))
          ) : (
            <div key="none">새로운 알림이 없습니다.</div>
          )
        )}
      </ul>
      <button
        type="button"
        className="w-full text-right text-sm text-gray-600"
        onClick={() => setCount(0)}
      >
        모든 알림 읽음
      </button>
    </>
  );
}
