import Image from "next/image";
import { Logo } from "@public/icons";
import RegisterForm from "../_components/RegisterForm";
import AuthWrap from "../_components/AuthWrap";

export default function Register() {
  return (
    <AuthWrap style="gap-3 p-6 xxl:gap-5 duration-300">
      <Image src={Logo} alt="logo" />
      <h1 className="text-xl font-semibold">이메일로 회원가입</h1>
      <RegisterForm />
    </AuthWrap>
  );
}
