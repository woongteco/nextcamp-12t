import { StudyApply } from "@/lib/schema";
import connectDB from "@/lib/db";
import { StudySchema } from "@/types/model/StudyCard";
import { ChevronRightIcon } from "@/common/Atoms/Image/Icon";
import { CurrentStatusLinkBox } from "./CurrentStatusBoxLayout";
import clsx from "clsx";

type State =
  | { state: false; message: string }
  | { state: true; data: StudySchema[] };

async function getMyStudies(userId: string): Promise<State> {
  await connectDB();

  try {
    const likedPosts = await StudyApply.find({ userId }).populate("postId");
    if (!likedPosts) {
      return { state: false, message: "지원한 스터디를 찾을 수 없습니다." };
    }
    return { state: true, data: [] };
  } catch (error) {
    return {
      state: false,
      message: "스터디 지원 정보를 가져오는데 실패했습니다.",
    };
  }
}

export default async function ParticipatedInStudyStatusContent({
  userId,
}: {
  userId: string;
}) {
  const result = userId
    ? await getMyStudies(userId)
    : { state: false, data: [] };
  const count = result.state === true ? result.data.length : 0;

  return (
    <CurrentStatusLinkBox href="/my/study">
      <div
        className={clsx(
          "absolute right-6 top-6 flex items-start leading-[22px] font-semibold",
          [count > 0 ? "text-main-600" : "text-[#828285]"]
        )}
      >
        <span>{count}개</span>
        <ChevronRightIcon strokeColor={count > 0 ? "#2a7ffe" : undefined} />
      </div>
      <div className="flex flex-col justify-between h-full">
        <p className="text-H4 text-label-dimmed">스터디 일정</p>
        {result.state && count > 0 ? (
          <div>
            <p className="text-label-neutral text-label-400">
              {result.data[0].jobCategory.label}
            </p>
            <p className="text-label-normal text-H4">{result.data[0].title}</p>
          </div>
        ) : (
          <div>
            <p className="text-label-neutral text-label-400">
              관심있는 스터디에 지원하고 참여해보세요!
            </p>
          </div>
        )}
      </div>
    </CurrentStatusLinkBox>
  );
}
