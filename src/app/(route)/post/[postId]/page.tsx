import Link from "next/link";
import { getPost } from "@/dummies/posts";
import Button from "@/common/Atoms/Form/Button";
import LinkButton from "@/common/Atoms/LinkButton";
import Profile from "@/common/Molecules/Profile";
import ContentArea from "@/common/Organisms/ContentArea";
import CommentArea from "@/common/Templates/CommentArea";
import ShareIconButton from "../../_components/ShareIconButton";
import { getSession } from "@/auth";
import ReturnToListButton from "../_components/ReturnToListButton";
import LinkedStudyCard from "../_components/LinkedStudyCard";
import { Post } from "@/lib/schema";
import { getCommunity } from "@/lib/actions/communityAction";

export default async function PostDetail({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const session = await getSession();

  const postDetail = await getCommunity(postId);
  const post = postDetail.data;

  console.log("포스트 상세 데이터" + post);

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
              {/* 본인이 작성한 글이라면 수정하기 버튼 show */}
              {session?.user.id === post.writer._id && (
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
              <ShareIconButton />
              <Button variation="icon">
                <svg
                  width="32"
                  height="34"
                  viewBox="0 0 40 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.1129 19.5773L18.8032 6.77417C19.935 6.77417 21.0205 7.2238 21.8209 8.02416C22.6212 8.82451 23.0709 9.91002 23.0709 11.0419V16.7322H31.1226C31.5351 16.7275 31.9436 16.8126 32.3198 16.9814C32.6961 17.1503 33.0312 17.399 33.3018 17.7102C33.5725 18.0214 33.7722 18.3878 33.8872 18.7839C34.0022 19.18 34.0297 19.5963 33.9678 20.0041L32.0046 32.8072C31.9017 33.4857 31.5571 34.1041 31.0343 34.5485C30.5115 34.9929 29.8456 35.2334 29.1595 35.2256H13.1129M13.1129 19.5773V35.2256M13.1129 19.5773H8.84515C8.09057 19.5773 7.36689 19.8771 6.83332 20.4106C6.29976 20.9442 6 21.6679 6 22.4225V32.3805C6 33.1351 6.29976 33.8587 6.83332 34.3923C7.36689 34.9259 8.09057 35.2256 8.84515 35.2256H13.1129"
                    stroke="#464748"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
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
      {/* <CommentArea
        // comments={post.comments}
        postId={postId}
        sessionId={session?.user.id || ""}
      /> */}
    </div>
  );
}
