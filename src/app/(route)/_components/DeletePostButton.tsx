"use client";

import handleAlert from "@/common/Molecules/handleAlert";
import { TProps } from "@/types/component/props";
import { cfetch } from "@/utils/customFetch";
import { useRouter } from "next/navigation";

export default function DeletePostButton({
  postId,
  children,
}: { postId: string } & TProps) {
  const router = useRouter();

  async function deletePost() {
    const result = await cfetch("/api/community/" + postId, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(({ data }) => {
        // console.log(data);
        return data;
      })
      .catch((err) => {
        // console.error(err);
        return { state: false, message: "상태 업데이트에 실패했습니다." };
      });

    if (!result?.success) {
      handleAlert("error", result.message);
      return;
    }

    handleAlert("success", result.message);
    router.back();
    router.refresh();
  }

  return (
    <button
      onClick={deletePost}
      className="hover:underline hover:text-status-danger"
    >
      {children}
    </button>
  );
}
