import Image from "next/image";
import { PasswordHide, PasswordCheck } from "@public/icons";
import { UserEmail, UserPassword } from "./UserInput";

type TRegisterProps = {
  roles: string[];
  services: {
    id: string;
    service: string;
  }[];
};

export default function RegisterForm({ roles, services }: TRegisterProps) {
  return (
    <>
      <form action="" className="flex flex-col w-full gap-5 mb-5">
        <UserEmail />
        <div className="w-full flex flex-col gap-2">
          <UserPassword />
          <div className="self-start text-xs text-gray-300">
            {roles.map((role, index) => (
              <p key={index} className="flex items-center gap-1">
                <Image src={PasswordCheck} alt="비밀번호 유효성 체크" />
                {role}
              </p>
            ))}
          </div>
        </div>
        <UserPassword id={"pwCheck"} title={"비밀번호 확인"} />
        <div className="inputWrap">
          <label htmlFor="phone">휴대폰 번호</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="010-1234-5678"
            className="w-full border rounded-md border-gray-300 p-3"
            required
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
            {services.map(({ id, service }) => (
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
        <button className="w-full rounded-md py-2 text-white bg-main-600">
          가입하기
        </button>
      </form>
    </>
  );
}
