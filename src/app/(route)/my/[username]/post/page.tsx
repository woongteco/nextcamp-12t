import Link from "next/link";
import { getPosts } from "@/dummies/posts";
import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import Dropdown from "@/common/Molecules/Dropdown";
import LinkButton from "@/common/Atoms/LinkButton";
import PostListItem from "@/common/Organisms/PostListItem";
import NotFound from "@/app/not-found";

const POST_FROM = [
  { key: "community", label: "커뮤니티" },
  { key: "study", label: "스터디" },
];

type TQuery = { from?: string };

export default function MyPost({ searchParams }: { searchParams: TQuery }) {
  const posts = getPosts();
  const from = searchParams?.from || "community";
  const postFrom = POST_FROM.find((item) => item.key === from);
  if (postFrom === undefined) {
    return <NotFound />;
  }
  return (
    <>
      <SectionTitle size="md" className="mb-6">
        찜한 스터디
      </SectionTitle>
      <div className="flex flex-row items-start justify-between pb-6 border-b border-b-line-neutral">
        <Dropdown
          buttonLabel={postFrom.label}
          items={POST_FROM.map((item) => (
            <li
              key={item.key}
              className={`w-28 px-[12px] py-[6px] ${
                from === item.key ? "text-main-600" : ""
              }`}
            >
              <Link href={`/my/test/post?from=${item.key}`}>{item.label}</Link>
            </li>
          ))}
        />
        <LinkButton href="/post/write">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.08301 20.0001H20.0166M4.08301 20.0001V16.0001L12.0498 8.00012M4.08301 20.0001L8.06641 20.0001L16.0332 12.0001M12.0498 8.00012L14.9065 5.13146L14.9083 5.12976C15.3015 4.73488 15.4985 4.53709 15.7255 4.46301C15.9255 4.39775 16.141 4.39775 16.341 4.46301C16.5679 4.53704 16.7647 4.7346 17.1573 5.12892L18.8899 6.86872C19.2843 7.26474 19.4816 7.46284 19.5554 7.69117C19.6204 7.89201 19.6204 8.10835 19.5554 8.3092C19.4816 8.53736 19.2846 8.73516 18.8908 9.13061L18.8899 9.13146L16.0332 12.0001M12.0498 8.00012L16.0332 12.0001"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-body-600">커뮤니티 글 작성하기</span>
        </LinkButton>
      </div>
      <div className="flex flex-col gap-0">
        <ul>
          {posts.map((p) => (
            <PostListItem key={p.postId} item={p} />
          ))}
        </ul>
      </div>
    </>
  );
}
