import NotFound from "@/app/not-found";
import Dropdown from "@/common/Molecules/Dropdown";
import Link from "next/link";
import { TQuery } from "../page";
import { JOBCATEGORIES } from "@/dummies/categories";

export default function StudyCategorySelectBox({
  searchParams,
}: {
  searchParams: TQuery;
}) {
  const jobC = searchParams?.job_c || "all";
  const jobCategory = JOBCATEGORIES.find((item) => item.key === jobC);

  if (jobCategory === undefined) {
    return <NotFound />;
  }
  return (
    <div className="mb-6 text-lg font-medium text-gray-950">
      <Dropdown
        buttonLabel={jobCategory.label}
        items={JOBCATEGORIES.map((item) => (
          <li
            key={item.key}
            className={`w-pull px-[12px] py-[6px] hover:text-main-600
            ${jobC === item.key ? "text-main-500" : ""}`}
          >
            <Link className="block" href={`/study?job_c=${item.key}`}>
              {item.label}
            </Link>
          </li>
        ))}
      />
    </div>
  );
}
