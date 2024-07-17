import { Footer, Header, Container } from "@/common/Layout";
import { TProps } from "@/types/component/props";

export default function MainLayout({ children }: TProps) {
  return (
    <>
      <Header />
      <main className="min-h-full">
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}
