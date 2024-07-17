import ProfileImg from "../Atoms/Image/ProfileImg";
import CommentItem from "../Organisms/Comment/CommentItem";
import CommentInput from "../Organisms/Comment/CommentInput";
import { TUserBase } from "@/types/model/User";

// 데이터 없이 화면 테스트 시 컴포넌트 내부에서 comments 대신 example로 변경 후 확인
const example: TComment[] = [
  {
    commentId: "0",
    content: "디자인 초보도 참여 가능할까요?",
    writer: {
      userId: "kimjihyeon",
      name: "김지현",
      role: "user",
      position: "",
      profileUrl: "",
    },
    createdAt: "2024-05-01 11:02",
    reply: [
      {
        originId: "0",
        commentId: "1",
        content:
          "네, 가능합니다. 서로 공유하면서 배워나가는 스터디 모임입니다!",
        writer: {
          userId: "leesunhyeong",
          name: "이선형",
          role: "pro",
          position: "UIUX 디자이너",
          profileUrl: "",
        },
        createdAt: "2024.05.02 13:02",
      },
      {
        originId: "0",
        commentId: "2",
        content: "스터디 참여 신청서 작성 부탁드려요",
        writer: {
          userId: "leesunhyeong",
          name: "이선형",
          role: "pro",
          position: "UIUX 디자이너",
          profileUrl: "",
        },
        createdAt: "2024.05.02 13:03",
      },
    ],
  },
  {
    commentId: "3",
    content: "저도 참여하고 싶어요! 진행중인데 참여 가능할까요?",
    writer: {
      userId: "shinjiwoo",
      name: "신지우",
      role: "user",
      position: "",
      profileUrl: "",
    },
    createdAt: "2024.05.03 13:52",
    reply: [],
  },
];

export type TComment = {
  commentId: string;
  content: string;
  writer: TUserBase;
  createdAt: string;
  reply: Array<Omit<TComment, "reply"> & { originId: string }>;
};
export default function CommentArea({
  titleText = "댓글",
  comments,
}: {
  titleText?: string;
  comments: TComment[];
}) {
  return (
    <section className="flex flex-col gap-8 mt-5 px-10 py-8 rounded-twenty border border-line-normal">
      <p className="flex flex-row items-center gap-1 text-H4">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.61804 20.372L7.14708 19.1528L7.15832 19.1442C7.47709 18.8901 7.63795 18.7618 7.81742 18.6704C7.97843 18.5884 8.15012 18.5287 8.32724 18.4925C8.52687 18.4517 8.73482 18.4517 9.15224 18.4517H17.8622C18.9838 18.4517 19.5453 18.4517 19.9741 18.2339C20.3517 18.0421 20.6589 17.7359 20.8513 17.3595C21.0698 16.9321 21.0698 16.3732 21.0698 15.2552V7.64857C21.0698 6.53065 21.0698 5.97086 20.8513 5.54346C20.6589 5.16713 20.3511 4.86139 19.9735 4.66965C19.5443 4.45166 18.9831 4.45166 17.8593 4.45166H6.22063C5.09679 4.45166 4.53445 4.45166 4.1052 4.66965C3.72762 4.86139 3.42087 5.16713 3.22848 5.54346C3.00977 5.97128 3.00977 6.53175 3.00977 7.65186V19.1229C3.00977 20.1886 3.00977 20.7213 3.22895 20.995C3.41957 21.233 3.70852 21.3715 4.01408 21.3711C4.36542 21.3707 4.7831 21.0377 5.61804 20.372Z"
            stroke="#0066FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{titleText}</span>
        <span className="text-main-600">{comments?.length || 0}</span>
      </p>
      <div>
        {comments.length === 0 ? (
          <span className="flex items-center justify-center text-H4 text-label-assist bg-alt rounded-twenty h-20">
            첫번째로 댓글을 남겨보세요!
          </span>
        ) : (
          comments.map((c) => <CommentItem key={c.commentId} comment={c} />)
        )}
      </div>
      <div className="flex flex-row gap-8 items-start w-full">
        <ProfileImg
          size="large"
          src="/images/profile/DummyProfileImg.jpg"
          alt="프로필 이미지"
          className="my-[6px]"
        />
        <CommentInput init={false} />
      </div>
    </section>
  );
}
