"use client";
import { ComponentType, useId } from "react";
import SelectInput, {
  GroupBase,
  IndicatorsContainerProps,
  Props,
} from "react-select";
import CreatableSelect from "react-select/creatable";

import { TCustomSelectProps } from "@/types/component/props";
import { selectCommonStyle } from "../atomStyle";

export default function Select<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group> & TCustomSelectProps) {
  const {
    styles = {},
    isCreatable = false,
    unstyled = false,
    id = undefined,
    ...restProps
  } = props;
  const uniqueId = useId();
  const generatedId = id || uniqueId;
  return isCreatable ? (
    <CreatableSelect
      id={generatedId}
      instanceId={generatedId}
      {...restProps}
      // isMulti
      /**
       * multi select의 경우 indicator none, value label은 Keyword와 유사한 디자인
       * inner component name: https://react-select.com/styles#inner-components
       */
      components={{ IndicatorsContainer: () => <></> }}
      styles={{
        ...styles,
        control: (baseStyles, state) => ({
          ...baseStyles,
          minHeight: "56px",
          height: "fit-content",
          padding: "9px 4px 9px 8px",
          borderRadius: "10px",
          borderColor: state.isFocused
            ? "var(--color-main-600)"
            : "var(--color-line-input)",
          "borderColor:hover": state.isFocused
            ? "var(--color-main-700)"
            : "var(--color-label-alt)",
        }),
        ...selectCommonStyle,
      }}
    />
  ) : (
    <SelectInput
      id={generatedId}
      instanceId={generatedId}
      {...restProps}
      components={unstyled ? { IndicatorsContainer: () => <></> } : {}}
      styles={{
        ...styles,
        control: (baseStyles, state) => ({
          ...baseStyles,
          minHeight: "56px",
          height: "fit-content",
          padding: unstyled ? "" : "9px 4px 9px 8px",
          borderRadius: "10px",
          borderColor: unstyled
            ? "transparent"
            : state.isFocused
            ? "#2a7ffe"
            : "#dbdbdd",
          ":hover": {
            borderColor: unstyled ? "transparent" : "var(--color-label-alt)",
            color: unstyled ? "var(--color-main-600)" : baseStyles.color,
          },
        }),
        ...selectCommonStyle,
      }}
    />
  );
}
