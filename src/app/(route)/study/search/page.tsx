import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import StudyCardList from "@/common/Templates/CardList";
import { getStudiesData } from "@/dummies/studies";
import StudyCategoryTabButtonList from "../_components/StudyCategoryTabButtonList";
import { GOALS, ONOFF } from "@/dummies/categories";
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
      <div className="flex items-center justify-between">
        <SectionTitle size="lg">스터디</SectionTitle>
        <SearchInput />
      </div>

      <div className="pt-[1.875rem]">
        <StudyCategorySelectBox searchParams={searchParams} />
        <div className="flex justify-between text-[#C2C3C4]">
          <StudyCategoryTabButtonList
            categoryName={GOALS}
            categoryIcons={CATEGORY_ICONS_NAME}
          />
          <StudyCategoryTabButtonList
            categoryName={ONOFF}
            categoryIcons={ONOFF_ICONS_NAME}
          />
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
