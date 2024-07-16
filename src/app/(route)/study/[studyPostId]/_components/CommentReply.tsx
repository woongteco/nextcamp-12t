import ProfileImg from "@/common/Atoms/Image/ProfileImg";

export type TReplyComment = {
  replyCommentId: number;
  user: {
    userType: string;
    nickname: string;
    image: string;
  };
  content: string;
  createdAt: string;
};

export default function CommentReply({ reply }: { reply: TReplyComment }) {
  return (
    <li key={reply.replyCommentId}>
      <div className="flex items-center gap-4">
        <ProfileImg
          src="/images/profile/DummyProfileImg.jpg"
          alt="프로필 이미지"
          className="my-[6px]"
        />
        <span className="text-lg text-label-normal font-semibold">
          {reply.user.nickname}
        </span>
      </div>
      <div className="pl-14">
        <p className="pt-2 my-1 text-base font-normal text-body-400">
          {reply.content}
        </p>
        <div>
          <span className="pt-2 text-sm text-label-dimmed font-normal">
            {reply.createdAt}
          </span>
        </div>
      </div>
    </li>
  );
}
