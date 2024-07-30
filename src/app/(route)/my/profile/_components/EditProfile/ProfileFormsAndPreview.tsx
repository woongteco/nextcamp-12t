import Input from "@/common/Molecules/Form/Input";
import ProfileInputArea from "../ProfileInputArea";
import { CATEGORIES } from "@/constants/categories/job_category";
import { CategoryOption } from "@/types/model/Category";
import { TProfileData } from "@/types/model/Profile";
import ProfilePreview from "./ProfilePreview";

export default function ProfileFormsAndPreview({
  defaultValue,
}: {
  defaultValue?: TProfileData;
}) {
  return (
    <>
      <div className="flex flex-col gap-8">
        <ProfileInputArea label="포지션 태그">
          <Input.Text
            name="positionTag"
            placeholder="이름 앞에 추가될 포지션 태그를 추가하세요"
            // value={data.positionTag}
            // onChange={changeData}
          />
        </ProfileInputArea>
        <ProfileInputArea label="내 소개">
          <Input.Textarea
            name="introduce"
            placeholder="나를 소개할 말을 추가하세요"
            // onChange={changeData}
          />
        </ProfileInputArea>
        <ProfileInputArea label="이메일">
          <Input.Email
            name="email"
            defaultValue={defaultValue?.userId.email}
            // value={data.email}
            // onChange={changeData}
            placeholder="이메일 주소를 입력하세요"
            readOnly={true}
          />
          {/* {false && (
            <div className="flex gap-4 items-center">
              <Button
                variation="outline"
                colors={{ bg: "bg-main-600", text: "text-main-600" }}
              >
                이메일 인증
              </Button>
              <span className="text-label-400 text-main-600">
                *변경 후 재인증이 필요합니다.
              </span>
            </div>
          )} */}
        </ProfileInputArea>
        <ProfileInputArea label="관심 카테고리">
          <Input.Select
            name="interest"
            placeholder="관심 카테고리를 추가하세요"
            isMulti
            options={CATEGORIES}
            defaultValue={defaultValue?.my_category}
            // value={data.interest}
            // onChange={changeMultiSelect}
          />
        </ProfileInputArea>
      </div>
    </>
  );
}
