"use client";

import { MouseEventHandler, useRef, useState } from "react";
import Button from "@/common/Atoms/Form/Button";
import Input from "@/common/Molecules/Form/Input";

export default function CommentInput({
  init = false,
  placeholder = "댓글을 작성해보세요",
  onCancel,
  onSubmit,
}: {
  init?: boolean;
  placeholder?: string;
  onCancel?: () => void;
  onSubmit?: () => void;
}) {
  const [focus, setFocus] = useState<boolean>(init);
  const commentRef = useRef<HTMLFormElement>(null);
  return focus ? (
    <form
      action=""
      ref={commentRef}
      className="flex flex-row items-start w-full gap-4"
    >
      <Input.Textarea name="comment" placeholder={placeholder} />
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
