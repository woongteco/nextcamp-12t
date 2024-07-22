import {
  getStudyLeaderUser,
  getStudyPostDetail,
} from "@/dummies/studypostdetail";
import StudyDetailContent from "./StudyDetailContent";
import StudyDetailThumbnail from "./StudyDetailThumbnail";
import CommentArea, { example } from "@/common/Templates/CommentArea";

export default function StudyDetail() {
  const user = getStudyLeaderUser();
  const { postId, thumbnailInfo, contents } = getStudyPostDetail();

  return (
    <div>
      <StudyDetailThumbnail thumbnailInfo={thumbnailInfo} />
      <StudyDetailContent contents={contents} user={user} />
      <CommentArea comments={example} />
    </div>
  );
}
