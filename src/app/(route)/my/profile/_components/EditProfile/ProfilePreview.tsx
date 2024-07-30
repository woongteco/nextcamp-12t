import Keyword from "@/common/Atoms/Text/Keyword";
import { TProfileData } from "@/types/model/Profile";
import { Session } from "next-auth";

type TProfilePreviewProps = {
  session: Session | null;
  profile: TProfileData;
};

export default function ProfilePreview({
  session,
  profile,
}: TProfilePreviewProps) {
  return (
    <>
      {/* TODO: 프로필 미리보기 */}
      <div className="flex flex-col items-center py-4 gap-4">
        <p className="text-H3 text-label-normal">
          {profile.position_tag ? profile.position_tag + " " : ""}
          {profile.userId.name}
        </p>
        <p className="text-body-400 text-label-alt">
          <span className="block text-center">{profile.userId.email}</span>
          <span className="block text-center mt-2">
            {profile.introduce || <em>나를 소개할 말을 추가해주세요</em>}
          </span>
        </p>
        <div className="flex gap-2 flex-wrap justify-center">
          {profile.my_category.map((interestIn) => (
            <Keyword
              key={interestIn.value}
              bg="border border-main-600"
              text="text-main-600"
            >
              #{interestIn.label}
            </Keyword>
          ))}
        </div>
      </div>
    </>
  );
}
