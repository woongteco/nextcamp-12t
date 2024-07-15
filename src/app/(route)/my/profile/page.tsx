"use client";
import { ChangeEvent, useState } from "react";

import Button from "@/common/Atoms/Form/Button";
import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import Input from "@/common/Molecules/Form/Input";

import { CATEGORIES } from "@/constants/categories/job_category";
import { getUser } from "@/dummies/user";

import ProfileImageInput from "./_components/ProfileImageInput";
import DeleteAccountConfirm from "./_components/DeleteAccountConfirm";
import ProfilePreview from "./_components/ProfilePreview";
import { ActionMeta } from "react-select";
import { CategoryOption } from "@/types/model/Category";
import { ProfileInputArea } from "./_components/ProfileInput";

export type TProfileData = {
  profileUrl: string;
  positionTag: string;
  introduce: string;
  email: string;
  interest: Array<CategoryOption>;
};

export default function MyProfilePage() {
  const user = getUser();
  const defaultData = {
    profileUrl: user.profileUrl,
    positionTag: user.position,
    introduce: "",
    email: user.email,
    interest: user.interest,
  };
  const [data, setData] = useState<TProfileData>(defaultData);
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
    <>
      <SectionTitle size="md" className="mb-6">
        프로필 수정
      </SectionTitle>
      <div className="grid xl:grid-cols-[5fr_4fr] xl:items-start gap-gutter-xl">
        <div className="flex flex-col gap-8">
          <p className="text-H2 text-label-dimmed">{user.name}</p>
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
            <Input.Email
              name="email"
              value={data.email}
              onChange={changeData}
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
          <Button
            variation="outline"
            colors={{ bg: "bg-main-600", text: "text-main-600" }}
            className="self-start"
          >
            프로필 저장
          </Button>
          <div className="w-full h-[1px] border-t border-t-line-normal"></div>
          <ProfileInputArea label="비밀번호 변경">
            <Input.Password
              name="password"
              placeholder="현재 비밀번호를 입력하세요"
            />
            <Input.Password
              name="newPassword"
              placeholder="변경할 비밀번호를 입력하세요"
            />
            <Input.Password
              name="newPasswordCheck"
              placeholder="변경할 비밀번호를 다시 입력하세요"
            />
            <Button
              variation="outline"
              colors={{ bg: "bg-main-600", text: "text-main-600" }}
              className="self-start"
              disabled
            >
              비밀번호 변경
            </Button>
          </ProfileInputArea>
          <div className="w-full h-[1px] border-t border-t-line-normal"></div>
          <ProfileInputArea label="번호 인증">
            <div className="flex gap-4 items-center">
              <Input.Text name="phone" placeholder="핸드폰 번호를 입력하세요" />
              <Button
                variation="outline"
                colors={{ bg: "bg-main-600", text: "text-main-600" }}
              >
                인증하기
              </Button>
            </div>
          </ProfileInputArea>
          <div className="w-full h-[1px] border-t border-t-line-normal"></div>
          <DeleteAccountConfirm />
        </div>
        <div className="previewBox rounded-2xl xl:sticky xl:top-20 p-6 border border-line-normal flex flex-col gap-4">
          <ProfilePreview
            name={user.name}
            data={{
              positionTag: data.positionTag,
              profileUrl: data.profileUrl,
              email: data.email,
              introduce: data.introduce,
              interest: data.interest,
            }}
          />
        </div>
      </div>
    </>
  );
}
