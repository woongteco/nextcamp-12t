"use client";

import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import StudyCardList from "@/common/Templates/CardList";
import { StudySchema } from "@/types/model/StudyCard";
import { includesSearchQuery } from "@/utils/includesSearchQuery";
import { useSearchParams } from "next/navigation";

export default function StudyCardFilter({
  studyCards,
}: {
  studyCards: StudySchema[];
}) {
  const params = useSearchParams();
  const jobKey = params.get("job_c");
  const targetKey = params.get("c");
  const locationKey = params.get("l");
  const queryKey = params.get("q");

  const filteredStudyCards = studyCards.filter((card) => {
    const matchesJobKey = jobKey ? card.jobCategory.label === jobKey : true;
    const matchesTargetKey = targetKey
      ? card.targetCategory.value === targetKey
      : true;
    const matchesLocationKey = locationKey
      ? card.location.value === locationKey
      : true;
    const matchesQueryKey = queryKey
      ? includesSearchQuery(card.title, queryKey)
      : true;

    return (
      matchesJobKey && matchesTargetKey && matchesLocationKey && matchesQueryKey
    );
  });

  return (
    <>
      <div className="flex justify-between items-end pb-6">
        <SectionTitle size="md">
          전체 검색 결과 {filteredStudyCards.length}개
        </SectionTitle>
        {/* <div className="flex gap-3 font-semibold text-sm text-[#c2c3c4]">
          <span>최신 순</span>
          <span>좋아요 순</span>
        </div> */}
      </div>
      <StudyCardList studyCards={filteredStudyCards} />
    </>
  );
}
