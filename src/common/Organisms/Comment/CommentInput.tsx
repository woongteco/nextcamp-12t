"use client";

import { FormEvent, useRef, useState } from "react";
import Button from "@/common/Atoms/Form/Button";
import Input from "@/common/Molecules/Form/Input";
import { useParams, useRouter } from "next/navigation";
import { commentAction } from "@/lib/actions/commentAction";
import handleAlert from "@/common/Molecules/handleAlert";

export default function CommentInput({
  init = false,
  placeholder = "댓글을 작성해보세요",
  sessionId,
  onCancel,
  onSubmit,
}: {
  init?: boolean;
  placeholder?: string;
  sessionId?: string;
  onCancel?: () => void;
  onSubmit?: () => void;
}) {
  const [focus, setFocus] = useState<boolean>(init);
  const commentRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const params = useParams<{ postId?: string | string[] }>();

  async function comment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!sessionId) {
      return;
    }

    const formData = new FormData(e.currentTarget);
    const postId = Array.isArray(params.postId)
      ? params.postId[0]
      : params.postId || "";

    try {
      await commentAction(sessionId, postId, formData);
      handleAlert("success", "커뮤니티 작성이 완료되었습니다.");
      router.replace(`/post/${postId}`);
    } catch (error) {
      if (error instanceof Error) {
        handleAlert("error", error.message);
      }
    }
  }

  return focus ? (
    <form
      onSubmit={comment}
      ref={commentRef}
      className="flex flex-row items-start w-full gap-4"
    >
      <Input.Textarea name="content" placeholder={placeholder} />
      <Button
        variation="outline"
        className="my-[6px]"
        colors={{ bg: "bg-main-600", text: "text-main-600" }}
        onClick={() => {
          if (commentRef?.current) {
            commentRef.current.reset();
          }
          setFocus(false);
          onCancel && onCancel();
        }}
      >
        취소
      </Button>
      <Button
        variation="solid"
        className="my-[6px]"
        type="submit"
        onClick={() => {
          onSubmit && onSubmit();
        }}
      >
        등록
      </Button>
    </form>
  ) : (
    <Button
      variation="outline"
      colors={{ bg: "bg-line-input" }}
      className="w-full border border-line-input h-[60px]"
      onClick={() => setFocus(true)}
    >
      <p className="text-base text-label-assist font-medium w-full text-left">
        {placeholder}
      </p>
    </Button>
  );
}
