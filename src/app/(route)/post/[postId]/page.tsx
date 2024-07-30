import Link from "next/link";
import { getPost } from "@/dummies/posts";
import LinkButton from "@/common/Atoms/LinkButton";
import Profile from "@/common/Molecules/Profile";
import ContentArea from "@/common/Organisms/ContentArea";
import CommentArea from "@/common/Templates/CommentArea";
import ShareIconButton from "../../_components/ShareIconButton";
import { getSession } from "@/auth";
import ReturnToListButton from "../_components/ReturnToListButton";
import LinkedStudyCard from "../_components/LinkedStudyCard";
import LikeIconButton from "../../_components/LikeIconButton";
import IconButtonActionsInDetail from "../_components/IconButtonActionsInDetail";

export default async function PostDetail({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const session = await getSession();
  const post = getPost(postId);
  return (
    <div>
      <ReturnToListButton />
      <article>
        <div className="post-header border-y border-y-line-normal">
          <div>
            <p className="text-label-assist text-body-400 pt-6 pb-2">
              {post.category.label}
            </p>
            <h2 className="text-H2">{post.contents.title}</h2>
          </div>
          <div className="flex gap-6 items-center py-6">
            <Profile user={post.writer} size="large" />
            <p className="text-label-400 text-label-dimmed flex flex-row gap-2 items-center">
              <span>1일 전</span>
              {session?.user.id === post.writer.userId && (
                <LinkButton
                  href="/post/write"
                  variation="text"
                  colors={{ bg: "", text: "text-label-dimmed" }}
                  className="ml-2 text-label-400 font-normal"
                >
                  수정하기
                </LinkButton>
              )}
            </p>
            <div className="flex gap-4 items-center ml-auto">
              <IconButtonActionsInDetail postId={post.postId} />
              <span className="text-H4">{post.like}</span>
            </div>
          </div>
        </div>
        <div className="px-4">
          <ContentArea html={post.contents.body} />
        </div>
        {post.contents.linkedStudyId && (
          <Link href={`/study/${post.contents.linkedStudyId}`}>
            <LinkedStudyCard studyId={post.contents.linkedStudyId || "0"} />
          </Link>
        )}
      </article>
      <CommentArea
        comments={post.comments}
        sessionId={session?.user.id || ""}
      />
    </div>
  );
}
