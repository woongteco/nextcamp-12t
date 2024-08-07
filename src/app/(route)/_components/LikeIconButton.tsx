"use client";
import Button from "@/common/Atoms/Form/Button";
import { LikeThumbIcon } from "@/common/Atoms/Image/Icon";
import { delay } from "@/dummies/utils";

export default function LikeIconButton({
  liked = false,
  postId,
}: {
  liked: boolean;
  postId: string;
}) {
  async function toggleLike() {
    await delay(500);
    console.log(postId);
  }

  return (
    <Button.Icon onClick={toggleLike}>
      <LikeThumbIcon active={liked} />
    </Button.Icon>
  );
}
