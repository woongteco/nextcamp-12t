import Container from "@/common/Layout/Container";
import MainLayout from "./(route)/layout";

type Props = { children: React.ReactNode };

export default function Home({ children }: Props) {
  return (
    <Container>
      <MainLayout children={children} />;
    </Container>
  );
}
