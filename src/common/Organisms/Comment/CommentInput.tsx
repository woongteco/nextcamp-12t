"use client";

import { FormEvent, useRef, useState } from "react";
import Button from "@/common/Atoms/Form/Button";
import Input from "@/common/Molecules/Form/Input";
import { useParams, useRouter } from "next/navigation";
import { commentAction, getComment } from "@/lib/actions/commentAction";
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
  const params = useParams<{ postId?: string }>();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!sessionId) {
      return;
    }

    const formData = new FormData(e.currentTarget);
    const postId = params.postId ? params.postId : params.postId || "";

    try {
      const result = await commentAction(sessionId, postId, formData);

      if (result.state) {
        handleAlert("success", result.message);
        router.replace(`/post/${postId}`);
      } else {
        handleAlert("error", result.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return focus ? (
    <form
      onSubmit={handleSubmit}
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
