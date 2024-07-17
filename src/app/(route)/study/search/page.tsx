import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import StudyCardList from "@/common/Templates/CardList";
import { getStudiesData } from "@/dummies/studies";
import StudyCategoryTabButtonList from "../_components/StudyCategoryTabButtonList";
import { GOALS } from "@/constants/categories/study_goal";
import { ONOFF } from "@/constants/categories/study_type";
import SearchInput from "../../_components/SearchInput";
import { TQuery } from "../page";
import StudyCategorySelectBox from "../_components/StudyCategorySelectBox";
import {
  CategoryTabIcon,
  categoryIconsName,
  onOffIconsName,
} from "@/app/_components/CategoryTab/TabIcons";

export default function StudySearchPage({
  searchParams,
}: {
  searchParams: TQuery;
}) {
  const studyCard = getStudiesData();

  return (
    <div className="mt-14 py-20">
      <div>
        <div className="flex items-center justify-between">
          <SectionTitle size="lg">스터디</SectionTitle>
          <SearchInput />
        </div>

        <div className="pt-[1.875rem]">
          <StudyCategorySelectBox searchParams={searchParams} />

          <div className="flex justify-between text-[#C2C3C4]">
            <StudyCategoryTabButtonList
              categoryName={GOALS}
              categoryIcons={categoryIconsName}
            />
            <StudyCategoryTabButtonList
              categoryName={ONOFF}
              categoryIcons={onOffIconsName}
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

      <StudyCardList studyCard={studyCard} count={16} />
    </div>
  );
}
