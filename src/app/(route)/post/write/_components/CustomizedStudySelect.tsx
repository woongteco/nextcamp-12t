"use client";
import { TStudyCard } from "@/types/model/StudyCard";
import Select, { StylesConfig } from "react-select";

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

export default function CustomizedStudySelect({
  options,
  className = "",
}: {
  options: StudyCardSelectOption[];
  className?: string;
}) {
  return (
    <Select
      options={options}
      styles={studyCardStyle}
      className={className}
      isSearchable
      placeholder="스터디를 선택하세요"
    />
  );
}
