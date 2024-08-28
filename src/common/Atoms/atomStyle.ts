import { cva } from "class-variance-authority";
import { ClassValue } from "clsx";
import { CSSObjectWithLabel } from "react-select";
import { TButtonProps } from "./Form/Button";

export const inputStyle =
  "px-[18px] py-[15px] rounded-ten border border-line-input hover:border-label-alt focus:outline-main-600 placeholder:text-label-assist placeholder:text-body-400";

export const selectCommonStyle = {
  singleValue: (styles: CSSObjectWithLabel): CSSObjectWithLabel => ({
    ...styles,
    fontWeight: "600",
  }),
  indicatorSeparator: (styles: CSSObjectWithLabel): CSSObjectWithLabel => ({
    ...styles,
    visibility: "hidden",
    opacity: 0,
  }),
  multiValue: (styles: CSSObjectWithLabel): CSSObjectWithLabel => ({
    ...styles,
    backgroundColor: "#D9E8FF",
    borderRadius: "14px",
    overflow: "hidden",
    ":hover": {
      backgroundColor: "#C7DEFF",
    },
  }),
  multiValueLabel: (styles: CSSObjectWithLabel): CSSObjectWithLabel => ({
    ...styles,
    paddingLeft: "12px",
    paddingRight: "4px",
    color: "#2A7FFE",
  }),
  multiValueRemove: (styles: CSSObjectWithLabel): CSSObjectWithLabel => ({
    ...styles,
    paddingRight: "6px",
    color: "#2A7FFE",
  }),
};

// TODO: 확인 후 모듈화 시도 필요
// cva, tailwind 사용시 모듈화하여 클래스 전달하면
// hover와 같은 인터랙션 스타일 미적용 문제 있음
const generateButtonClasses = (
  variation: Exclude<TButtonProps["variation"], undefined>,
  colorClass: ClassValue
): string[] => {
  switch (variation) {
    case "solid":
      return [`bg-${colorClass}`, `hover:bg-${colorClass}/75`];
    case "outline":
      return [
        `bg-${colorClass}/0`,
        `border`,
        `border-${colorClass}`,
        `hover:bg-${colorClass}/15`,
        `text-${colorClass}`,
      ];
    case "text":
      return [`text-${colorClass}`, `hover:bg-${colorClass}/15`];
    default:
      throw new Error("Unexpected variation value");
  }
};

export const ButtonVariants = cva(
  `
  flex flex-row items-center justify-center gap-2 px-5 py-3 
  font-bold text-nowrap text-ellipsis overflow-hidden rounded-ten 
  transition-colors
  disabled:border-label-assist disabled:cursor-not-allowed disabled:opacity-65
  `,
  {
    variants: {
      variant: {
        "solid.default": [
          `bg-label-neutral`,
          `hover:bg-label-neutral/75`,
          "text-label-neutral",
        ],
        "solid.main": [`bg-main-600`, `hover:bg-main-600/75`, "text-white"],
        "solid.sub": [
          `bg-main-25`,
          `hover:bg-main-200`,
          "text-label-normal",
          "hover:saturate-150",
          "hover:brightness-70",
        ],
        "solid.danger": [
          `bg-status-danger`,
          `hover:bg-status-danger/75`,
          "text-white",
        ],
        "solid.assist": [`bg-line-input`, `hover:bg-line-input/75`],
        "outline.default": [
          `bg-label-neutral/0`,
          `border`,
          `border-label-neutral`,
          `hover:bg-label-neutral/15`,
          `text-label-neutral`,
        ],
        "outline.main": [
          `bg-main-600/0`,
          `border`,
          `border-main-600`,
          `hover:bg-main-600/15`,
          `text-main-600`,
        ],
        "outline.sub": [
          `bg-main-200/0`,
          `border`,
          `border-main-200`,
          `hover:bg-main-200/15`,
          `text-main-200`,
        ],
        "outline.danger": [
          `bg-status-danger/0`,
          `border`,
          `border-status-danger`,
          `hover:bg-status-danger/15`,
          `text-status-danger`,
        ],
        "outline.assist": [
          `bg-litne-input/0`,
          `border`,
          `border-line-input`,
          `hover:bg-line-input/15`,
          `text-line-input`,
        ],
        "text.default": [`text-label-neutral`, `hover:bg-label-neutral/15`],
        "text.main": [`text-main-600`, `hover:bg-main-600/15`],
        "text.sub": [`text-main-200`, `hover:bg-main-200/15`],
        "text.danger": [`text-status-danger`, `hover:bg-status-danger/15`],
        "text.assist": [`text-label-assist`, `hover:bg-label-assist/15`],
      },
      size: {
        fit: "w-fit",
        full: "w-full",
        form: "w-[278px]",
      },
    },
    defaultVariants: {
      variant: "solid.main",
      size: "fit",
    },
  }
);

export const LinkButtonVariants = cva(
  `flex flex-row items-center justify-center gap-2 px-5 py-3 font-bold rounded-ten`,
  {
    variants: {
      variant: {
        "solid.default": [
          `bg-label-neutral`,
          `hover:bg-label-neutral/75`,
          "text-label-neutral",
        ],
        "solid.main": [`bg-main-600`, `hover:bg-main-600/75`, "text-white"],
        "solid.sub": [
          `bg-main-25`,
          `hover:bg-main-200`,
          "text-label-normal",
          "hover:saturate-150",
          "hover:brightness-70",
        ],
        "solid.danger": [
          `bg-status-danger`,
          `hover:bg-status-danger/75`,
          "text-white",
        ],
        "solid.assist": [`bg-line-input`, `hover:bg-line-input/75`],
        "outline.default": [
          `bg-label-neutral/0`,
          `border`,
          `border-label-neutral`,
          `hover:bg-label-neutral/15`,
          `text-label-neutral`,
        ],
        "outline.main": [
          `bg-main-600/0`,
          `border`,
          `border-main-600`,
          `hover:bg-main-600/15`,
          `text-main-600`,
        ],
        "outline.sub": [
          `bg-main-200/0`,
          `border`,
          `border-main-200`,
          `hover:bg-main-200/15`,
          `text-main-200`,
        ],
        "outline.danger": [
          `bg-status-danger/0`,
          `border`,
          `border-status-danger`,
          `hover:bg-status-danger/15`,
          `text-status-danger`,
          ,
        ],
        "outline.assist": [
          `bg-line-input/0`,
          `border`,
          `border-line-input`,
          `hover:bg-line-input/15`,
          `text-line-input`,
        ],
        "text.default": [
          `text-label-neutral`,
          `hover:bg-label-neutral/15`,
          `hover:underline`,
        ],
        "text.main": [
          `text-main-600`,
          `hover:bg-main-600/15`,
          `hover:underline`,
        ],
        "text.sub": [
          `text-main-200`,
          `hover:bg-main-200/15`,
          `hover:underline`,
        ],
        "text.danger": [
          `text-status-danger`,
          `hover:bg-status-danger/15`,
          `hover:underline`,
        ],
        "text.assist": [
          `text-label-assist`,
          `hover:bg-label-assist/15`,
          `hover:underline`,
        ],
      },
      size: {
        fit: "w-fit",
        full: "w-full",
        form: "w-[278px]",
      },
    },
    defaultVariants: {
      variant: "solid.main",
      size: "fit",
    },
  }
);
