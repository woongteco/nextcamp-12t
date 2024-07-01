"use client";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "./customDateRange.css";

export default function DateRangePicker({ id }: { id: string }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="inline-block border border-line-input rounded-ten [&>*]:inline-block">
      <ReactDatePicker
        dateFormat="yyyy.MM.dd"
        id={`${id}-start`}
        name={`${id}-start`}
        selected={startDate}
        onChange={(date) => setStartDate(date!)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        className="w-[144px] border-white text-center"
        ariaDescribedBy="react-datepicker"
      />
      <span className="inline-block text-label-dimmed mx-6">~</span>
      <ReactDatePicker
        dateFormat="yyyy.MM.dd"
        id={`${id}-end`}
        name={`${id}-end`}
        selected={endDate}
        onChange={(date) => setEndDate(date!)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        className="w-[144px] border-white text-center"
        ariaDescribedBy="react-datepicker"
      />
    </div>
  );
}
