import Link from "next/link";
export default function RetouchButton({ studyId }: { studyId: string }) {
  return (
    <Link
      href={`/study/create/${studyId}`}
      className="hover:underline hover:text-main-600"
    >
      수정
    </Link>
  );
}
