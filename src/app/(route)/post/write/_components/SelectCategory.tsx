"use client";
import { Dispatch, SetStateAction, useState } from "react";

import { POST_CATEGORY } from "@/constants/menu/community_posts";
import Field from "@/common/Atoms/Form/Field";
import { LabelText } from "@/common/Atoms/Form/Label";
import Input from "@/common/Molecules/Form/Input";
import ButtonCheck from "@/common/Molecules/Form/ButtonCheck";

type Option = {
  readonly label: string;
  readonly value: string;
};

export default function SelectCategory() {
  const categoryOptions = POST_CATEGORY.filter((m) => m.key !== "all").map(
    (m) => ({ value: m.key, label: m.label })
  );
  const defaultCategory = categoryOptions[0];
  const [category, setCategory] = useState<Option | null>(defaultCategory);

  //   console.log(category);
  //
  //   if (category) {
  //     setData(category);
  //   }

  console.log("커뮤니티 개설 카테고리" + JSON.stringify(category));

  return (
    <>
      <Field>
        <LabelText form required>
          카테고리 선택
        </LabelText>
        <Input.Select
          required
          options={categoryOptions}
          defaultValue={defaultCategory}
          value={category}
          onChange={(newValue: Option | null) => setCategory(newValue)}
        />
      </Field>
      {(category?.value === "study" || category?.value === "project") && (
        <Field>
          <LabelText form required>
            모집 상태
          </LabelText>
          <ButtonCheck>
            <ButtonCheck.Radio
              name="recruitStatus"
              id="statusOpened"
              label="모집중"
              defaultChecked
            />
            <ButtonCheck.Radio
              name="recruitStatus"
              id="statusClosed"
              label="모집완료"
            />
          </ButtonCheck>
        </Field>
      )}
    </>
  );
}
