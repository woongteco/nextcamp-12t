import Link from "next/link";
import Image from "next/image";
import { SocialLogin, Google, Kakao, Logo, Github } from "@public/icons";
import LoginForm from "../_components/LoginForm";
import AuthWrap from "../_components/AuthWrap";
import { loginGithub, loginGoogle, loginKakao } from "@/lib/actions/authAction";

export default function Login() {
  return (
    <AuthWrap>
      <Image src={Logo} alt="logo" />
      <LoginForm />
      <div className="flex items-center gap-3 text-sm">
        <Link href="/find">이메일 찾기</Link>
        <span className="w-[1px] h-3 bg-black"></span>
        <Link href="/pw-reset">비밀번호 찾기</Link>
      </div>
      <>
        <Image src={SocialLogin} alt="간편 로그인 이미지" />
        <div className="flex items-center justify-center gap-4">
          <form action={loginKakao}>
            <button>
              <Image src={Kakao} alt="카카오 로그인" />
            </button>
          </form>
          <form action={loginGoogle}>
            <button>
              <Image src={Google} alt="구글 로그인" />
            </button>
          </form>
          <form action={loginGithub}>
            <button>
              <Image src={Github} alt="깃헙 로그인" />
            </button>
          </form>
        </div>
      </>
    </AuthWrap>
  );
}
