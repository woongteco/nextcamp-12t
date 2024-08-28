import { ChevronRightIcon } from "@/common/Atoms/Image/Icon";
import { CurrentStatusLinkBox } from "./CurrentStatusBoxLayout";
import { StudySchema } from "@/types/model/StudyCard";
import connectDB from "@/lib/db";
import { StudyLike } from "@/lib/schema";

type State =
  | { state: false; message: string }
  | { state: true; data: StudySchema[] };

async function getLikeStudies(userId: string): Promise<State> {
  await connectDB();

  try {
    const likedStudies = await StudyLike.find({ userId }).populate("postId");
    if (!likedStudies) {
      return { state: false, message: "찜한 스터디를 찾을 수 없습니다." };
    }

    return { state: true, data: [] };
  } catch (error) {
    return {
      state: false,
      message: "찜한 스터디 정보를 가져오는데 실패했습니다.",
    };
  }
}

export default async function LikeStudyStatusContent({
  userId,
}: {
  userId: string;
}) {
  const result = userId
    ? await getLikeStudies(userId)
    : { state: false, data: [] };
  const count = result.state ? result.data.length : 0;
  const previewName = result.state
    ? count > 0
      ? `${result.data[0].studyInfo.title as string}`
      : "관심있는 스터디를 찜해보세요!"
    : "관심있는 스터디를 찜해보세요!";

  return (
    <CurrentStatusLinkBox href="/my/like-study">
      <div className="absolute right-6 top-6">
        <ChevronRightIcon />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <p className="text-H4 text-label-dimmed">찜한 스터디</p>
          <p className="text-[36px] font-bold text-normal mt-2 mb-auto">
            {count}개
          </p>
        </div>
        <p className="text-label-neutral text-label-400">
          {previewName}
          {count > 1 && ` 외 ${count - 1}개`}
        </p>
      </div>
    </CurrentStatusLinkBox>
  );
}
