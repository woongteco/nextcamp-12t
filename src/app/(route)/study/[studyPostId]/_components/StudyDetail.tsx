import Comment from "./Comment";
import StudyDetailContent from "./StudyDetailContent";
import StudyDetailThumbnail from "./StudyDetailThumbnail";

export default function StudyDetail() {
  return (
    <div>
      <StudyDetailThumbnail />
      <StudyDetailContent />
      <Comment />
    </div>
  );
}
