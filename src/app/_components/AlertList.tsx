"use client";

import Link from "next/link";
import { TUserAlert } from "@/common/Layout/ProfileMenu/ResponsiveMenu";
import { Dispatch, SetStateAction } from "react";

type AlertListProps = {
  list: TUserAlert;
};

export default function AlertList({ list }: AlertListProps) {
  return (
    <>
      <ul className="flex flex-col justify-center gap-2 pb-2 text-sm mb-3">
        <>
          <li className="flex flex-col gap-1 rounded-lg p-2 hover:bg-gray-100">
            <Link href={`/post/${list.postId}`}>
              <p className="font-medium">{list.contents.title}</p>
              <p className="text-sm text-gray-500">
                작성한 커뮤니티 글에 새로운 댓글이 있습니다.
              </p>
            </Link>
          </li>
        </>
      </ul>
    </>
  );
}
