import Image from "next/image";
import { Logo } from "@public/icons";
import RegisterForm from "../_components/RegisterForm";
import AuthWrap from "../_components/AuthWrap";

const passwordRoles = [
  "영문/숫자/특수문자($, _, -, !) 중 2가지 이상 포함",
  "8자 이상 32자 이하 입력(공백 제외)",
  "연속 3자 이상 동일한 문자/숫자 제외",
];

export default function Register() {
  return (
    <AuthWrap style="p-6">
      <Image src={Logo} alt="logo" />
      <h1 className="text-xl font-semibold">이메일로 회원가입</h1>
      <RegisterForm roles={passwordRoles} />
    </AuthWrap>
  );
}
