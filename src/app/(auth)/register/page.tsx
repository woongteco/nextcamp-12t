import Image from 'next/image';
import { Logo } from '@public/icons';
import RegisterForm from './_components/RegisterForm';

export default function Register() {
  return (
    <div className="w-96 flex flex-col gap-5 items-center rounded-lg border bg-white shadow-lg p-6 center">
      <Image src={Logo} alt="logo" />
      <h1 className="text-xl font-semibold">이메일로 회원가입</h1>
      <RegisterForm />
    </div>
  );
}
