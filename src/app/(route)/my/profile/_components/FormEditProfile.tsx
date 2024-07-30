"use client";

import { ChangeEvent, FormEvent } from "react";
import Input from "@/common/Molecules/Form/Input";
import ProfileInputArea from "./ProfileInputArea";
import Button from "@/common/Atoms/Form/Button";
import { CATEGORIES } from "@/constants/categories/job_category";
import { useRouter } from "next/navigation";
import { profileAction, updateProfile } from "@/lib/actions/profileAction";
import { TProfileData } from "@/types/model/Profile";
import { CategoryOption } from "@/types/model/Category";
import { Session } from "next-auth";
import handleAlert from "@/common/Molecules/handleAlert";

type TProfileType = {
  position_tag: string;
  introduce: string;
  email: string;
  interest: Array<CategoryOption>;
};

export default function FormEditProfile({
  session,
  profile,
}: {
  session: Session | null;
  profile: TProfileData;
}) {
  const changeData = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log(e.target.name);
    const name = e.target.name;
    const value = e.target.value;
    // setData((p: any) => ({ ...p, [name]: value }));
  };

  const router = useRouter();

  // const changeMultiSelect: (
  //   newValue: unknown,
  //   actionMeta: ActionMeta<unknown>
  // ) => void = (newValue) => {
  //   // console.log({ newValue });
  //   if (Array.isArray(newValue))
  //     setData((p: any) => ({ ...p, interest: newValue }));
  // };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const id = session?.user.id;

    if (!id) {
      handleAlert("error", "사용자 ID가 없습니다.");
      return;
    }

    try {
      const result = profile
        ? await updateProfile(id, formData)
        : await profileAction(id, formData);

      if (result.state) {
        handleAlert("success", result.message);

        if (!profile) {
          router.replace("/my/profile");
        }
      } else {
        handleAlert("error", result.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // 기존에 profile 정보가 없다면 등록 정보가 있다면 수정 state
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <ProfileInputArea label="포지션 태그">
        <Input.Text
          name="positionTag"
          placeholder="이름 앞에 추가될 포지션 태그를 추가하세요"
          value={profile.position_tag}
          onChange={changeData}
        />
      </ProfileInputArea>
      <ProfileInputArea label="내 소개">
        <Input.Textarea
          name="introduce"
          placeholder="나를 소개할 말을 추가하세요"
          value={profile.introduce}
          onChange={changeData}
        />
      </ProfileInputArea>
      <ProfileInputArea label="이메일">
        <Input.Email
          name="email"
          value={session?.user.email || ""}
          onChange={changeData}
          placeholder="이메일 주소를 입력하세요"
          readOnly={session?.account.provider !== "credentials"}
        />
        {false && (
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
        )}
      </ProfileInputArea>
      <ProfileInputArea label="관심 카테고리">
        <Input.Select
          name="interest"
          placeholder="관심 카테고리를 추가하세요"
          isMulti
          options={CATEGORIES}
          // defaultValue={profile.interest}
          value={profile.my_category}
          // onChange={changeMultiSelect}
        />
      </ProfileInputArea>
      {profile ? (
        <Button type="submit" variation="solid" className="self-end">
          프로필 수정
        </Button>
      ) : (
        <Button type="submit" variation="solid" className="self-end">
          프로필 저장
        </Button>
      )}
    </form>
  );
}
