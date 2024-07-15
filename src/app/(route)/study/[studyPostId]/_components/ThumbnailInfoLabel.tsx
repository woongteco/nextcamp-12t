import Image from "next/image";
import {
  CalendarIcon,
  CategoryIcon,
  ExpenseIcon,
  OnOffIcon,
  PeopleIcon,
} from "@public/icons";

const infoList = [
  { id: 1, icon: CategoryIcon, text: "카테고리" },
  {
    id: 2,
    icon: PeopleIcon,
    text: "모집 인원",
  },
  {
    id: 3,
    icon: ExpenseIcon,
    text: "참가 비용",
  },
  {
    id: 4,
    icon: CalendarIcon,
    text: "스터디 기간",
  },
  {
    id: 5,
    icon: OnOffIcon,
    text: "스터디 방식",
  },
];

export default function ThumbnailInfoList() {
  return (
    <ul className="flex flex-col gap-4">
      {infoList.map((list) => {
        return (
          <li className="flex gap-4" key={list.id}>
            <Image
              className="w-6 h-6"
              width={24}
              height={24}
              src={list.icon}
              alt="카테고리"
            />
            <strong className="text-xl">{list.text}</strong>
          </li>
        );
      })}
    </ul>
  );
}
