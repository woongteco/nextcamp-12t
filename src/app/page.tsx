import { Footer, Header } from "@/common/Layout";
import MainLayout from "./(route)/layout";

type Props = { children: React.ReactNode };

export default function Home({ children }: Props) {
  return <MainLayout children={children} />;
}
