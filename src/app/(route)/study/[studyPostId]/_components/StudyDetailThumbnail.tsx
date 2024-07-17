import Keyword from "@/common/Atoms/Text/Keyword";
import { getStudyPostDetail } from "@/dummies/studypostdetail";
import Image from "next/image";
import StudyDetailThumbnailInfo from "./StudyDetailThumbnailInfo";
import StudyDetailThumbnailImg from "./StudyDetailThumbnailImg";

export default function StudyDetailThumbnail() {
  const post = getStudyPostDetail();
  const {
    thumbnailUrl,
    RecruitmentPeriod,
    jobCategory,
    title,
    heartCount,
    targetCategory,
    RecruitmentPeople,
    expense,
    studyPeriod,
    onoff,
  } = post;

  const thumbnailImg = {
    thumbnailUrl,
    RecruitmentPeriod,
  };
  const thumbnailInfo = {
    jobCategory,
    title,
    heartCount,
  };
  const thumbnailValue = {
    targetCategory,
    RecruitmentPeople,
    expense,
    studyPeriod,
    onoff,
  };

  return (
    <div className="flex gap-7">
      <StudyDetailThumbnailImg thumbnailImg={thumbnailImg} />
      <StudyDetailThumbnailInfo
        thumbnailInfo={thumbnailInfo}
        thumbnailValue={thumbnailValue}
      />
    </div>
  );
}
