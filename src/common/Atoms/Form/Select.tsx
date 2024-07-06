"use client";
import { useId } from "react";
import SelectInput, {
  IndicatorsContainerProps,
  MultiValueProps,
} from "react-select";
import CreatableSelect from "react-select/creatable";

const IndicatorsContainer = (_: IndicatorsContainerProps) => <></>;

export default function ({
  id = "",
  styles = {},
  isCreatable = false,
  unstyled = false,
  ...restProps
}) {
  const uniqueId = useId();
  return isCreatable ? (
    <CreatableSelect
      id={uniqueId}
      instanceId={uniqueId}
      {...restProps}
      /**
       * multi select의 경우 indicator none, value label은 Keyword와 유사한 디자인
       * inner component name: https://react-select.com/styles#inner-components
       */
      isMulti
      components={{ IndicatorsContainer }}
      styles={{
        ...styles,
        control: (baseStyles, state) => ({
          ...baseStyles,
          "height": "56px",
          "padding": "9px 4px 9px 8px",
          "borderRadius": "10px",
          "borderColor": state.isFocused
            ? "var(--color-main-600)"
            : "var(--color-line-input)",
          "borderColor:hover": state.isFocused
            ? "var(--color-main-700)"
            : "var(--color-label-alt)",
        }),
        multiValue: (styles) => ({
          ...styles,
          "backgroundColor": "#D9E8FF",
          "borderRadius": "14px",
          "overflow": "hidden",
          ":hover": {
            backgroundColor: "#C7DEFF",
          },
        }),
        multiValueLabel: (styles) => ({
          ...styles,
          paddingLeft: "12px",
          paddingRight: "4px",
          color: "#2A7FFE",
        }),
        multiValueRemove: (styles) => ({
          ...styles,
          paddingRight: "6px",
          color: "#2A7FFE",
        }),
        indicatorSeparator: (styles) => ({
          ...styles,
          visibility: "hidden",
          opacity: 0,
        }),
      }}
    />
  ) : (
    <SelectInput
      id={uniqueId}
      instanceId={uniqueId}
      {...restProps}
      components={unstyled ? { IndicatorsContainer } : {}}
      styles={{
        ...styles,
        control: (baseStyles, state) => ({
          ...baseStyles,
          "height": "56px",
          "padding": unstyled ? "" : "9px 4px 9px 8px",
          "borderRadius": "10px",
          "borderColor": unstyled
            ? "transparent"
            : state.isFocused
            ? "#2a7ffe"
            : "#dbdbdd",
          ":hover": {
            borderColor: unstyled ? "transparent" : "var(--color-label-alt)",
            color: unstyled ? "var(--color-main-600)" : baseStyles.color,
          },
        }),
        singleValue: (styles) => ({
          ...styles,
          fontWeight: "600",
        }),
        indicatorSeparator: (styles) => ({
          ...styles,
          visibility: "hidden",
          opacity: 0,
        }),
      }}
    />
  );
}
