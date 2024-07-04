import Image from 'next/image';
import { Logo } from '@/icons';
import { UserEmail } from '../login/_components/UserInput';

export default function FindPage() {
  return (
    <div className="w-96 flex flex-col gap-5 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-lg p-6 py-10 center">
      <Image src={Logo} alt="logo" />
      <h1 className="text-xl font-semibold">이메일 찾기</h1>
      <form action="" className="w-full flex flex-col gap-5">
        <div className="flex items-center justify-center gap-3">
          <UserEmail />
          <button
            type="button"
            className="w-24 border border-main-600 text-main-600 rounded-lg py-3 px-2 text-sm font-semibold mt-7 hover:bg-main-600 hover:text-white"
          >
            인증 요청
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="inputWrap">
            <label htmlFor="">인증번호</label>
            <input
              type="text"
              placeholder="*****"
              className="w-full border rounded-md border-gray-300 p-3"
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
    </div>
  );
}
