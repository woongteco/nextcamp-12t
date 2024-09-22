import { Footer, Header, Container } from "@/common/Layout";
import { TProps } from "@/types/component/props";
import AuthSession from "../_components/AuthSession";

export default function MainLayout({ children }: TProps) {
  return (
    <>
      <Header />
      <main className="min-h-full mt-16 mb-100 py-20">
        <AuthSession>
          <Container>{children}</Container>
        </AuthSession>
      </main>
      <Footer />
    </>
  );
}
