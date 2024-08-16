"use client";
import { CommentOrReply } from "@/types/model/Comment";
import { useState } from "react";
import CommentInputForm from "./CommentInput";
import useModal from "@/hooks/useModal";
import Button from "@/common/Atoms/Form/Button";
import { cfetch } from "@/utils/customFetch";
import handleAlert from "@/common/Molecules/handleAlert";

type TCommentBodyLayout = {
  comment: CommentOrReply;
  commentId: string;
  canEdit: boolean;
  canReply?: boolean;
};
export function CommentBodyLayout(props: TCommentBodyLayout) {
  const { comment, commentId, canEdit, canReply = true } = props;

  const toURLs = [`/api/comment/`, commentId];
  if (comment?.replyId !== undefined) {
    toURLs.push("/reply/", comment.replyId);
  }
  const toURLString = toURLs.join("");

  const { Modal, open, close } = useModal({
    children: (
      <div className="flex flex-col gap-4">
        <p className="text-H4 mt-4">이 댓글을 삭제하시겠습니까?</p>
        <div className="bg-alt text-label-dimmed p-4 rounded-lg max-w-80 text-wrap whitespace-pre-line break-words hyphens-auto">
          {comment.content}
        </div>
        <div className="flex items-center justify-center gap-4">
          <Button variation="outline" color="default" onClick={onDeleteCancel}>
            취소
          </Button>
          <Button variation="solid" color="danger" onClick={onDelete}>
            삭제
          </Button>
        </div>
      </div>
    ),
  });

  const [writeReply, setWrite] = useState<boolean>(false);
  const [update, setUpdate] = useState<boolean>(false);
  const createdAt = new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "medium",
  });

  function onDeleteCancel() {
    close();
  }
  async function onDelete() {
    const result = await cfetch(toURLString, { method: "DELETE" })
      .then((res) => res.json())
      .then(({ data }) => {
        close();
        return data;
      })
      .catch((err) => err);

    if (result.success === false) {
      handleAlert("error", result.message);
    } else {
      handleAlert("success", result.message);
    }
  }

  const hadUpdated = comment.createdAt !== comment.updatedAt;
  return (
    <>
      {update ? (
        <CommentInputForm
          to={toURLString}
          method="PATCH"
          init={true}
          defaultValue={comment.content}
          onCancel={() => setUpdate(false)}
          onSubmit={() => setUpdate(false)}
        />
      ) : (
        <p className="text-body-400 text-label-normal whitespace-pre-line break-words hyphens-auto w-full">
          {comment.content}
        </p>
      )}
      <p className="text-label-400 text-label-dimmed flex flex-row flex-nowrap gap-6">
        <span>
          {hadUpdated
            ? createdAt.format(Date.parse(comment.updatedAt)) + " (수정됨)"
            : createdAt.format(Date.parse(comment.createdAt))}
        </span>
        {canReply && <button onClick={() => setWrite(true)}>답글쓰기</button>}
        {canEdit && (
          <>
            <button onClick={() => setUpdate((prev) => !prev)}>수정</button>
            <button onClick={open}>삭제</button>
          </>
        )}
      </p>
      {canReply && writeReply && (
        <CommentInputForm
          init={true}
          to={`/api/comment/${comment.commentId}/reply`}
          method="POST"
          onCancel={() => setWrite(false)}
          onSubmit={() => setWrite(false)}
        />
      )}
      {Modal}
    </>
  );
}
