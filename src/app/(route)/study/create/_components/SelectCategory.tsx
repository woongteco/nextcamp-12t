"use client";

import Input from "@/common/Molecules/Form/Input";
import { Dispatch, useEffect, useState } from "react";
import { TSelectOption } from "@/types/model/Category";

type CategoryOption = {
  readonly label: string;
  readonly value: string;
};

export default function SelectCategory({
  setData,
  defaultValue,
  categorys,
  placeholder,
}: {
  setData: Dispatch<CategoryOption>;
  defaultValue?: CategoryOption;
  categorys: TSelectOption[];
  placeholder?: string;
}) {
  const categoryOption = categorys.map((category) => ({
    value: category.value,
    label: category.label,
  }));
  const defaultCategory = defaultValue
    ? { value: defaultValue.value, label: defaultValue.label }
    : null;
  const [category, setCategory] = useState<CategoryOption | null>(
    defaultCategory
  );

  const handleLocationCategoryChange = (newValue: CategoryOption | null) => {
    if (newValue) {
      setCategory(newValue);
    }
  };

  useEffect(() => {
    if (category) {
      setData(category);
    }
  }, [category]);

  return (
    <Input.Select
      required
      className="min-w-40 max-w-[510px]"
      options={categoryOption}
      value={category}
      defaultValue={defaultCategory}
      onChange={handleLocationCategoryChange}
      placeholder={placeholder}
    />
  );
}
