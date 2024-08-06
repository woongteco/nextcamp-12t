"use client";

import { ChangeEvent, FormEvent } from "react";
import Input from "@/common/Molecules/Form/Input";
import ProfileInputArea from "../ProfileInputArea";
import Button from "@/common/Atoms/Form/Button";
import {
  CATEGORIES,
  CATEGORIES_ALL_OPTIONS,
} from "@/constants/categories/job_category";
import { useRouter } from "next/navigation";
import { createProfile, updateProfile } from "@/lib/actions/profileAction";
import { TProfileData } from "@/types/model/Profile";
import { Session } from "next-auth";
import handleAlert from "@/common/Molecules/handleAlert";

export default function FormEditProfile({
  session,
  profile,
}: {
  session: Session | null;
  profile: TProfileData;
}) {
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const id = session?.user.id;

    if (!id) {
      handleAlert("error", "사용자 ID가 없습니다.");
      return;
    }

    const my_category = [];
    for (const [key, value] of formData) {
      if (key === "myCategory") {
        my_category.push(
          CATEGORIES_ALL_OPTIONS.find((opt) => opt.value === value)
        );
      }
    }

    formData.set("myCategory", JSON.stringify(my_category));

    try {
      const result = profile.userId._id
        ? await updateProfile(id, formData)
        : await createProfile(id, formData);

      if (result.state) {
        handleAlert("success", result.message);

        if (!profile.userId._id) {
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <ProfileInputArea label="포지션 태그">
        <Input.Text
          name="positionTag"
          placeholder="이름 앞에 추가될 포지션 태그를 추가하세요"
          defaultValue={profile.position_tag}
        />
      </ProfileInputArea>
      <ProfileInputArea label="내 소개">
        <Input.Textarea
          name="introduce"
          placeholder="나를 소개할 말을 추가하세요"
          defaultValue={profile.introduce}
        />
      </ProfileInputArea>
      {session?.account.provider === "credentials" && (
        <ProfileInputArea label="이메일">
          <Input.Email
            name="email"
            defaultValue={session?.user.email || ""}
            placeholder="이메일 주소를 입력하세요"
            readOnly
          />
          {/* <div className="flex gap-4 items-center">
            <Button
              variation="outline"
              colors={{ bg: "bg-main-600", text: "text-main-600" }}
            >
              이메일 인증
            </Button>
            <span className="text-label-400 text-main-600">
              *변경 후 재인증이 필요합니다.
            </span>
          </div> */}
        </ProfileInputArea>
      )}
      <ProfileInputArea label="관심 카테고리">
        <Input.Select
          name="myCategory"
          placeholder="관심 카테고리를 추가하세요"
          isMulti
          options={CATEGORIES}
          defaultValue={profile.my_category}
        />
      </ProfileInputArea>
      <Button type="submit" variation="solid" className="self-end">
        변경 내용 저장
      </Button>
    </form>
  );
}
