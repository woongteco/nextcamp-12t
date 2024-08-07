"use client";
import Button from "@/common/Atoms/Form/Button";
import { LikeThumbIcon } from "@/common/Atoms/Image/Icon";

export default function LikeIconButton({
  liked = false,
  toggleLike,
}: {
  liked: boolean;
  toggleLike: (formData?: FormData) => void;
}) {
  return (
    <form action={toggleLike}>
      <Button.Icon>
        <LikeThumbIcon active={liked} />
      </Button.Icon>
    </form>
  );
}
