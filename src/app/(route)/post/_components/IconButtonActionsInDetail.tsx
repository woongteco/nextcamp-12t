import { TPost } from "@/types/model/PostItem";
import LikeIconButton from "../../_components/LikeIconButton";
import ShareIconButton from "../../_components/ShareIconButton";

async function toggleLike(postId: string) {}

export default function IconButtonActionsInDetail({
  postId,
}: {
  postId: TPost["postId"];
}) {
  return (
    <>
      <ShareIconButton width="32" height="32" />
      <LikeIconButton liked={false} /* toggleLike={} */ />
    </>
  );
}
