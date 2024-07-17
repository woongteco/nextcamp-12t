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
        required
      />
    </div>
  );
}

export function UserPassword({
  id = "password",
  title = "비밀번호",
}: {
  id?: string;
  title?: string;
}) {
  return (
    <div className="inputWrap">
      <label htmlFor="password">{title}</label>
      <div className="relative flex items-center">
        <input
          id={id}
          type="password"
          name={id}
          placeholder="********"
          className="w-full border rounded-md border-gray-300 p-3"
          required
        />
        <button type="button" className="absolute right-2 p-1">
          <Image src={PasswordHide} alt="비밀번호 보기" />
        </button>
      </div>
    </div>
  );
}
