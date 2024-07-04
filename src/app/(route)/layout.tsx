import { Footer, Header } from '@/common/Layout';
import Container from '@/common/Layout/Container';

type Props = { children: React.ReactNode };

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="h-[100vh]">
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}
