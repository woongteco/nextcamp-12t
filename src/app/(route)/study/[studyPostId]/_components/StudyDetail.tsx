import { StudyDataFull } from "@/types/model/StudyCard";
import StudyDetailThumbnail from "./StudyDetailThumbnail";
import StudyDetailContent from "./StudyDetailContent";
import CommentArea from "@/common/Templates/CommentArea";
import { getSession } from "@/auth";

export default async function StudyDetail({ study }: { study: StudyDataFull }) {
  const session = await getSession();
  const { studyId, studyInfo, contents, heartCount, writer } = study;

  return (
    <div>
      <StudyDetailThumbnail studyInfo={studyInfo} heart={heartCount} />
      <StudyDetailContent contents={contents} writer={writer} />
      <CommentArea
        postId={String(studyId)}
        sessionId={session?.user.id || ""}
      />
    </div>
  );
}
