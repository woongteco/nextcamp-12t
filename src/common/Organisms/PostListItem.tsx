import Link from "next/link";
import Keyword from "../Atoms/Text/Keyword";
import Profile from "../Molecules/Profile";
import { PostDataFull } from "@/types/model/PostItem";
import { getCreatedBefore } from "@/utils/getCreatedBefore";
import { NULL_USER_FOR_PROFILE } from "@/constants/null_user";

export default function PostListItem({ item }: { item: PostDataFull }) {
  const createdBefore = getCreatedBefore(item.createdAt);
  return (
    <>
      <li className="relative p-4 border-b border-b-line-neutral hover:bg-card">
        <Link href={`/post/${item.postId}`} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 pr-[120px]">
            <span className="text-body-nomral text-label-dimmed">
              {item.category.label}
            </span>
            <p className="text-[20px] text-black font-semibold w-full overflow-hidden text-nowrap text-ellipsis">
              {item.contents.title}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <Profile
              size="small"
              user={
                item.writer
                  ? {
                      profile_img: item.writer.profile_img,
                      name: item.writer.name,
                      role: item.writer.role,
                      position_tag: item.writer.position_tag,
                    }
                  : NULL_USER_FOR_PROFILE
              }
            />
            <span className="text-label-400 text-label-dimmed">
              {createdBefore} · 조회수 {item.view}회 · 좋아요 {item.like}개 ·
              {/* 댓글 스키마 변경으로 맞춰서 수정하기 */}
              {/* 댓글 {item.comments.length}개 */}
            </span>
          </div>
          {(item.category.value === "study" ||
            item.category.value === "project") && (
            <Keyword
              bg={
                item.category.isRecruiting
                  ? "bg-primary-heavy2"
                  : "bg-label-disable"
              }
              text={
                item.category.isRecruiting
                  ? "text-label-normal"
                  : "text-label-neutral"
              }
              className="absolute top-4 right-4"
            >
              {item.category.isRecruiting ? "모집중" : "모집완료"}
            </Keyword>
          )}
        </Link>
      </li>
    </>
  );
}
