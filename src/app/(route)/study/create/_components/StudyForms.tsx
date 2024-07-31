"use client";

import { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { DefaultThumbnailImg } from "@public/images";

import Button from "@/common/Atoms/Form/Button";
import GridField from "@/common/Atoms/Form/Field";
import TextEditor from "@/common/Atoms/Form/TextEditor";
import LinkButton from "@/common/Atoms/LinkButton";
import Label, { LabelText } from "@/common/Atoms/Form/Label";
import { AdditionIcon } from "@/common/Atoms/Image/Icon";

import ButtonCheck from "@/common/Molecules/Form/ButtonCheck";
import Input from "@/common/Molecules/Form/Input";
import { CATEGORIES } from "@/constants/categories/job_category";
import { GOALS } from "@/constants/categories/study_goal";
import { ImageCheckIcon } from "@public/icons";
import { ONOFF } from "@/constants/categories/study_type";
import ThumbnailInput from "./ThumbnailInput";
import { studyAction } from "@/lib/actions/studyAction";

export default function FormComponent() {
  // 스터디 생성
  const defaultStudyDetailData = {
    thumbnailInfo: {
      thumbnailUrl: null,
      title: "",
      jobCategory: {
        label: "",
        value: "",
      },
      targetCategory: {
        label: "",
        value: "",
      },
      expense: 0,
      recruitmentPeople: 1,
      recruitmentPeriod: ["", ""],
      studyPeriod: ["", ""],
      location: {
        label: "",
        value: "",
      },
      place: null,
    },
    contents: {
      content: "",
      rule: [{}, {}],
      curriculum: [{}, {}],
    },
  };
  const [data, setData] = useState(defaultStudyDetailData);

  const onChangeData = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // 참가비 무료버튼
  const [expenseChecked, setExpenseChecked] = useState<boolean>(false);
  const onClickFree = () => {
    setExpenseChecked((expenseChecked) => !expenseChecked);
    console.log("checked", expenseChecked);

    // if (!expenseChecked) {
    //   if (data.thumbnailInfo.expense !== 0) {
    //     data.thumbnailInfo.expense === 0;
    //     expenseChecked;
    //   }
    // }
  };
  return (
    // onsubmit으로
    <form action={""} className="flex flex-col gap-[36px]">
      <GridField>
        <Label htmlFor="title" required>
          스터디 제목
        </Label>
        <Input.Text
          id="title"
          name="title"
          className="flex-1"
          placeholder="제목을 입력하세요."
          onChange={onChangeData}
          required
        />
      </GridField>
      <ThumbnailInput url={data.thumbnailInfo.thumbnailUrl} />
      <GridField>
        <Label htmlFor="category" required>
          스터디 카테고리
        </Label>
        <div className="flex gap-3">
          <Input.Select
            id="jobCategory"
            name="jobCategory"
            options={CATEGORIES}
            placeholder="직무 카테고리"
          />
          <Input.Select
            id="targetCategory"
            name="targetCategory"
            options={GOALS}
            placeholder="목표 카테고리"
          />
        </div>
      </GridField>
      <GridField>
        <Label htmlFor="recruitmentPeople" required>
          모집 인원
        </Label>
        <div className="flex items-center gap-3">
          <Input.Number
            id="recruitmentPeople"
            name="recruitmentPeople"
            onInput={(e) => {
              if (e.currentTarget.value.length > e.currentTarget.maxLength)
                e.currentTarget.value = e.currentTarget.value.slice(
                  0,
                  e.currentTarget.maxLength
                );
            }}
            maxLength={3}
            onChange={onChangeData}
            required
            placeholder="선택"
            className="w-32"
          />
          <span>명</span>
        </div>
      </GridField>
      <GridField>
        <Label htmlFor="recruitmentPeriod" required>
          모집 기간
        </Label>
        <Input.DateRange id="recruitmentPeriod" />
      </GridField>
      <GridField>
        <LabelText required>스터디 기간</LabelText>
        <Input.DateRange id="studyPeriod" />
      </GridField>
      <GridField>
        <Label htmlFor="expense" required>
          참가 비용
        </Label>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Input.Number
              onInput={(e) => {
                if (e.currentTarget.value.length > e.currentTarget.maxLength)
                  e.currentTarget.value = e.currentTarget.value.slice(
                    0,
                    e.currentTarget.maxLength
                  );
              }}
              maxLength={7}
              id="expense"
              name="expense"
              onChange={onChangeData}
              required
              placeholder="0"
              className="w-32"
            />
            <span>원</span>
          </div>
          <ButtonCheck>
            <ButtonCheck.Radio
              onClick={onClickFree}
              checked={expenseChecked}
              name="free"
              id="free"
              label="참가비 무료"
            />
          </ButtonCheck>
        </div>
      </GridField>
      <GridField>
        <Label htmlFor="location" required>
          스터디 방식
        </Label>
        <div className="flex flex-col gap-6">
          <Input.Select
            id="location"
            name="location"
            options={ONOFF}
            placeholder="스터디 방식"
          />
          <div className="flex items-center gap-3">
            <Input.Text
              className="w-[380px]"
              placeholder="주소를 입력해주세요."
            />
            <ButtonCheck>
              <ButtonCheck.Radio name="place" id="place" label="장소 미정" />
            </ButtonCheck>
          </div>
        </div>
      </GridField>
      <GridField>
        <Label htmlFor="content" required>
          스터디 소개
        </Label>
        <TextEditor
          id="content"
          className="h-[450px]"
          placeholder="스터디 소개, 스터디 규칙 등을 상세히 작성해 주세요."
        />
      </GridField>
      <GridField>
        <LabelText form>스터디 규칙</LabelText>
        <div className="flex items-center gap-4 flex-1">
          <Input.Text
            className="flex-1"
            placeholder="스터디 규칙을 정해주세요."
          />
          <button>
            <AdditionIcon color="#000" />
          </button>
        </div>
      </GridField>
      <GridField>
        <LabelText form>세부 커리큘럼</LabelText>
        <div className="flex items-center gap-4 flex-1">
          <Input.Text
            className="flex-1"
            placeholder="세부적인 커리큘럼을 정해주세요."
          />
          <button>
            <AdditionIcon color="#000" />
          </button>
        </div>
      </GridField>

      <div className="flex gap-gutter-xl items-center justify-center mt-24">
        <LinkButton
          href="/study"
          variation="outline"
          colors={{ bg: "bg-main-600", text: "text-main-600" }}
          className="w-[278px]"
        >
          작성 취소
        </LinkButton>
        <Button variation="solid" type="submit" className="w-[278px]">
          작성 완료
        </Button>
      </div>
    </form>
  );
}
