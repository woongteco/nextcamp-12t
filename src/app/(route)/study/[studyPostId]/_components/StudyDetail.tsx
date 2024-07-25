import {
  getStudyLeaderUser,
  getStudyPostDetail,
} from "@/dummies/studypostdetail";
import StudyDetailContent from "./StudyDetailContent";
import StudyDetailThumbnail from "./StudyDetailThumbnail";
import CommentArea from "@/common/Templates/CommentArea";
import { comments } from "@/dummies/comments";

export default function StudyDetail() {
  const user = getStudyLeaderUser();
  const { studyPostId: postId, thumbnailInfo, contents } = getStudyPostDetail();

  return (
    <div>
      <StudyDetailThumbnail thumbnailInfo={thumbnailInfo} />
      <StudyDetailContent contents={contents} user={user} />
      <CommentArea comments={comments} sessionId="" />
    </div>
  );
}
