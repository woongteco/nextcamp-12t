import Link from "next/link";
import NoneContentItemBase from "@/app/_components/NoneContentItemBase";

export default function NoneStudyComponent() {
  return (
    <NoneContentItemBase>
      <p className="text-main-500 font-semibold">
        모집 중인 스터디가 없습니다.
        <br />첫 스터디를 만들어보세요!
      </p>
      <Link
        href={"/studyroom/create"}
        className="block py-3 px-4 bg-main-500 text-white font-semibold rounded-2xl"
      >
        스터디 개설하기
      </Link>
    </NoneContentItemBase>
  );
}
