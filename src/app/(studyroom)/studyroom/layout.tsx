import { Footer, Header, Container } from "@/common/Layout";
import { TProps } from "@/types/component/props";

export default function StudyroomLayout({ children }: TProps) {
  return (
    <>
      <Header />
      <main className="min-h-full mt-16 pt-20 pb-[180px] bg-card">
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}
