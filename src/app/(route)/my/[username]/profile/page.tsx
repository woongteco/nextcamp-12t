"use client";
import { ChangeEvent, useState } from "react";

import Button from "@/common/Atoms/Form/Button";
import Keyword from "@/common/Atoms/Text/Keyword";
import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import ProfileImg from "@/common/Atoms/Image/ProfileImg";
import Input from "@/common/Molecules/Form/Input";

import { CATEGORIES } from "@/dummies/categories";
import { getUser } from "@/dummies/user";
import { TProps } from "@/types/component/props";
import { DummyProfileImg } from "@public/images";

import ProfileImageInput from "../../_components/ProfileImageInput";
import DeleteAccountConfirm from "../../_components/DeleteAccountConfirm";

export default function MyProfilePage() {
  const user = getUser();
  const defaultData = {
    profileUrl: user.profileUrl,
    positionTag: user.position,
    introduce: "",
    email: user.email,
    interest: [],
    newPassword: "",
    phone: user.phone,
  };
  const [data, setData] = useState(defaultData);
  function changeProfileImage(profileUrl: string) {
    setData((p) => ({ ...p, profileUrl }));
  }
  function changeData(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) {
    console.log(e.target.name);
    const name = e.target.name;
    const value = e.target.value;
    setData((p) => ({ ...p, [name]: value }));
  }
  return (
    <>
      <SectionTitle size="md" className="mb-6">
        프로필 수정
      </SectionTitle>
      <div className="grid xl:grid-cols-[5fr_4fr] xl:items-start gap-gutter-xl">
        <div className="flex flex-col gap-6">
          <p className="text-H2 text-label-dimmed">{user.name}</p>
          <InputArea label="아바타 이미지">
            <ProfileImageInput setProfileImg={changeProfileImage} />
          </InputArea>
          <InputArea label="포지션 태그">
            <Input.Text
              name="positionTag"
              placeholder="이름 앞에 추가될 포지션 태그를 추가하세요"
              value={data.positionTag}
              onChange={changeData}
            />
          </InputArea>
          <InputArea label="내 소개">
            <Input.Textarea
              name="introduce"
              placeholder="나를 소개할 말을 추가하세요"
              onChange={changeData}
            />
          </InputArea>
          <InputArea label="이메일">
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
          </InputArea>
          <div className="w-full h-[1px] border-t border-t-line-normal"></div>
          <InputArea label="관심 카테고리">
            {/* TODO:
             * - 사용자 데이터에서 관심 카테고리 기존 값 가져와서 defaultValue로 지정
             * - select 값 변경 시 프로필 미리보기에서 Keyword로 보여주기
             */}
            <Input.Select
              name="interest"
              placeholder="관심 카테고리를 추가하세요"
              isMulti
              options={CATEGORIES}
            />
          </InputArea>
          <InputArea label="비밀번호 변경">
            <Input.Password
              name="newPassword"
              placeholder="변경할 비밀번호를 입력하세요"
              onChange={changeData}
            />
          </InputArea>
          <InputArea label="번호 인증">
            <div className="flex gap-4 items-center">
              <Input.Text
                name="phone"
                placeholder="핸드폰 번호를 입력하세요"
                onChange={changeData}
              />
              <Button
                variation="outline"
                colors={{ bg: "bg-main-600", text: "text-main-600" }}
              >
                인증하기
              </Button>
            </div>
          </InputArea>
          <div className="w-full h-[1px] border-t border-t-line-normal"></div>
          <DeleteAccountConfirm />
        </div>
        <div className="previewBox rounded-2xl xl:sticky xl:top-20 p-6 border border-line-normal flex flex-col gap-4">
          {/* TODO: 프로필 미리보기 */}
          <div className="flex flex-col items-center py-4 gap-4">
            <ProfileImg
              size="huge"
              src={data.profileUrl || DummyProfileImg}
              alt={user.name}
            />
            <p className="text-H3 text-label-normal">{user.name}</p>
            <p className="text-body-400 text-label-alt">
              <span className="block text-center">{data.email}</span>
              <span className="block text-center">
                {data.positionTag || "나를 소개할 말을 추가해주세요"}
              </span>
            </p>
            <div className="flex gap-2">
              <Keyword bg="border border-main-600" text="text-main-600">
                #UI/UX 디자인
              </Keyword>
              <Keyword bg="border border-main-600" text="text-main-600">
                #웹 디자인
              </Keyword>
            </div>
          </div>
          <Button variation="solid" className="self-end">
            프로필 저장
          </Button>
        </div>
      </div>
    </>
  );
}

function InputArea({ label, children }: { label: string } & TProps) {
  return (
    <div className="flex flex-col gap-2 justify-start">
      <p className="text-H4">{label}</p>
      {children}
    </div>
  );
}
