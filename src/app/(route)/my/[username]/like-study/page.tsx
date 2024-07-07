import NoneStudyComponent from "@/app/(route)/study/_components/NoneStudyComponent";
import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import StudyCardItem from "@/common/Organisms/StudyCardItem";
import { getStudiesData } from "@/dummies/studies";

export default function MyStudyLiked() {
  const studyCard = getStudiesData();
  return (
    <>
      <SectionTitle size="md" className="mb-6">
        찜한 스터디
      </SectionTitle>
      <div>
        {/* TODO: 스터디 카드에서 찜한 스터디 표시 추가 필요 */}
        {studyCard.length === 0 ? (
          <NoneStudyComponent />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-gutter-sm xl:gap-gutter-xl">
            {studyCard.map((card) => (
              <StudyCardItem key={card.id} card={card} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
