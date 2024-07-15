"use client";

import Link from "next/link";
import Image from "next/image";
import { SocialLogin, Google, Kakao, Logo } from "@public/icons";
import { useEffect, useState, useRef } from "react";
import ModalBackdrop from "@/common/Molecules/ModalPortal/ModalBackdrop";
import { DummyProfileImg } from "@public/images";
import LoginForm from "../_components/LoginForm";

export default function LoginProfile() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!open) {
      modalRef.current?.close();
    }

    const modalKeyClosehandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        modalRef.current?.close;
        setOpen(false);
      }
    };
    document.addEventListener("keydown", modalKeyClosehandler);

    return () => {
      document.removeEventListener("keydown", modalKeyClosehandler);
    };
  }, [open]);

  return (
    <>
      <Image
        src={DummyProfileImg}
        className="py-3 cursor-pointer"
        alt="profile img"
        onClick={() => setOpen(true)}
      />
      {open && (
        <>
          <ModalBackdrop onClick={() => setOpen(false)} />
          <dialog
            className="fixed w-96 top-1/2 -translate-y-1/2 z-modal bg-black"
            ref={modalRef}
            open
          >
            <div className="w-full h-auto flex flex-col items-center justify-center gap-5 rounded-lg shadow-lg border border-gray-200 p-6 py-10 bg-white center">
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
      )}
    </>
  );
}
