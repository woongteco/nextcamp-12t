import Button from "@/common/Atoms/Form/Button";
import { LikeThumbIcon } from "@/common/Atoms/Image/Icon";
import { MouseEventHandler } from "react";

export default function LikeIconButton({
  onClick,
  liked = false,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  liked: boolean;
}) {
  return (
    <Button variation="icon" onClick={onClick}>
      <LikeThumbIcon active={liked} />
    </Button>
  );
}
