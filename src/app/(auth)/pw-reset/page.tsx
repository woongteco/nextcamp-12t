import Image from "next/image";
import { Logo } from "@public/icons";
import AuthWrap from "../_components/AuthWrap";
import { Input } from "../_components/UserInput";

export default function PWresetPage() {
  return (
    <AuthWrap>
      <Image src={Logo} alt="logo" />
      <h1 className="text-xl font-semibold">비밀번호 찾기</h1>
      <p className="text-center text-sm text-gray-700">
        가입한 이메일을 입력하면 <br /> 이메일로 비밀번호 변경 링크가
        전송됩니다.
      </p>
      <Input
        id="email"
        type="email"
        title="이메일"
        placeholder="example@chemeet.com"
      />
      <button className="w-full rounded-md py-2 text-white bg-main-600">
        비밀번호 변경 링크 전송하기
      </button>
    </AuthWrap>
  );
}
