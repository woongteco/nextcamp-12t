import { ChevronRightIcon } from "@/common/Atoms/Image/Icon";
import { TProps } from "@/types/component/props";
import Link from "next/link";

export default function UserCurrentStudySection() {
  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-gutter-md lg:gap-gutter-lg xl:gap-gutter-xl">
        <Link href="/my/study">
          <CurrentStudyBox>
            <div className="absolute right-6 top-6 flex items-start leading-[22px] text-main-600 font-semibold">
              {/* {참여 중인 스터디 수} */}
              <span>1개</span>
              <ChevronRightIcon strokeColor="#2a7ffe" />
            </div>
            <div className="flex flex-col justify-between h-full">
              <p className="text-H4 text-label-dimmed">스터디 일정</p>
              <div>
                <p className="text-label-neutral text-label-400">
                  UXUI디자인 스터디
                </p>
                <p className="text-label-normal text-H4">
                  웹 디자인 마스터하기!
                </p>
              </div>
            </div>
          </CurrentStudyBox>
        </Link>
        <Link href="/my/like-study">
          <CurrentStudyBox>
            <div className="absolute right-6 top-6">
              <ChevronRightIcon />
            </div>
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-H4 text-label-dimmed">찜한 스터디</p>
                {/* {찜한 스터디 수} */}
                <p className="text-[36px] font-bold text-normal mt-2 mb-auto">
                  11개
                </p>
              </div>
              {/* {찜한 스터디 명} */}
              <p className="text-label-neutral text-label-400">
                AI와 함께 공부하는 스터디 외 10개
              </p>
            </div>
          </CurrentStudyBox>
        </Link>
        <Link href="/my/study">
          <CurrentStudyBox>
            <div className="absolute right-6 top-6">
              <ChevronRightIcon />
            </div>
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-H4 text-label-dimmed">작성한 글</p>
                {/* {작성한 글 수} */}
                <p className="text-[36px] font-bold text-normal mt-2">1개</p>
              </div>
            </div>
          </CurrentStudyBox>
        </Link>
      </div>
    </>
  );
}

function CurrentStudyBox({ children }: TProps) {
  return (
    <div className="rounded-twenty border border-line-input p-6 h-[200px] relative transition-all hover:-translate-y-1 hover:shadow-emphasize">
      {children}
    </div>
  );
}
