import Link from 'next/link';
import { UserEmail, UserPassword } from './UserInput';

export default function LoginForm() {
  return (
    <>
      <form action="" className="flex flex-col w-full gap-5">
        <UserEmail />
        <UserPassword />
        <div className="w-full flex flex-col items-center gap-4">
          <button className="w-full rounded-md py-2 text-white bg-main-600">로그인</button>
          <Link href="/register" className="w-full text-center rounded-md py-2 bg-main-25">
            회원가입
          </Link>
        </div>
      </form>
    </>
  );
}
