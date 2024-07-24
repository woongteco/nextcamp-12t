"use client";
import Profile from "@/common/Molecules/Profile";
import { CommentSchema } from "@/types/model/Comment";
import { useState } from "react";
import CommentInput from "./CommentInput";

function CommentBodyLayout({
  comment,
  canEdit,
  canReply = true,
}: {
  comment: Omit<CommentSchema, "reply">;
  canEdit: boolean;
  canReply?: boolean;
}) {
  const [writeReply, setWrite] = useState<boolean>(false);
  const createdAt = new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "medium",
  });
  return (
    <>
      <p className="text-body-400 text-label-normal">{comment.content}</p>
      <p className="text-label-400 text-label-dimmed flex flex-row flex-nowrap gap-6">
        <span>{createdAt.format(Date.parse(comment.createdAt))}</span>
        {canReply && <button onClick={() => setWrite(true)}>답글쓰기</button>}
        {canEdit && (
          <>
            <button>수정</button>
            <button>삭제</button>
          </>
        )}
      </p>
      {writeReply && (
        <CommentInput init={true} onCancel={() => setWrite(false)} />
      )}
    </>
  );
}

export default function CommentItem({
  comment,
  canEdit,
}: {
  comment: CommentSchema;
  canEdit: boolean;
}) {
  return (
    <div className="flex flex-col gap-5 border-t py-6 border-t-line-normal">
      <Profile size="default" user={comment.writer!} />
      <div className="flex flex-col gap-5 pl-14">
        <CommentBodyLayout comment={comment} canEdit={canEdit} />
        {comment?.reply &&
          comment.reply.length > 0 &&
          comment.reply.map((reply) => (
            <div className="flex flex-col gap-5 pt-6" key={reply.commentId}>
              <Profile size="default" user={reply.writer} />
              <div className="flex flex-col gap-5 pl-14">
                <CommentBodyLayout
                  comment={reply}
                  canReply={false}
                  canEdit={canEdit}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
