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
import { Post } from "@/lib/schema";
import { notFound } from "next/navigation";
import handleAlert from "@/common/Molecules/handleAlert";
import { getProfile } from "@/lib/actions/profileAction";
import { ProfileSchema } from "@/types/model/Profile";

async function getPostData(postId: string) {
  try {
    const data: TPost | null = await Post.findOne({ postId });
    if (!data) {
      return {
        state: false,
        message: "해당 게시글을 찾을 수 없습니다.",
      };
    }
    return { state: true, data };
  } catch (error: any) {
    return { state: false, message: "게시글 정보를 가져오는데 실패했습니다." };
  }
}

async function deletePostData(postId: string) {
  try {
    await Post.findOneAndDelete({ postId });
    return { state: true, message: "글을 삭제했습니다." };
  } catch (error: any) {
    return { state: false, message: "게시글 정보를 가져오는데 실패했습니다." };
  }
}

async function increaseViewCount(postId: string) {
  try {
    const update = await Post.findOneAndUpdate(
      { postId },
      { view: 1 },
      { new: true }
    );
    return { state: true, data: update };
  } catch (error: any) {
    return { state: false, message: "Fail to update view count" };
  }
}

export default async function PostDetail({
  params: { postId },
}: {
  params: { postId: string };
}) {
  await increaseViewCount(postId);
  const session = await getSession();

  const postDetail = await getPostData(postId); // getCommunity(postId);

  if (postDetail.state === false) {
    return notFound();
  } else if (postDetail === undefined) {
    return notFound();
  }

  const post: TPost = postDetail.data as TPost;
  const { data: writer } = await getProfile(post.writer as string);

  console.log("포스트 상세 데이터", post);
  console.log("포스트 작성자", writer.userId._id);
  console.log("로그인 사용자", session?.user.id === writer.userId._id);

  async function deletePost() {
    "use server";
    try {
      // await toggle-like-action
      const result = await deletePostData(postId);
      if (result.state === false) {
        handleAlert("error", result.message);
        return;
      }
      handleAlert("success", result.message);
    } catch (error: any) {
      console.error("error", error);
      return { state: false, message: "상태 업데이트에 실패했습니다." };
    }
  }

  async function toggleLike() {
    "use server";
  }

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
            <Profile user={writer} size="large" />
            <p className="text-label-400 text-label-dimmed flex flex-row gap-2 items-center">
              <span>{getCreatedBefore(post.createdAt)}</span>
              {session?.user.id === writer.userId._id && (
                <>
                  <LinkButton
                    href={`/post/write/${post.postId}`}
                    variation="text"
                    className="ml-2 text-label-400 font-normal"
                  >
                    수정하기
                  </LinkButton>
                  <form action={deletePost}>
                    <button>삭제하기</button>
                  </form>
                </>
              )}
            </p>
            <div className="flex gap-4 items-center ml-auto">
              <ShareIconButton width="32" height="32" />
              <LikeIconButton liked={false} toggleLike={toggleLike} />
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
