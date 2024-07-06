import Image from "next/image";
import { PasswordHide } from "@public/icons";

export function UserEmail() {
  return (
    <div className="inputWrap">
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="example@chemeet.com"
        className="border rounded-md border-gray-300 p-3"
      />
    </div>
  );
}

export function UserPassword() {
  return (
    <div className="inputWrap">
      <label htmlFor="password">비밀번호</label>
      <div className="relative flex items-center">
        <input
          id="password"
          type="password"
          name="password"
          placeholder="********"
          className="w-full border rounded-md border-gray-300 p-3"
        />
        <button type="button" className="absolute right-2 p-1">
          <Image src={PasswordHide} alt="비밀번호 보기" />
        </button>
      </div>
    </div>
  );
}
