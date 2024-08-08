import { SessionProvider } from "next-auth/react";

export default async function LoginModalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
