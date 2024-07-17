import NotFound from "@/app/not-found";
import Dropdown from "@/common/Molecules/Dropdown";
import Link from "next/link";
import { TQuery } from "../page";
import { CATEGORIES } from "@/constants/categories/job_category";
import { CategoryGroup } from "@/types/model/Category";
export default function StudyCategorySelectBox({
  searchParams,
}: {
  searchParams: TQuery;
}) {
  const jobC = searchParams?.job_c || "default";
  const categories: CategoryGroup[] = [
    {
      value: "default",
      label: "직무선택",
      options: [],
    },
    ...CATEGORIES,
  ];
  const jobCategory = categories.find((item) => item.value === jobC);

  console.log("jobCategory", jobCategory);

  if (jobCategory === undefined) {
    return <NotFound />;
  }
  return (
    <div className="mb-6 text-lg font-medium text-gray-950">
      <Dropdown
        buttonLabel={jobCategory.label}
        items={CATEGORIES.map((item) => (
          <li
            key={item.value}
            className={`w-pull px-[12px] py-[6px] hover:text-main-600
            ${jobC === item.value ? "text-main-500" : ""}`}
          >
            <Link className="block" href={`/study?job_c=${item.value}`}>
              {item.label}
            </Link>
          </li>
        ))}
      />
    </div>
  );
}
