import Link from "next/link";
import Image from "next/image";
import { CreateStudyIcon } from "@public/icons";

export default function CreateStudyLink() {
  return (
    <Link
      href="/study/create"
      className="flex items-center justify-center gap-2 w-36 py-2 leading-8 text-main-600 border border-solid border-main-600 rounded-[1.3rem]"
    >
      <Image src={CreateStudyIcon} alt="create study" />
      <span className="text-label-400">스터디 만들기</span>
    </Link>
  );
}
