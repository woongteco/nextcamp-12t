import { ChevronRightIcon } from "@/common/Atoms/Image/Icon";
import { CurrentStatusLinkBox } from "./CurrentStatusBoxLayout";
import { PostDataFull } from "@/types/model/PostItem";
import connectDB from "@/lib/db";
import { Post } from "@/lib/schema";

type State =
  | { state: false; message: string }
  | { state: true; data: PostDataFull[] };

async function getPostsData(userId: string): Promise<State> {
  await connectDB();

  try {
    const posts = await Post.find({ writer: userId }).sort({
      createdAt: "desc",
    });
    if (!posts) {
      return { state: false, message: "해당 게시글을 찾을 수 없습니다." };
    }
    return { state: true, data: posts };
  } catch (error) {
    return { state: false, message: "게시글 정보를 가져오는데 실패했습니다." };
  }
}

export default async function MyPostsContent({ userId }: { userId: string }) {
  const result = userId
    ? await getPostsData(userId)
    : { state: false, data: [] };
  const count = result.state ? result.data.length : 0;

  return (
    <CurrentStatusLinkBox href="/my/post">
      <div className="absolute right-6 top-6">
        <ChevronRightIcon />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <p className="text-H4 text-label-dimmed">작성한 글</p>
          <p className="text-[36px] font-bold text-normal mt-2">{count}개</p>
        </div>
      </div>
    </CurrentStatusLinkBox>
  );
}
