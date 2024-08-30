import Link from "next/link";
import Image from "next/image";
import { SocialLogin, Logo } from "@public/icons";
import { LoginForm, SocialLoginForm } from "../_components/LoginForm";
import AuthWrap from "../_components/AuthWrap";

export default function Login() {
  return (
    <>
      <Image src={Logo} alt="logo" />
      <LoginForm />
      <div className="flex items-center gap-3 text-sm">
        <Link href="/find">이메일 찾기</Link>
        <span className="w-[1px] h-3 bg-black"></span>
        <Link href="/pw-reset">비밀번호 찾기</Link>
      </div>
      <>
        <Image src={SocialLogin} alt="간편 로그인 이미지" />
        <SocialLoginForm />
      </>
    </>
  );
}
