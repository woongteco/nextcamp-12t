"use client";

import { ChangeEvent, FocusEvent, FormEvent, useRef, useState } from "react";
import Button from "@/common/Atoms/Form/Button";
import Input from "@/common/Molecules/Form/Input";
import { useParams, useRouter } from "next/navigation";
import handleAlert from "@/common/Molecules/handleAlert";
import { cfetch } from "@/utils/customFetch";

type TCommentInput = {
  to: string;
  method: "POST" | "PATCH";
  init?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: FocusEvent<HTMLTextAreaElement, Element>) => void;
  onSubmit?: () => void;
  onCancel?: () => void;
};
export default function CommentInputForm(props: TCommentInput) {
  const {
    to,
    method,
    init = false,
    placeholder = "댓글을 작성해보세요",
    value,
    onChange,
    onCancel,
    onSubmit,
  } = props;
  const router = useRouter();
  const [focus, setFocus] = useState<boolean>(init);
  const commentRef = useRef<HTMLFormElement>(null);
  const params = useParams<{ postId?: string; studyPostId?: string }>();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const content = formData.get("content") as string;
    if (content.trim() === "") {
      handleAlert("error", "댓글 내용을 입력해주세요.");
      return;
    }

    const uris = [to];
    if (to === "/api/comment" && method === "POST") {
      const parentPost = (params?.postId || params?.studyPostId) ?? "";
      uris.push(`?parentId=${parentPost}`);
    }

    const result = await cfetch(uris.join(""), {
      method,
      body: formData,
    })
      .then((res) => res.json())
      .then(({ data }) => data)
      .catch((err) => {
        console.error(err);
        return err;
      });
    // console.log("post comment", result);
    if (result?.state) {
      onSubmit && onSubmit();
      // setFocus(false);
      router.refresh();
      handleAlert("success", result.message);
    } else {
      handleAlert("error", result.message);
    }
  }

  return focus ? (
    <form
      onSubmit={handleSubmit}
      ref={commentRef}
      className="flex flex-row items-start w-full gap-4"
    >
      <Input.Textarea
        name="content"
        placeholder={placeholder}
        defaultValue={value || ""}
        onBlur={(e) => {
          onChange && onChange(e);
        }}
      />
      <Button
        variation="outline"
        className="my-[6px]"
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
      <Button variation="solid" className="my-[6px]" type="submit">
        등록
      </Button>
    </form>
  ) : (
    <Button
      variation="outline"
      color="assist"
      size="full"
      className="h-[60px]"
      onClick={() => setFocus(true)}
    >
      <p className="text-base text-label-assist font-medium w-full text-left">
        {placeholder}
      </p>
    </Button>
  );
}
