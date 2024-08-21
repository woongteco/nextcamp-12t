"use client";
import { useRouter } from "next/navigation";
import likePostStore from "@/store/likePostStore";
import handleAlert from "@/common/Molecules/handleAlert";
import Button from "@/common/Atoms/Form/Button";
import { LikeThumbIcon } from "@/common/Atoms/Image/Icon";
import { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { ONE_SEC_IN_MS } from "@/constants/times_unit";
import clsx from "clsx";

export default function LikeIconButton({
  count,
  postId,
}: {
  count: number;
  postId: string;
}) {
  const { liked, fetchLiked, fetchLikeToggle } = likePostStore();
  const checkLiked = async () => {
    await fetchLiked(postId);
  };
  useEffect(() => {
    checkLiked();
  }, []);

  const router = useRouter();
  async function toggleLike() {
    const result = await fetchLikeToggle(postId);
    router.refresh();
    if (result.state) {
      handleAlert("success", result.message);
    } else {
      handleAlert("error", result.message);
    }
  }

  const { x } = useSpring({
    from: { x: 0 },
    x: liked ? 1 : 0,
    config: { duration: ONE_SEC_IN_MS },
  });

  return (
    <div className="flex gap-2 items-center">
      <Button.Icon
        className="[&:hover_path]:stroke-main-600"
        onClick={toggleLike}
      >
        <animated.div
          style={{
            opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
            scale: x.to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            }),
          }}
        >
          <LikeThumbIcon active={liked} />
        </animated.div>
      </Button.Icon>
      <span
        className={clsx("text-H4", [liked ? "text-main-600" : "opacity-30"])}
      >
        {count < 0 ? "0" : count}
      </span>
    </div>
  );
}
