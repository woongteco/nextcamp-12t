import Profile from "@/common/Molecules/Profile";
import ContentArea from "@/common/Organisms/ContentArea";
import { getSession } from "@/auth";
import ReturnToListButton from "../_components/ReturnToListButton";
import LinkedStudyCard from "../_components/LinkedStudyCard";
import CommentArea from "@/common/Templates/CommentArea";
import ShareIconButton from "../../_components/ShareIconButton";
import LikeIconButton from "../../_components/LikeIconButton";
import { PostDataFull, PostSchema } from "@/types/model/PostItem";
import { getCreatedBefore } from "@/utils/getCreatedBefore";
import { Post } from "@/lib/schema";
import { notFound } from "next/navigation";
import { getProfile } from "@/lib/actions/profileAction";
import DeletePostButton from "../../_components/DeletePostButton";
import Link from "next/link";
import { revalidatePath } from "next/cache";

async function getSinglePostData(postId: string) {
  try {
    const data: PostDataFull | null = await Post.findOne({ postId })
      .populate("writer")
      .populate("comments");
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

async function increaseViewCount(postId: string) {
  try {
    const update = await Post.findOneAndUpdate(
      { postId },
      { $inc: { view: 1 } },
      { new: true }
    );
    revalidatePath("/post");
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
  //
  await increaseViewCount(postId);

  // TODO: 로그인한 사용자 정보 상태값으로 대체 필요
  const session = await getSession();

  const postDetail = await getSinglePostData(postId); // getCommunity(postId);

  if (postDetail.state === false) {
    return notFound();
  } else if (postDetail === undefined) {
    return notFound();
  }

  const post = postDetail.data as PostDataFull;
  const { data: writer } = await getProfile(post.writer as string);

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
            <p className="text-label-400 text-label-dimmed flex flex-row gap-8 items-center">
              <span>{getCreatedBefore(post.createdAt)}</span>
              {String(session?.user.id) === String(writer.userId._id) && (
                <>
                  <Link
                    href={`/post/write/${post.postId}`}
                    className="hover:underline hover:text-main-600"
                  >
                    수정하기
                  </Link>
                  <DeletePostButton postId={postId}>삭제하기</DeletePostButton>
                </>
              )}
            </p>
            <div className="flex gap-4 items-center ml-auto">
              <ShareIconButton width="32" height="32" />
              <LikeIconButton liked={false} postId={postId} />
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
