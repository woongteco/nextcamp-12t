import Link from 'next/link';
import Image from 'next/image';
import LoginForm from '../../login/_components/LoginForm';
import { SocialLogin, Google, Kakao, Logo } from '@public/icons';

export default function InterceptedLoginPage() {
  return (
    <>
      <dialog className="fixed top-1/2 -translate-y-1/2 z-modal" open>
        <div className="w-96 flex flex-col items-center justify-center gap-5 rounded-lg shadow-lg border border-gray-200 p-6 py-10 bg-white center">
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
              <button type="button">
                <Image src={Kakao} alt="카카오 로그인" />
              </button>
              <button type="button">
                <Image src={Google} alt="구글 로그인" />
              </button>
            </div>
          </>
        </div>
      </dialog>
    </>
  );
}
