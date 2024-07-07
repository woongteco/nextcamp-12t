export default async function LoginModalLayout({
  modal,
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
