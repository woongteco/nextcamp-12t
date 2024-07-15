import { ActionMeta } from "react-select";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import Input from "@/common/Molecules/Form/Input";
import ProfileImageInput from "./ProfileImageInput";
import ProfileInputArea from "./ProfileInputArea";
import Button from "@/common/Atoms/Form/Button";
import { CATEGORIES } from "@/constants/categories/job_category";
import { TProfileData } from "../page";

export default function FormEditProfile({
  data,
  setData,
}: {
  data: TProfileData;
  setData: Dispatch<SetStateAction<TProfileData>>;
}) {
  function changeProfileImage(profileUrl: string) {
    setData((p) => ({ ...p, profileUrl }));
  }
  const changeData = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log(e.target.name);
    const name = e.target.name;
    const value = e.target.value;
    setData((p) => ({ ...p, [name]: value }));
  };
  const changeMultiSelect: (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => void = (newValue) => {
    console.log({ newValue });
    if (Array.isArray(newValue)) setData((p) => ({ ...p, interest: newValue }));
  };

  return (
    <form action="" className="flex flex-col gap-8">
      <ProfileInputArea label="아바타 이미지">
        <ProfileImageInput setProfileImg={changeProfileImage} />
      </ProfileInputArea>
      <ProfileInputArea label="포지션 태그">
        <Input.Text
          name="positionTag"
          placeholder="이름 앞에 추가될 포지션 태그를 추가하세요"
          value={data.positionTag}
          onChange={changeData}
        />
      </ProfileInputArea>
      <ProfileInputArea label="내 소개">
        <Input.Textarea
          name="introduce"
          placeholder="나를 소개할 말을 추가하세요"
          onChange={changeData}
        />
      </ProfileInputArea>
      <ProfileInputArea label="이메일">
        <Input.Email name="email" value={data.email} onChange={changeData} />
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
      </ProfileInputArea>
      <ProfileInputArea label="관심 카테고리">
        {/* TODO:
         * - 사용자 데이터에서 관심 카테고리 기존 값 가져와서 defaultValue로 지정
         * - select 값 변경 시 프로필 미리보기에서 Keyword로 보여주기
         */}
        <Input.Select
          name="interest"
          placeholder="관심 카테고리를 추가하세요"
          isMulti
          options={CATEGORIES}
          value={data.interest}
          onChange={changeMultiSelect}
        />
      </ProfileInputArea>
      <Button type="submit" variation="solid" className="self-start">
        프로필 저장
      </Button>
    </form>
  );
}
