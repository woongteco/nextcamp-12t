import Image from 'next/image';
import { Logo } from '@public/icons';
import { UserEmail } from '../login/_components/UserInput';

export default function PWresetPage() {
  return (
    <div className="w-96 flex flex-col gap-5 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-lg p-6 py-10 center">
      <Image src={Logo} alt="logo" />
      <h1 className="text-xl font-semibold">비밀번호 찾기</h1>
      <p className="text-center text-sm text-gray-700">
        가입한 이메일을 입력하면 <br /> 이메일로 비밀번호 변경 링크가 전송됩니다.
      </p>
      <UserEmail />
      <button className="w-full rounded-md py-2 text-white bg-main-600">
        비밀번호 변경 링크 전송하기
      </button>
    </div>
  );
}
