import Link from "next/link";
import { getPost } from "@/dummies/posts";
import Button from "@/common/Atoms/Form/Button";
import LinkButton from "@/common/Atoms/LinkButton";
import Profile from "@/common/Molecules/Profile";
import ContentArea from "@/common/Organisms/ContentArea";
import CommentArea, { TComment } from "@/common/Templates/CommentArea";
import LinkedStudyCard from "./_components/LinkedStudyCard";

export default function PostDetail({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = getPost("10");
  const comments: TComment[] = [];
  return (
    <>
      <Link
        href="/post"
        className="flex flex-row gap-2 mt-5 mb-6 text-body-600"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 19L8 12L15 5"
            stroke="#202020"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>목록으로 돌아가기</span>
      </Link>
      <article>
        <div className="post-header">
          <div>
            <p className="text-label-assist text-[20px]">{post.filter.label}</p>
            <h2 className="text-H2">
              {post.contents.title} #{postId}
            </h2>
          </div>
          <div className="flex gap-6 items-center py-6 border-b border-b-line-normal">
            <Profile user={post.writer} size="large" />
            <p className="text-label-400 text-label-dimmed flex flex-row gap-2 items-center">
              <span>1일 전</span>
              {/* 본인이 작성한 글이라면 수정하기 버튼 show */}
              <LinkButton
                href="/post/write"
                variation="text"
                colors={{ bg: "", text: "text-label-dimmed" }}
                className="ml-2 text-label-400 font-normal"
              >
                수정하기
              </LinkButton>
            </p>
            <div className="flex gap-4 items-center ml-auto">
              <Button variation="icon">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.25 33C24.6269 33.0188 23.0886 32.2771 22.0924 30.9956C21.0962 29.7141 20.7569 28.0403 21.1755 26.472L11.7855 21.105C10.1629 22.5916 7.78454 22.9062 5.83125 21.8927C3.87795 20.8791 2.76583 18.7533 3.04707 16.5708C3.32831 14.3883 4.94301 12.6139 7.08943 12.1286C9.23585 11.6434 11.4568 12.5507 12.6495 14.4L21.174 9.5265C21.0637 9.10978 21.0053 8.68104 21 8.25C20.9785 5.74007 22.7217 3.55971 25.1748 3.02823C27.6279 2.49675 30.1172 3.76012 31.1365 6.05387C32.1557 8.34763 31.425 11.0418 29.3865 12.5063C27.3479 13.9707 24.5614 13.8031 22.713 12.105L13.4865 17.3775C13.4774 17.7665 13.423 18.1531 13.3245 18.5295L22.713 23.895C24.4414 22.3088 27.0132 22.064 29.0098 23.2955C31.0065 24.527 31.942 26.9351 31.3003 29.1915C30.6586 31.448 28.5959 33.0034 26.25 33ZM26.25 25.5C25.0074 25.5 24 26.5074 24 27.75C24 28.9926 25.0074 30 26.25 30C27.4927 30 28.5 28.9926 28.5 27.75C28.5 26.5074 27.4927 25.5 26.25 25.5ZM8.25002 15C7.00737 15 6.00002 16.0074 6.00002 17.25C6.00002 18.4926 7.00737 19.5 8.25002 19.5C9.49266 19.5 10.5 18.4926 10.5 17.25C10.5 16.0074 9.49266 15 8.25002 15ZM26.25 6C25.0074 6 24 7.00736 24 8.25C24 9.49264 25.0074 10.5 26.25 10.5C27.4927 10.5 28.5 9.49264 28.5 8.25C28.5 7.00736 27.4927 6 26.25 6Z"
                    fill="#464748"
                  />
                </svg>
              </Button>
              <Button variation="icon">
                <svg
                  width="40"
                  height="42"
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
        <ContentArea html={post.contents.body} />
        {/* TODO: 추후 Link 추가 필요 */}
        {/* {post.contents.linkedStudyId && ( */}
        <LinkedStudyCard studyId={post.contents.linkedStudyId || "0"} />
        {/* )} */}
      </article>
      <CommentArea comments={comments} />
    </>
  );
}
