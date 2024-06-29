import Link from "next/link";
import Keyword from "../Atoms/Text/Keyword";
import Image from "next/image";
import { DummyProfileImg } from "../../../public/images";
import { TPost } from "@/app/(route)/post/page";

function getCreatedBefore(createdAt: string): string {
  const createdTime = Date.parse(createdAt);
  const thisTime = Date.now();
  // second: n/1000, minute: n/1000/60, hour: n/1000/60/60, day: n/1000/60/60/24 ...
  const diff = (thisTime - createdTime) / 1000;
  const times: Array<{
    unit:
      | "year"
      | "quarter"
      | "month"
      | "week"
      | "day"
      | "hour"
      | "minute"
      | "second";
    milliSeconds: number;
  }> = [
    { unit: "year", milliSeconds: 60 * 60 * 24 * 365 },
    { unit: "month", milliSeconds: 60 * 60 * 24 * 30 },
    { unit: "week", milliSeconds: 60 * 60 * 24 * 7 },
    { unit: "day", milliSeconds: 60 * 60 * 24 },
    { unit: "hour", milliSeconds: 60 * 60 },
    { unit: "minute", milliSeconds: 60 },
  ];
  const rtf = new Intl.RelativeTimeFormat("ko", { style: "short" });

  // 년 단위부터 알맞는 단위 찾기
  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    // 큰 단위는 0보다 작은 소수 단위 나옴
    if (betweenTime > 0) {
      return rtf.format(betweenTime * -1, value.unit);
    }
  }

  // 모든 단위가 맞지 않을 시
  return "방금 전";
}

export default function PostListItem({ item }: { item: TPost }) {
  const createdBefore = getCreatedBefore(item.createdAt);
  return (
    <>
      <li className="relative p-4 border-b border-b-line-neutral hover:bg-card">
        <Link href={`/post/${item.postId}`} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 pr-[120px]">
            <span className="text-body-nomral text-[#828285]">
              {item.filter.label}
            </span>
            <p className="text-[20px] text-black font-semibold w-full overflow-hidden text-nowrap text-ellipsis">
              {item.contents.title}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="flex gap-2 items-center">
              <Image
                src={item.writer.profileUrl || DummyProfileImg}
                alt={`${item.writer.name} 프로필 이미지`}
                className="block w-5 h-5 rounded-full"
              />
              <span className="text-label-bold text-[#828285]">
                {item.writer.position} {item.writer.name}
              </span>
            </p>
            <span className="text-label-nomral text-[#828285]">
              {createdBefore} · 조회수 {item.view}회 · 좋아요 {item.like}개
            </span>
          </div>
          {(item.filter.value === "study" ||
            item.filter.value === "project") && (
            <Keyword
              bg={
                item.filter.isRecruiting
                  ? "bg-primary-heavy2"
                  : "bg-label-disable"
              }
              text={
                item.filter.isRecruiting
                  ? "text-label-normal"
                  : "text-label-neutral"
              }
              style="absolute top-4 right-4"
            >
              {item.filter.isRecruiting ? "모집중" : "모집완료"}
            </Keyword>
          )}
        </Link>
      </li>
    </>
  );
}
