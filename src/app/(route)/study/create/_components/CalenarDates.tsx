import Input from "@/common/Molecules/Form/Input";
import { Dispatch } from "react";

export default function CalenarDates({
  defaultDate,
  data,
  setData,
}: {
  defaultDate?: [string, string] | null;
  data: [Date, Date] | [string, string];
  setData: Dispatch<[Date, Date]>;
}) {
  const defaultCalenarDate = defaultDate ? defaultDate : data;

  return <Input.DateRange defaultDate={defaultCalenarDate} setData={setData} />;
}
