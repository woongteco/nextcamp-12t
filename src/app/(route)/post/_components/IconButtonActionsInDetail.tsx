"use client";
import { TPost } from "@/types/model/PostItem";
import LikeIconButton from "../../_components/LikeIconButton";
import ShareIconButton from "../../_components/ShareIconButton";

export default function IconButtonActionsInDetail({
  postId,
}: {
  postId: TPost["postId"];
}) {
  return (
    <>
      <ShareIconButton width="32" height="32" />
      <LikeIconButton onClick={() => console.log(postId)} liked={false} />
    </>
  );
}
