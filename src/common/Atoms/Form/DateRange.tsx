"use client";

import { Dispatch, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "./customDateRange.css";

export default function DateRangePicker({
  defaultDate,
  setData,
}: {
  defaultDate: [Date, Date] | [string, string];
  setData: Dispatch<[Date, Date]>;
}) {
  const [startDate, setStartDate] = useState(
    typeof defaultDate[0] === "string"
      ? new Date(defaultDate[0])
      : defaultDate[0]
  );
  const [endDate, setEndDate] = useState(
    typeof defaultDate[1] === "string"
      ? new Date(defaultDate[1])
      : defaultDate[1]
  );

  // 기존 데이터를 Date 객체로 변환
  useEffect(() => {
    if (defaultDate && defaultDate[0] && defaultDate[1]) {
      setStartDate(startDate);
      setEndDate(endDate);
      setData([startDate, endDate]); // defaultDate가 있을 경우 초기화
    }
  }, [setData]);

  const handleStartDateChange = (date: Date) => {
    if (date) {
      setStartDate(date);
      setData([date, endDate!]); // startDate 업데이트
    }
  };

  const handleEndDateChange = (date: Date | null) => {
    if (date) {
      setEndDate(date);
      setData([startDate!, date]); // endDate 업데이트
    }
  };

  return (
    <div className="flex justify-between items-center px-[18px] py-[15px] w-[383px] hover:border-label-alt focus:outline-main-600 border border-line-input rounded-ten [&>*]:inline-block [&>*]:text-label-assist">
      <ReactDatePicker
        dateFormat="yyyy.MM.dd"
        // id={`${id}-start`}
        // name={`${id}-start`}
        selected={startDate}
        onChange={(date) => handleStartDateChange(date!)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        className="w-[144px] border-white text-center cursor-pointer"
        ariaDescribedBy="react-datepicker"
      />
      <span className="inline-block text-label-dimmed mx-6">~</span>
      <ReactDatePicker
        dateFormat="yyyy.MM.dd"
        // id={`${id}-end`}
        // name={`${id}-end`}
        selected={endDate}
        onChange={(date) => handleEndDateChange(date!)}
        selectsEnd
        minDate={startDate}
        startDate={startDate}
        endDate={endDate}
        className="w-[144px] border-white text-center cursor-pointer"
        ariaDescribedBy="react-datepicker"
      />
    </div>
  );
}
