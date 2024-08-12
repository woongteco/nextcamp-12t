import LikeStudyStatusContent from "./UserCurrentStudy/LikeStudyStatusContent";
import MyPostsContent from "./UserCurrentStudy/MyPostsContent";
import ParticipatedInStudyStatusContent from "./UserCurrentStudy/ParticipatedInStudyStatusContent";

export default function UserCurrentStudySection({
  userId,
}: {
  userId: string;
}) {
  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-gutter-md lg:gap-gutter-lg xl:gap-gutter-xl">
        <ParticipatedInStudyStatusContent userId={userId} />
        <LikeStudyStatusContent userId={userId} />
        <MyPostsContent userId={userId} />
      </div>
    </>
  );
}
