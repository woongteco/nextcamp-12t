"use client";

import Link from "next/link";
import Image from "next/image";
import { SocialLogin, Google, Kakao, Logo, Github } from "@public/icons";
import { useEffect, useState, useRef } from "react";
import ModalBackdrop from "@/common/Molecules/ModalPortal/ModalBackdrop";
import LoginForm from "./LoginForm";
import AuthWrap from "./AuthWrap";
import { loginGithub, loginGoogle, loginKakao } from "@/lib/actions/authAction";

export default function LoginModal() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!open) {
      modalRef.current?.close();
    }

    const modalKeyCloseHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        modalRef.current?.close();
        setOpen(false);
      }
    };
    document.addEventListener("keydown", modalKeyCloseHandler);

    return () => {
      document.removeEventListener("keydown", modalKeyCloseHandler);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="py-2 px-4 border border-solid border-main-600 rounded-[.6rem] text-main-600 font-semibold"
        onClick={() => setOpen(true)}
      >
        로그인
      </button>
      {open && (
        <>
          <ModalBackdrop onClick={() => setOpen(false)} />
          <dialog
            className="fixed w-96 top-1/2 -translate-y-1/2 z-modal bg-black"
            ref={modalRef}
            open
          >
            <AuthWrap>
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
                  <form action={loginKakao}>
                    <button>
                      <Image src={Kakao} alt="카카오 로그인" />
                    </button>
                  </form>
                  <form action={loginGoogle}>
                    <button>
                      <Image src={Google} alt="구글 로그인" />
                    </button>
                  </form>
                  <form action={loginGithub}>
                    <button>
                      <Image src={Github} alt="깃헙 로그인" />
                    </button>
                  </form>
                </div>
              </>
            </AuthWrap>
          </dialog>
        </>
      )}
    </>
  );
}
