import ProfileImg from "@/common/Atoms/Image/ProfileImg";
import CommentInput from "@/common/Organisms/Comment/CommentInput";
import { getComments } from "@/dummies/studypostdetail";
import { QandAIcon } from "@public/icons";
import Image from "next/image";
import CommentList from "./CommentList";

export default function Comment() {
  const { comments } = getComments();

  return (
    <div className="py-8 px-10 border border-line-neutral rounded-twenty">
      <div className="flex items-center gap-1 mb-8">
        <Image src={QandAIcon} alt="스터디 QandA" />
        <span className="text-lg font-semibold text-[#202020]">스터디 Q&A</span>
        <span className="text-lg font-semibold text-primary-strong">
          {comments.length}
        </span>
      </div>
      {/* 댓글 전체 */}
      {comments.length === 0 ? (
        <div>게시물 아직 없음</div>
      ) : (
        <ul>
          {comments.map((list) => {
            return <CommentList list={list} />;
          })}
        </ul>
      )}
      <div className="flex items-center gap-5">
        <ProfileImg
          size="xlarge"
          src="/images/profile/DummyProfileImg.jpg"
          alt="프로필 이미지"
          className="my-[6px]"
        />
        <CommentInput />
      </div>
    </div>
  );
}
