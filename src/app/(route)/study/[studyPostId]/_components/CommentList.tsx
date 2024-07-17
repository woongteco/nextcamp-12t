import ProfileImg from "@/common/Atoms/Image/ProfileImg";
import CommentReply, { TReplyComment } from "./CommentReply";

export type TComment = {
  commentId: number;
  user: {
    userType: string;
    nickname: string;
    image: string;
  };
  content: string;
  createdAt: string;
  replyComment: TReplyComment[];
};

export default function CommentList({ list }: { list: TComment }) {
  return (
    <li className="py-6 border-t" key={list.commentId}>
      <div className="flex items-center gap-4">
        <ProfileImg
          src="/images/profile/DummyProfileImg.jpg"
          alt="프로필 이미지"
          className="my-[6px]"
        />
        <span className="text-lg text-label-normal font-semibold">
          {list.user.nickname}
        </span>
      </div>
      <div className="pl-14">
        <p className="my-1 text-base font-normal text-body-400">
          {list.content}
        </p>
        <div className="pt-2 text-sm text-label-dimmed font-normal">
          <span>{list.createdAt}</span>
          <button
            className="ml-5"
            // onClick={() => <CommentInput />}
          >
            답글쓰기
          </button>
        </div>
      </div>

      {/* 대댓글 */}
      {(list.replyComment?.length as number) > 0 ? (
        <ul className="flex flex-col gap-4 mt-4 pl-14">
          {list.replyComment.map((reply) => {
            return <CommentReply key={reply.replyCommentId} reply={reply} />;
          })}
        </ul>
      ) : null}
    </li>
  );
}
