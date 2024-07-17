"use client";
import { signOut } from "next-auth/react";
import { ComponentProps } from "react";

export default function UnstyledLogoutButton({
  className,
  children,
}: ComponentProps<"button">) {
  function logoutAction() {
    signOut({ callbackUrl: "/" });
  }
  return (
    <button type="button" className={className} onClick={logoutAction}>
      {children}
    </button>
  );
}
