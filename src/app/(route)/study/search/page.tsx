import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import StudyCardList from "@/common/Templates/CardList";
import { getStudiesData } from "@/dummies/studies";
import StudyCategoryTabButtonList from "../_components/StudyCategoryTabButtonList";
import { GOALS } from "@/constants/categories/study_goal";
import { ONOFF } from "@/constants/categories/study_type";
import {
  CATEGORY_ICONS_NAME,
  ONOFF_ICONS_NAME,
} from "@/app/_components/CategoryTab/TabIcons";
import SearchInput from "../../_components/SearchInput";
import { TQuery } from "../page";
import StudyCategorySelectBox from "../_components/StudyCategorySelectBox";

export default function StudySearchPage({
  searchParams,
}: {
  searchParams: TQuery;
}) {
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
          <div className="mb-7"></div>
          <div className="flex justify-between text-[#C2C3C4]">
            <StudyCategoryTabButtonList
              LABEL_VALUE={GOALS}
              ICONS={STUDYCATEGORYICONS}
            />
            <StudyCategoryTabButtonList
              LABEL_VALUE={ONOFF}
              ICONS={ONOFFICONS}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end pb-6">
        <SectionTitle size="md">
          전체 검색 결과 {studyCard.length}개
        </SectionTitle>
        <div className="flex gap-3 font-semibold text-sm text-[#c2c3c4]">
          <span>최신 순</span>
          <span>좋아요 순</span>
        </div>
      </div>

      <div className="pb-6">
        <SectionTitle size="md">
          전체 검색 결과 {studyCard.length}개
        </SectionTitle>
        <div></div>
      </div>

      <StudyCardList studyCard={studyCard} count={16} />
    </div>
  );
}
