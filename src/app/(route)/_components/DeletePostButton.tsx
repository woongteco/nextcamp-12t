"use client";

import handleAlert from "@/common/Molecules/handleAlert";
import { deleteCommunity } from "@/lib/actions/communityAction";
import { TProps } from "@/types/component/props";
import { useRouter } from "next/navigation";

export default function DeletePostButton({
  postId,
  children,
}: { postId: string } & TProps) {
  const router = useRouter();

  async function deletePost() {
    try {
      const result = await deleteCommunity(postId);
      if (result.success === false) {
        handleAlert("error", result.message);
        return;
      }

      handleAlert("success", result.message);
      router.back();
      router.refresh();
    } catch (error: any) {
      console.error("error", error);
      return { state: false, message: "상태 업데이트에 실패했습니다." };
    }
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
