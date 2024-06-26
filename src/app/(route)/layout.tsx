import { Footer, Header } from "@/common/Layout";

type Props = { children: React.ReactNode };

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
