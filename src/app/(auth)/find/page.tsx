import Image from "next/image";
import { Logo } from "@public/icons";
import AuthWrap from "../_components/AuthWrap";
import { Input } from "../_components/UserInput";

export default function FindPage() {
  return (
    <AuthWrap>
      <Image src={Logo} alt="logo" />
      <h1 className="text-xl font-semibold">이메일 찾기</h1>
      <form action="" className="w-full flex flex-col gap-5">
        <div className="flex items-center justify-center gap-3">
          <Input
            id="email"
            type="email"
            title="이메일"
            placeholder="example@chemeet.com"
          />
          <button
            type="button"
            className="w-24 border border-main-600 text-main-600 rounded-lg py-3 px-2 text-sm font-semibold mt-7 hover:bg-main-600 hover:text-white"
          >
            인증 요청
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="inputWrap">
            <Input
              id="checkNum"
              type="text"
              title="인증번호"
              placeholder="*****"
            />
          </div>
          <button
            type="button"
            className="w-24 border border-main-600 text-main-600 rounded-lg py-3 px-2 text-sm font-semibold mt-7 hover:bg-main-600 hover:text-white"
          >
            인증
          </button>
        </div>
      </form>
    </AuthWrap>
  );
}
