import AuthWrap from "./_components/AuthWrap";

export default async function LoginModalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthWrap>{children}</AuthWrap>;
}
