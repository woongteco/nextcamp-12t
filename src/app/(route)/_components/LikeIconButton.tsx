import Button from "@/common/Atoms/Form/Button";
import { LikeThumbIcon } from "@/common/Atoms/Image/Icon";

export default function LikeIconButton({ liked = false }: { liked: boolean }) {
  return (
    <Button.Icon>
      <LikeThumbIcon active={liked} />
    </Button.Icon>
  );
}
