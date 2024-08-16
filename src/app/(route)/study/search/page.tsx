import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import StudyCategoryTabButtonList from "../_components/StudyCategoryTabButtonList";
import SearchInput from "../../_components/SearchInput";
import StudyCategorySelectBox from "../_components/StudyCategorySelectBox";
import {
  categoryIconsName,
  onOffIconsName,
} from "@/app/_components/CategoryTab/TabIcons";

import { GOALS } from "@/constants/categories/study_goal";
import { ONOFF } from "@/constants/categories/study_type";

import { TQuery } from "../page";
import StudyCardFilter from "../_components/StudyCardFilter";
import { StudyDataFull } from "@/types/model/StudyCard";
import { getStudy } from "@/lib/actions/studyAction";

export default async function StudySearchPage({
  searchParams,
}: {
  searchParams: TQuery;
}) {
  const result = await getStudy();
  let studyCardLists: StudyDataFull[];

  if (!result.state) {
    studyCardLists = [];
  } else {
    studyCardLists = result.data;
  }
  const studyCards = JSON.parse(JSON.stringify(studyCardLists));

  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <SectionTitle size="lg">스터디</SectionTitle>
          <SearchInput />
        </div>

        <div className="pt-[1.875rem]">
          <StudyCategorySelectBox searchParams={searchParams} />

          <div className="flex justify-between text-[#C2C3C4]">
            <StudyCategoryTabButtonList
              queryKey="c"
              categoryName={GOALS}
              categoryIcons={categoryIconsName}
            />
            <StudyCategoryTabButtonList
              queryKey="l"
              categoryName={ONOFF}
              categoryIcons={onOffIconsName}
            />
          </div>
        </div>
      </div>
      <StudyCardFilter studyCards={studyCards} />
    </>
  );
}
