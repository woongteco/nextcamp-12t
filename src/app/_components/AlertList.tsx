import { TAlertItem } from "@/common/Layout/ProfileMenu/ResponsiveMenu";
import Link from "next/link";

export default function AlertList({ type, typeId, title }: TAlertItem) {
  return (
    <>
      <div className="flex flex-col justify-center text-sm my-3 gap-[5px]">
        <div className="flex flex-col rounded-lg px-3 py-2 hover:bg-gray-100">
          <Link href={`/post/${typeId}`}>
            <p className="font-medium truncate mb-[2px]">{title}</p>
            <p className="text-sm text-gray-500">
              {type === "post" ? "작성한 커뮤니티" : "개설한 스터디"}에 새로운
              댓글이 있습니다.
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
