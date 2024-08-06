import LinkButton from "@/common/Atoms/LinkButton";
import Profile from "@/common/Molecules/Profile";
import ContentArea from "@/common/Organisms/ContentArea";
import { getSession } from "@/auth";
import ReturnToListButton from "../_components/ReturnToListButton";
import LinkedStudyCard from "../_components/LinkedStudyCard";
import { getCommunity } from "@/lib/actions/communityAction";
import CommentArea from "@/common/Templates/CommentArea";
import ShareIconButton from "../../_components/ShareIconButton";
import LikeIconButton from "../../_components/LikeIconButton";
import { TPost } from "@/types/model/PostItem";
import { getCreatedBefore } from "@/utils/getCreatedBefore";
import { getPost } from "@/dummies/posts";
import { delay } from "@/dummies/utils";

async function getPostData(postId: string) {
  await delay(1000);
  const post = getPost(postId);
  return { state: true, data: post };
}

export default async function PostDetail({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const session = await getSession();

  const postDetail = await getPostData(postId); // getCommunity(postId);
  const post: TPost = postDetail.data;

  console.log("포스트 상세 데이터" + post);

  async function toggleLike() {
    try {
      // await toggle-like-action
    } catch (error: any) {
      console.error("error", error);
      return { state: false, message: "상태 업데이트에 실패했습니다." };
    }
  }

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
              <span>{getCreatedBefore(post.createdAt)}</span>
              {session?.user.id === post.writer._id && (
                <LinkButton
                  href={`/post/write/${post.postId}`}
                  variation="text"
                  className="ml-2 text-label-400 font-normal"
                >
                  수정하기
                </LinkButton>
              )}
            </p>
            <div className="flex gap-4 items-center ml-auto">
              <ShareIconButton width="32" height="32" />
              <LikeIconButton liked={false} /* toggleLike={toggleLike} */ />
              <span className="text-H4">{post.like}</span>
            </div>
          </div>
        </div>
        <div className="px-4">
          <ContentArea html={post.contents.body} />
        </div>
        <LinkedStudyCard studyId={post.contents.linkedStudyId || ""} />
      </article>
      <CommentArea
        sessionId={session?.user.id || ""}
        comments={post.comments}
      />
    </div>
  );
}
