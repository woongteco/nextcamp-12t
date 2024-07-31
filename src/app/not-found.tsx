"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="mx-auto mt-36 flex flex-col gap-10 items-center justify-center w-[480px]">
      <h2 className="text-H2 text-black">페이지를 찾을 수가 없어요</h2>
      <div className="svgBox w-[270px] h-[181px]">
        <Image
          src="/icons/404.png"
          width={270}
          height={181}
          alt="404 Not-Found"
        />
      </div>
      <div className="flex flex-col gap-6 items-center justify-center w-full h-[200px] rounded-[20px] bg-alt/50 border border-[#F7F7F8]">
        <p className="text-[22px] font-semibold text-black">
          페이지 주소를 다시 확인해주세요
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-center px-6 py-3 rounded-[10px] border border-main-600 text-main-600 font-bold"
          >
            홈으로 이동
          </Link>
          <button
            onClick={() => router.back()}
            className="text-center px-6 py-3 rounded-[10px] border border-label-neutral text-label-neutral font-bold"
          >
            뒤로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}
