"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";

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
import handleAlert from "@/common/Molecules/handleAlert";
import { useRouter } from "next/navigation";
import { SingleValue } from "react-select";
import { TSelectOption } from "@/types/model/Category";

type Option = {
  readonly label: string;
  readonly value: string;
};

export default function StudyForm({ id }: { id: string }) {
  const router = useRouter();

  // Input 타입이 Number일 경우 (maxlength적용, 숫자만입력되게 적용)
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

  // 참가비용
  const [freeChecked, setFreeChecked] = useState<boolean>(false);
  const [free, setFree] = useState<number>(0);
  useEffect(() => {
    if (freeChecked === true) setFree(0);
  }, [freeChecked]);

  const FreeCheckedHandler = () =>
    setFreeChecked((freeChecked) => !freeChecked);

  // 스터디방식
  const locationCategoryOption = ONOFF.map((l) => ({
    value: l.value,
    label: l.label,
  }));
  const defaultLocationCategory = locationCategoryOption[0];
  const [locationCategory, setLocationCategory] = useState<Option | null>(
    defaultLocationCategory
  );
  const [placeChecked, setPlaceChecked] = useState<boolean>(false);
  const [place, setPlace] = useState<string>("");
  useEffect(() => {
    if (placeChecked === true) setPlace("");
  }, [placeChecked]);
  const PlaceCheckedHandler = () =>
    setPlaceChecked((placeChecked) => !placeChecked);

  console.log("location", locationCategory);

  // action
  async function action(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      await studyAction(id, formData);
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
              onChange={(e) => setFree(parseInt(e.target.value))}
              value={free}
              disabled={freeChecked}
            />
            <span>원</span>
          </div>
          <ButtonCheck>
            <ButtonCheck.Radio
              onClick={FreeCheckedHandler}
              checked={freeChecked}
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
            className="w-[510px]"
            name="location"
            options={locationCategoryOption}
            defaultValue={defaultLocationCategory}
            value={locationCategory}
            placeholder="스터디 방식"
            onChange={(newValue) => setLocationCategory(newValue)}
          />
          {locationCategory?.value === "offline" && (
            <div className="flex items-center gap-3">
              <Input.Text
                name="place"
                className="w-[380px]"
                placeholder="주소를 입력해주세요."
                onChange={(e) => setPlace(e.target.value)}
                value={place}
                disabled={placeChecked}
              />
              <ButtonCheck>
                <ButtonCheck.Radio
                  id="place-whether"
                  onClick={PlaceCheckedHandler}
                  checked={placeChecked}
                  label="장소 미정"
                />
              </ButtonCheck>
            </div>
          )}
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
        <LinkButton href="/study" variation="outline" size="form">
          작성 취소
        </LinkButton>
        <Button variation="solid" type="submit" size="form">
          작성 완료
        </Button>
      </div>
    </form>
  );
}
