"use client";

import { useState } from "react";

const serviceCheck = [
  {
    id: "service",
    service: "서비스 이용약관 동의 (필수)",
  },
  {
    id: "privacy",
    service: "개인정보 수집 및 이용 동의 (필수)",
  },
  {
    id: "marketing",
    service: "마케팅 수신 동의 (선택)",
  },
];

export default function RegisterCheck() {
  const [checkItem, setCheckItem] = useState<string[]>([]);

  const singleCheckHanlder = (checked: boolean, id: string) => {
    if (checked) {
      setCheckItem((prev) => [...prev, id]);
    } else {
      setCheckItem(checkItem.filter((el) => el !== id));
    }
  };

  const allCheckHandler = (checked: boolean) => {
    if (checked) {
      const checkArr: string[] = [];
      serviceCheck.forEach((el) => checkArr.push(el.id));
      setCheckItem(checkArr);
    } else {
      setCheckItem([]);
    }
  };

  console.log(checkItem);

  return (
    <>
      <div className="self-start text-sm">
        <div className="flex items-center gap-[5px]">
          <input
            id="allCheck"
            type="checkbox"
            name="allCheck"
            className="relative w-5 h-5 border border-gray-400 rounded bg-white checked:bg-main-600 checked:border-none checked:text-white checked:before:content-['✓'] checked:before:center appearance-none"
            onChange={(e) => allCheckHandler(e.target.checked)}
            checked={checkItem.length === serviceCheck.length}
          />
          <label htmlFor="allCheck" className="font-semibold">
            전체 동의
          </label>
        </div>
        <ul className="flex flex-col gap-1 mt-3">
          {serviceCheck.map(({ id, service }) => (
            <li key={id} className="flex items-center gap-[5px]">
              <input
                id={id}
                type="checkbox"
                name={id}
                className="relative w-5 h-5 border border-gray-400 rounded bg-white checked:bg-main-600 checked:border-none checked:text-white checked:before:content-['✓'] checked:before:center appearance-none"
                onChange={(e) => singleCheckHanlder(e.target.checked, id)}
                checked={checkItem.includes(id)}
                required={!service.includes("선택")}
              />
              <label htmlFor={id}>{service}</label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
