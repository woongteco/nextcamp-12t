import Image from 'next/image';
import { PasswordHide, PasswordCheck } from '@public/icons';
import { UserEmail, UserPassword } from '../../login/_components/UserInput';

const passwordRoles = [
  '영문/숫자/특수문자($, _, -, !) 중 2가지 이상 포함',
  '8자 이상 32자 이하 입력(공백 제외)',
  '연속 3자 이상 동일한 문자/숫자 제외',
];

const serviceCheck = [
  {
    id: 'service',
    service: '서비스 이용약관 동의 (필수)',
  },
  {
    id: 'privacy',
    service: '개인정보 수집 및 이용 동의 (필수)',
  },
  {
    id: 'marketing',
    service: '마케팅 수신 동의 (선택)',
  },
];

export default function RegisterForm() {
  return (
    <>
      <form action="" className="flex flex-col w-full gap-5 mb-5">
        <UserEmail />
        <div className="w-full flex flex-col gap-2">
          <UserPassword />
          <div className="self-start text-xs text-gray-300">
            {passwordRoles.map((role, index) => (
              <p key={index} className="flex items-center gap-1">
                <Image src={PasswordCheck} alt="비밀번호 유효성 체크" />
                {role}
              </p>
            ))}
          </div>
        </div>
        <div className="inputWrap">
          <label htmlFor="pwCheck">비밀번호 확인</label>
          <div className="relative flex items-center">
            <input
              id="pwCheck"
              type="password"
              name="pwCheck"
              placeholder="********"
              className="w-full border rounded-md border-gray-300 p-3"
            />
            <button type="button" className="absolute right-2 p-1">
              <Image src={PasswordHide} alt="비밀번호 보기" />
            </button>
          </div>
        </div>
        <div className="inputWrap">
          <label htmlFor="phone">휴대폰 번호</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="010-1234-5678"
            className="w-full border rounded-md border-gray-300 p-3"
          />
        </div>
        <div className="self-start text-sm">
          <div className="flex items-center gap-[5px]">
            <input
              id="allCheck"
              type="checkbox"
              name="allCheck"
              className="relative w-5 h-5 border border-gray-400 rounded bg-white checked:bg-main-600 checked:border-none checked:text-white checked:before:content-['✓'] checked:before:center appearance-none"
            />
            <label htmlFor="allCheck" className="font-semibold">
              전체 동의
            </label>
          </div>
          <ul className="flex flex-col gap-1 mt-3">
            {serviceCheck.map(({ id, service }) => (
              <li key={id} className="flex items-center gap-[5px]">
                <input
                  id={id}
                  type="checkbox"
                  name={id}
                  className="relative w-5 h-5 border border-gray-400 rounded bg-white checked:bg-main-600 checked:border-none checked:text-white checked:before:content-['✓'] checked:before:center appearance-none"
                />
                <label htmlFor={id}>{service}</label>
              </li>
            ))}
          </ul>
        </div>
        <button className="w-full rounded-md py-2 text-white bg-main-600">가입하기</button>
      </form>
    </>
  );
}
