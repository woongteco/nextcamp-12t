"use client";

import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from "react";

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

import handleAlert from "@/common/Molecules/handleAlert";
import { useRouter } from "next/navigation";
import { createStudy } from "@/lib/actions/studyAction";
import { StudySchema } from "@/types/model/StudyCard";

type Option = {
  readonly label: string;
  readonly value: string;
};

export type StudyValue = Omit<
  StudySchema,
  "writer" | "comments" | "createdAt" | "heartCount"
>;

export default function StudyForm({
  id,
  defaultValue,
}: {
  id: string;
  defaultValue?: StudyValue;
}) {
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

  // 스터디 카테고리
  const [jobCategory, setJobCategory] = useState("");
  const jobCategoryOption = CATEGORIES.map((m) => ({
    value: m.value,
    label: m.label,
  }));
  const [targetCategory, setTargetCategory] = useState("");
  const targetCategoryOption = GOALS.map((m) => ({
    value: m.value,
    label: m.label,
  }));

  // 모집기간
  const [recruitmentPeriod, setRecruitmentPeriod] = useState<
    [Date, Date] | null
  >(null);
  const handleRecruitmentDateChange = (dates: [Date, Date]) => {
    setRecruitmentPeriod(dates);
  };

  // 스터디기간
  const [studyPreiod, setStudyPeriod] = useState<[Date, Date] | null>(null);
  const handleStudyDateChange = (dates: [Date, Date]) => {
    setStudyPeriod(dates);
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
  const [locationCategory, setLocationCategory] = useState("");
  const locationCategoryOption = ONOFF.map((l) => ({
    value: l.value,
    label: l.label,
  }));
  const [placeChecked, setPlaceChecked] = useState<boolean>(false);
  const [place, setPlace] = useState<string>("");
  useEffect(() => {
    if (placeChecked === true) setPlace("");
  }, [placeChecked]);
  const PlaceCheckedHandler = () =>
    setPlaceChecked((placeChecked) => !placeChecked);

  const [content, setContent] = useState<string>("");

  // 규칙 & 커리큘럼
  const [ruleList, setRuleList] = useState<string[]>([""]);
  const ruleAddtionHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setRuleList([...ruleList, ""]);
  };
  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    const newList = [...ruleList];
    newList[index] = event.target.value;
    setRuleList(newList);
  };
  const onHandleInputRuleRemove = (
    index: number,
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (ruleList.length > 1) {
      const newRuleList = ruleList.filter((_, i) => i !== index);
      setRuleList(newRuleList);
    } else {
      alert("하나의 입력창이 있어야합니다.");
    }
  };

  const [curriculumList, setCurriculumList] = useState<string[]>([""]);
  const curriculumAddtionHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurriculumList([...curriculumList, ""]);
  };
  const curriculumHandleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    const newList = [...curriculumList];
    newList[index] = event.target.value;
    setCurriculumList(newList);
  };
  const onHandleInputCurriculumRemove = (
    index: number,
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (curriculumList.length > 1) {
      const newCurriculumList = curriculumList.filter((_, i) => i !== index);
      setCurriculumList(newCurriculumList);
    } else {
      alert("하나의 입력창이 있어야합니다.");
    }
  };

  // action
  async function action(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    if (studyPreiod) {
      const formStudyDates = studyPreiod?.map((date) =>
        date
          .toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .replace(/\./g, "")
          .replace(/ /g, ".")
      );
      formData.append("studyPeriod", JSON.stringify(formStudyDates));
    }

    if (recruitmentPeriod) {
      const formRecruitmentDates = recruitmentPeriod.map((date) =>
        date
          .toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .replace(/\./g, "")
          .replace(/ /g, ".")
      );
      formData.append(
        "recruitmentPeriod",
        JSON.stringify(formRecruitmentDates)
      );
    }
    // 참가 비용
    // formData.append("expense", freeChecked ? "0" : free.toString());

    // 스터디 방식 및 장소
    // formData.append("location", locationCategory?.value || "");
    // if (locationCategory?.value === "offline" && !placeChecked) {
    //   formData.append("place", place);
    // }

    if (content) {
      formData.append("content", content);
    }

    // 스터디 규칙 추가
    formData.append("rules", JSON.stringify(ruleList));

    // 세부 커리큘럼 추가
    formData.append("curriculums", JSON.stringify(curriculumList));

    try {
      const result = await createStudy(id, formData);
      if (result.state) {
        handleAlert("success", "스터디가 개설 되었습니다.");
        router.replace("/study");
      } else {
        handleAlert("error", result.message);
      }
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
            required
            className="min-w-40"
            placeholder="직무 카테고리"
            name="jobCategory"
            options={jobCategoryOption}
            value={jobCategoryOption.find((f) => f.label === jobCategory)}
            onChange={(newValue: Option | null) => setJobCategory(jobCategory)}
          />
          <Input.Select
            required
            className="min-w-40"
            name="targetCategory"
            options={targetCategoryOption}
            value={targetCategoryOption.find((f) => f.label === targetCategory)}
            onChange={(newValue: Option | null) =>
              setTargetCategory(targetCategory)
            }
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
        <Input.DateRange
          id="recruitmentPeriod"
          onChange={handleRecruitmentDateChange}
        />
      </GridField>
      <GridField>
        <LabelText form required>
          스터디 기간
        </LabelText>
        <Input.DateRange id="studyPeriod" onChange={handleStudyDateChange} />
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
            required
            className="w-[510px]"
            name="location"
            options={locationCategoryOption}
            defaultValue={locationCategoryOption[0]}
            value={locationCategoryOption.find(
              (f) => f.value === locationCategory
            )}
            onChange={(newValue: Option | null) =>
              setLocationCategory(locationCategory)
            }
            placeholder="스터디 방식"
          />
          {locationCategory === "offline" && (
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
          id="content"
          className="h-[450px]"
          placeholder="스터디 소개, 스터디 규칙 등을 상세히 작성해 주세요."
          onChange={(c: string) => setContent(c)}
        />
      </GridField>
      <GridField>
        <LabelText form>스터디 규칙</LabelText>
        <div className="flex flex-col flex-1 gap-4">
          {ruleList.map((rule, index) => (
            <div className="flex items-center gap-6">
              <div className="flex-1" key={index}>
                <Input.Text
                  className="w-full"
                  placeholder="스터디 규칙을 정해주세요."
                  value={rule}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              {index === 0 ? (
                <button onClick={ruleAddtionHandler}>
                  <AdditionIcon color="#000" />
                </button>
              ) : (
                <button
                  className="w-5 h-5 "
                  onClick={(e) => onHandleInputRuleRemove(index, e)}
                >
                  ❌
                </button>
              )}
            </div>
          ))}
        </div>
      </GridField>
      <GridField>
        <LabelText form>세부 커리큘럼</LabelText>

        <div className="flex flex-col flex-1 gap-4">
          {curriculumList.map((curriculum, index) => (
            <div className="flex items-center gap-6">
              <div className="flex-1" key={index}>
                <Input.Text
                  className="w-full"
                  placeholder="세부적인 커리큘럼을 정해주세요."
                  value={curriculum}
                  onChange={(event) =>
                    curriculumHandleInputChange(index, event)
                  }
                />
              </div>
              {index === 0 ? (
                <button onClick={curriculumAddtionHandler}>
                  <AdditionIcon color="#000" />
                </button>
              ) : (
                <button
                  className="w-5 h-5 "
                  onClick={(e) => onHandleInputCurriculumRemove(index, e)}
                >
                  ❌
                </button>
              )}
            </div>
          ))}
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
