import ProfileImg from "@/common/Atoms/Image/ProfileImg";
import Keyword from "@/common/Atoms/Text/Keyword";
import { DummyProfileImg } from "@public/images";
import { TProfileData } from "./ProfileForms";

type TProfilePreviewProps = {
  name: string | null | undefined;
  data: TProfileData;
};

export default function ProfilePreview({ name, data }: TProfilePreviewProps) {
  return (
    <>
      {/* TODO: 프로필 미리보기 */}
      <div className="flex flex-col items-center py-4 gap-4">
        <ProfileImg
          size="xxlarge"
          src={data.profileUrl || DummyProfileImg}
          alt={name + "프로필 이미지"}
        />
        <p className="text-H3 text-label-normal">
          {data.positionTag ? data.positionTag + " " : ""}
          {name}
        </p>
        <p className="text-body-400 text-label-alt">
          <span className="block text-center">{data.email}</span>
          <span className="block text-center mt-2">
            {data.introduce || <em>나를 소개할 말을 추가해주세요</em>}
          </span>
        </p>
        <div className="flex gap-2 flex-wrap justify-center">
          {data.interest.map((interestIn) => (
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
