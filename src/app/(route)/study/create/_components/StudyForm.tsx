"use client";

import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";

import Button from "@/common/Atoms/Form/Button";
import GridField from "@/common/Atoms/Form/Field";
import TextEditor from "@/common/Atoms/Form/TextEditor";
import LinkButton from "@/common/Atoms/LinkButton";
import { LabelText } from "@/common/Atoms/Form/Label";
import { AdditionIcon } from "@/common/Atoms/Image/Icon";

import ButtonCheck from "@/common/Molecules/Form/ButtonCheck";
import Input from "@/common/Molecules/Form/Input";
import { CATEGORIES } from "@/constants/categories/job_category";
import { GOALS } from "@/constants/categories/study_goal";
import { ONOFF } from "@/constants/categories/study_type";
import ThumbnailInput from "./ThumbnailInput";
import { studyAction } from "@/lib/actions/studyAction";
import { Session } from "next-auth";
import handleAlert from "@/common/Molecules/handleAlert";
import { useRouter } from "next/navigation";

export default function StudyForm({ session }: { session: Session }) {
  const router = useRouter();

  const onNumberInputFilter = (e: FormEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*)\./g, "$1");
    if (e.currentTarget.value.length > e.currentTarget.maxLength)
      e.currentTarget.value = e.currentTarget.value.slice(
        0,
        e.currentTarget.maxLength
      );
  };

  // 참가비 무료버튼
  const [checked, setChecked] = useState<boolean>(false);
  const [free, setFree] = useState(0);
  const checkedHandler = () => {
    setChecked((checked) => !checked);
    checked === false && setFree(0);
    // : setFree(free);
    console.log("checked", checked);
  };

  async function action(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!session) return;

    const formData = new FormData(e.currentTarget);

    try {
      await studyAction(formData);
      handleAlert("success", "스터디가 개설 되었습니다.");
      router.replace("/study");
    } catch (error) {
      if (error instanceof Error) {
        handleAlert("error", error.message);
      }
    }
  }

  return (
    <form onSubmit={action} className="flex flex-col gap-[36px]">
      <GridField>
        <LabelText form required>
          스터디 제목
        </LabelText>
        <Input.Text
          name="title"
          className="flex-1"
          placeholder="제목을 입력하세요."
          required
        />
      </GridField>
      <ThumbnailInput />
      <GridField>
        <LabelText form required>
          스터디 카테고리
        </LabelText>
        <div className="flex gap-3">
          <Input.Select
            name="jobCategory"
            options={CATEGORIES}
            placeholder="직무 카테고리"
          />
          <Input.Select
            name="targetCategory"
            options={GOALS}
            placeholder="목표 카테고리"
          />
        </div>
      </GridField>
      <GridField>
        <LabelText form required>
          모집 인원
        </LabelText>
        <div className="flex items-center gap-3">
          <Input.Number
            name="recruitmentPeople"
            onInput={onNumberInputFilter}
            maxLength={3}
            required
            placeholder="0"
            className="w-32 text-right"
          />
          <span>명</span>
        </div>
      </GridField>
      <GridField>
        <LabelText form required>
          모집 기간
        </LabelText>
        <Input.DateRange id="recruitmentPeriod" />
      </GridField>
      <GridField>
        <LabelText form required>
          스터디 기간
        </LabelText>
        <Input.DateRange id="studyPeriod" />
      </GridField>
      <GridField>
        <LabelText form required>
          참가 비용
        </LabelText>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Input.Number
              onInput={onNumberInputFilter}
              maxLength={7}
              name="expense"
              required
              placeholder="0"
              className="w-32 text-right"
              onChange={checkedHandler}
            />
            <span>원</span>
          </div>
          <ButtonCheck>
            <ButtonCheck.Radio
              onClick={checkedHandler}
              checked={checked}
              name="free"
              id="free"
              label="참가비 무료"
            />
          </ButtonCheck>
        </div>
      </GridField>
      <GridField>
        <LabelText form required>
          스터디 방식
        </LabelText>
        <div className="flex flex-col gap-6">
          <Input.Select
            name="location"
            options={ONOFF}
            placeholder="스터디 방식"
          />
          <div className="flex items-center gap-3">
            <Input.Text
              name="place"
              className="w-[380px]"
              placeholder="주소를 입력해주세요."
            />
            <ButtonCheck>
              <ButtonCheck.Radio
                id="place"
                label="장소 미정"
                defaultChecked={false}
              />
            </ButtonCheck>
          </div>
        </div>
      </GridField>
      <GridField>
        <LabelText form required>
          스터디 소개
        </LabelText>
        <TextEditor
          // name="content"
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
