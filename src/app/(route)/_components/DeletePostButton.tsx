"use client";

import Button from "@/common/Atoms/Form/Button";
import handleAlert from "@/common/Molecules/handleAlert";
import useModal from "@/hooks/useModal";
import { TProps } from "@/types/component/props";
import { cfetch } from "@/utils/customFetch";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeletePostButton({
  postId,
  children,
}: { postId: string } & TProps) {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const { Modal, open, close } = useModal({
    children: (
      <div className="flex flex-col gap-5">
        <p className="text-H4">글을 삭제하시겠습니까?</p>
        <div className="flex items-center justify-center gap-4">
          <Button variation="outline" color="default" onClick={onDeleteCancel}>
            취소
          </Button>
          <Button
            variation="solid"
            color="danger"
            onClick={onDelete}
            disabled={disabled}
          >
            삭제
          </Button>
        </div>
      </div>
    ),
  });
  function onDeleteCancel() {
    close();
  }
  async function onDelete() {
    setDisabled(() => true);
    const result = await cfetch("/api/community/" + postId, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(({ data }) => data)
      .catch((err) => {
        // console.error(err);
        return { state: false, message: "상태 업데이트에 실패했습니다." };
      });

    if (!result?.success) {
      setDisabled(() => false);
      handleAlert("error", result.message);
      return;
    }

    handleAlert("success", result.message);
    router.replace("/post");
    router.refresh();
  }

  return (
    <>
      <button
        onClick={open}
        className="hover:underline hover:text-status-danger"
      >
        {children}
      </button>
      {Modal}
    </>
  );
}
