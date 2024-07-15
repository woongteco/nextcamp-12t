"use client";
import Profile from "@/common/Molecules/Profile";
import { TComment } from "@/common/Templates/CommentArea";

function CommentBodyLayout({
  comment,
  canReply = true,
}: {
  comment: Omit<TComment, "reply">;
  canReply?: boolean;
}) {
  return (
    <>
      <p className="text-body-400 text-label-normal">{comment.content}</p>
      <p className="text-label-400 text-label-dimmed flex flex-row flex-nowrap gap-6">
        <span>{comment.createdAt}</span>
        {canReply && <button>답글쓰기</button>}
        {/* 아래 수정, 삭제 버튼은 작성자=로그인한 사용자인 경우, */}
        <button>수정</button>
        <button>삭제</button>
      </p>
    </>
  );
}

export default function CommentItem({ comment }: { comment: TComment }) {
  return (
    <div className="flex flex-col gap-5 border-t py-6 border-t-line-normal">
      <Profile size="default" user={comment.writer!} />
      <div className="flex flex-col gap-5 pl-14">
        <CommentBodyLayout comment={comment} />
        {comment?.reply &&
          comment.reply.length > 0 &&
          comment.reply.map((reply) => (
            <div className="flex flex-col gap-5 pt-6" key={reply.commentId}>
              <Profile size="default" user={reply.writer} />
              <div className="flex flex-col gap-5 pl-14">
                <CommentBodyLayout comment={reply} canReply={false} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
