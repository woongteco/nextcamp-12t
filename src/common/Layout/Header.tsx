import Link from "next/link";
import { Logo } from "@public/icons";
import Image from "next/image";
import Container from "./Container";
import LoginModal from "@/app/(auth)/_components/LoginModal";
import { getSession } from "@/auth";
import SessionedHeader from "./SessionedHeader";

export default async function Header() {
  const session = await getSession();

  return (
    <header className="fixed top-0 w-full bg-white z-header border-b border-b-line-normal">
      <Container>
        <div className="h-16 flex items-center justify-between">
          <div
            data-name="header__left-side"
            className="flex gap-14 lg:gap-20 items-center"
          >
            <h1>
              <Link href={"/"}>
                <Image src={Logo} alt="logo" />
              </Link>
            </h1>
            <nav>
              <ul className="flex gap-9 lg:gap-12">
                <li>
                  <Link href={"/study"}>스터디</Link>
                </li>
                <li>
                  <Link href={"/post"}>커뮤니티</Link>
                </li>
              </ul>
            </nav>
          </div>
          {session ? (
            <SessionedHeader sessionId={session.user.id} />
          ) : (
            <LoginModal />
          )}
        </div>
      </Container>
    </header>
  );
}
