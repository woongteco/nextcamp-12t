import Link from "next/link";
import NoneContentItemBase from "@/app/_components/NoneContentItemBase";
import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import StudyCardItem from "@/common/Organisms/StudyCardItem";
import { TStudyCard } from "@/types/model/StudyCard";
import { getStudyCards } from "@/dummies/studies";

export default function MyStudyLiked() {
  const studyCards: TStudyCard[] = getStudyCards();
  return (
    <>
      <SectionTitle size="md" className="mb-6">
        찜한 스터디
      </SectionTitle>
      <div>
        {studyCards.length === 0 ? (
          <NoneContentItemBase>
            <p className="text-main-500 font-semibold">
              찜한 스터디가 없습니다.
              <br />첫 스터디를 찜해보세요!
            </p>
            <Link
              href={"/study"}
              className="block py-3 px-4 bg-main-500 text-white font-semibold rounded-2xl"
            >
              스터디 구경가기
            </Link>
          </NoneContentItemBase>
        ) : (
          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-gutter-sm xl:gap-gutter-xl">
            {studyCards.map((card) => (
              <StudyCardItem key={card.studyId} card={card} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
