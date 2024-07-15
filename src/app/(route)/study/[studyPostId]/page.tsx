import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import StudyCardList from "@/common/Templates/CardList";
import CommentInput from "@/common/Organisms/Comment/CommentInput";

import { getStudiesData } from "@/dummies/studies";

import Thumbnail from "@/common/Atoms/Image/Thumbnail";

import StudyDetailContent from "./_components/StudyDetailContent";
import StudyDetailThumbnail from "./_components/StudyDetailThumbnail";
import BackButton from "../../_components/BackButton";
import Comment from "./_components/Comment";

export default function StudyPostComponent() {
  const studyCard = getStudiesData();
  return (
    <div className="mt-20 pb-20">
      <BackButton />
      <div>
        <StudyDetailThumbnail />
        <StudyDetailContent />

        <Comment />
      </div>

      <div className="mt-20">
        <SectionTitle size="md" className="pb-5">
          비슷한 스터디들
        </SectionTitle>
        <StudyCardList studyCard={studyCard} count={4} />
      </div>
    </div>
  );
}
