import Image from "next/image";
import { Logo } from "@public/icons";
import AuthWrap from "../_components/AuthWrap";
import FindAuthForm from "../_components/FindAuthForm";

export default function FindAuthWrap({ title }: { title: string }) {
  return (
    <AuthWrap>
      <Image src={Logo} alt="logo" />
      <h1 className="text-xl font-semibold">{title} 찾기</h1>
      <p className="text-center text-sm font-medium text-gray-700">
        가입한 정보를 입력하고 인증 요청할 Email을 입력하면 <br /> 해당 Email로
        {title === "이메일" ? " 이메일 찾는" : " 비밀번호 변경"} 링크가
        전송됩니다.
      </p>
      <FindAuthForm title={title} />
    </AuthWrap>
  );
}
