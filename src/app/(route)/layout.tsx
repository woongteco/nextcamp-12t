import { Footer, Header, Container } from "@/common/Layout";
import { TProps } from "@/types/component/props";

// TODO: 추후 main에 min-h-screen 삭제
export default function MainLayout({ children }: TProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}
