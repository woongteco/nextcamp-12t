/**
 * @props cols: "4" | "3" | "2"
 * "4" : 기본적인 스터디 카드 리스트의 column 개수입니다
 * "3" : 스터디 탐색 페이지의 large type 스터디 카드 혹은 사이드바가 있는 마이페이지와 같은 레이아웃에서 카드 리스트를 보여줄 때 사용합니다
 * "2" : 스터디 탐색 페이지의 wide type 스터디 카드에만 사용합니다
 */

import { TStudyCard } from "@/app/(route)/study/page";
import StudyCardItem from "../Organisms/StudyCardItem";

export default function StudyCardList({
  studyCard,
}: {
  studyCard: TStudyCard[];
}) {
  if (!studyCard) {
    return (
      <div className="w-full h-[19rem] bg-main-50 text-center">
        모집 중인 스터디가 없습니다.
        <br />첫 스터디를 만들어보세요!
      </div>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-6">
      {studyCard.map((card) => (
        <StudyCardItem card={card} />
      ))}
    </div>
  );
}
