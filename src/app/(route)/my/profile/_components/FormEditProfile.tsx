import { ActionMeta } from "react-select";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
} from "react";
import Input from "@/common/Molecules/Form/Input";
import ProfileImageInput from "./ProfileImageInput";
import ProfileInputArea from "./ProfileInputArea";
import Button from "@/common/Atoms/Form/Button";
import { CATEGORIES } from "@/constants/categories/job_category";
import { Session } from "next-auth";

import { TProfileData } from "./ProfileForms";
import { profileAction } from "@/lib/action";
import handleAlert from "@/app/(auth)/_components/ErrorAlert";

export default function FormEditProfile({
  data,
  setData,
  session,
}: {
  data: TProfileData;
  setData: Dispatch<SetStateAction<TProfileData>>;
  session: Session | null;
}) {
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
    // console.log({ newValue });
    if (Array.isArray(newValue)) setData((p) => ({ ...p, interest: newValue }));
  };

  async function save(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const userId = "669bf4d4894a60fc9669e924";
    const formData = new FormData(e.currentTarget);

    try {
      await profileAction(userId, formData);
      handleAlert("success", "프로필 정보가 저장되었습니다.");
    } catch (error: any) {
      handleAlert("error", error.message);
    }
  }

  return (
    <form onSubmit={save} className="flex flex-col gap-8">
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
      {session?.account.provider === "credentials" && (
        <ProfileInputArea label="이메일">
          <Input.Email
            name="email"
            value={data.email}
            onChange={changeData}
            placeholder="이메일 주소를 입력하세요"
          />
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
      )}
      <ProfileInputArea label="관심 카테고리">
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
