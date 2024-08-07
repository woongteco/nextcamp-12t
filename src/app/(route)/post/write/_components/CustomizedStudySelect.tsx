"use client";
import { getAllStudies, getStudy } from "@/lib/actions/studyAction";
import { TStudyCard } from "@/types/model/StudyCard";
import { useId } from "react";
import Select, { StylesConfig } from "react-select";
import AsyncSelect from "react-select/async";

const card = (thumbnailUrl = "", creator = "") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    content: '" "',
    backgroundImage: `url("${thumbnailUrl}")`,
    backgroundSize: "cover",
    backgroundColor: "#dbdbdd",
    display: "block",
    marginRight: 16,
    height: 40,
    width: 60,
  },

  ":after": {
    content: `"${creator}"`,
    display: "block",
    marginLeft: 16,
    color: "#aaa",
  },
});

const studyCardStyle: StylesConfig<TStudyCard> = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    minHeight: "56px",
    height: "fit-content",
    padding: "9px 4px 9px 8px",
    borderRadius: "10px",
    borderColor: state.isFocused ? "#2a7ffe" : "#dbdbdd",
    ":hover": {
      borderColor: "var(--color-label-alt)",
      color: baseStyles.color,
    },
  }),
  option: (styles, { data }) => ({
    ...styles,
    ...card(data.thumbnailUrl, `${data.user.position} ${data.user.name}`),
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...card(data.thumbnailUrl, `${data.user.position} ${data.user.name}`),
  }),
};

export type StudyCardSelectOption = TStudyCard & {
  value: string;
  label: string;
};

// DB 데이터 사용 시 `getAllStuies()` 대신 아래 함수(:62 `getStudy()`) 사용.
// LinkedStudyCard에서도 DB에서 studyId를 탐색하도록 함께 수정
// @\app\(route)\post\_components\LinkedStudyCard.tsx
// getStudy()
const loadOptions = (inputValue: string) =>
  // 더미 데이터 액션으로 테스트
  getAllStudies()
    .then(({ data }) => {
      // console.log({ inputValue });
      return data.map((study: any) => ({
        ...study,
        // value: `https://chemeet.vercel.app/study/${study.studyId}`,
        value: study.studyId,
        label: study.title,
      }));
    })
    .catch((error) => {
      console.error(error.message);
      return [];
    });

export default function CustomizedStudySelect({
  // options,
  name,
  className = "",
}: {
  // options: StudyCardSelectOption[];
  name: string;
  className?: string;
}) {
  const thisId = useId();
  return (
    <AsyncSelect
      id={thisId}
      instanceId={thisId}
      name={name}
      cacheOptions
      defaultOptions
      loadOptions={loadOptions}
      // options={options}
      styles={studyCardStyle}
      className={className}
      isSearchable
      placeholder="스터디를 선택하세요"
    />
  );
}
