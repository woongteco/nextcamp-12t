import Link from "next/link";
import { TUserAlert } from "@/common/Layout/ProfileMenu/ResponsiveMenu";

type AlertListProps = {
  list: TUserAlert;
};

export default function AlertList({ list }: AlertListProps) {
  return (
    <>
      <ul className="flex flex-col justify-center text-sm my-3">
        <>
          <li className="flex flex-col gap-1 rounded-lg px-2 pt-3 pb-0 hover:bg-gray-100">
            <Link href={`/post/${list.postId}`} className="border-b pb-3">
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
