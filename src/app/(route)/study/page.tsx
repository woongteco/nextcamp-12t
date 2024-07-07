import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import StudyCardList from "@/common/Templates/CardList";
import LargeStudyList from "./_components/LargeStudyList";
import WideStudyList from "./_components/WideStudyList";

import { getUser } from "@/dummies/user";
import { getStudiesData } from "@/dummies/studies";
import { GOALS, ONOFF } from "@/dummies/categories";

import StudyCategoryTabButtonList from "./_components/StudyCategoryTabButtonList";
import {
  ONOFFICONS,
  STUDYCATEGORYICONS,
} from "./_components/icon/StudyCategoryIcons";
import {
  CATEGORY_ICONS_NAME,
  ONOFF_ICONS_NAME,
} from "@/app/_components/CategoryTab/TabIcons";

export default function StudyComponent() {
  const user = getUser();
  const studyCard = getStudiesData();

  return (
    <div className="py-20">
      <div>
        <div className="flex items-center justify-between">
          <SectionTitle size="lg">스터디</SectionTitle>
          <div className="relative">
            <input
              type="search"
              placeholder="검색어를 입력하세요"
              className="w-[380px] py-2 pr-9 pl-6 border border-line-normal rounded-lg placeholder:text-label-assist placeholder:text-label-nomral"
            />
            <span className="absolute right-2 top-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="pt-[1.875rem] mb-11">
          <div></div>
          <div className="flex justify-between text-[#C2C3C4]">
            <StudyCategoryTabButtonList
              LABEL_VALUE={GOALS}
              ICONS_NAME={CATEGORY_ICONS_NAME}
            />
            <StudyCategoryTabButtonList
              LABEL_VALUE={ONOFF}
              ICONS_NAME={ONOFF_ICONS_NAME}
            />
          </div>
        </div>

        <div className="flex gap-[6.25rem] flex-col">
          <div>
            <SectionTitle size="md" className="pb-6">
              {user.name}님이 찾던 케미 좋은 프로 스터디
            </SectionTitle>
            <div className="flex flex-col gap-6">
              <div>
                <SectionTitle size="sm" className="pb-3">
                  디자인 프로 스터디
                </SectionTitle>
                <WideStudyList />
              </div>
              <div>
                <SectionTitle size="sm" className="pb-3">
                  취업 / 포트폴리오 프로 스터디
                </SectionTitle>
                <WideStudyList />
              </div>
            </div>
          </div>
          <div>
            <SectionTitle size="md" className="pb-6">
              오늘의 프로 스터디를 통해 빠른 성장을 경험해 보세요!
            </SectionTitle>
            <StudyCardList studyCard={studyCard} count={4} />
          </div>
          <div>
            <SectionTitle size="md" className="pb-6">
              프로없이, 우리끼리도 스터디해요
            </SectionTitle>
            <StudyCardList studyCard={studyCard} count={4} />
          </div>
          <div>
            <SectionTitle size="md" className="pb-6">
              케밋에서 인기있는 프로의 스터디
            </SectionTitle>
            <LargeStudyList />
          </div>
        </div>
      </div>
    </div>
  );
}
