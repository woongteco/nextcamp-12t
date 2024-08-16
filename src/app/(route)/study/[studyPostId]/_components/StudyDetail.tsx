import {
  getStudyLeaderUser,
  getStudyPostDetail,
} from "@/dummies/studypostdetail";
import StudyDetailContent from "./StudyDetailContent";
import StudyDetailThumbnail from "./StudyDetailThumbnail";
import CommentArea from "@/common/Templates/CommentArea";
import { comments } from "@/dummies/comments";
import { getSession } from "@/auth";

export default async function StudyDetail() {
  const user = getStudyLeaderUser();
  const session = await getSession();
  const { studyPostId: postId, thumbnailInfo, contents } = getStudyPostDetail();

  return (
    <div>
      <StudyDetailThumbnail thumbnailInfo={thumbnailInfo} />
      <StudyDetailContent contents={contents} user={user} />
      <CommentArea postId={String(postId)} sessionId={session?.user.id || ""} />
    </div>
  );
}
