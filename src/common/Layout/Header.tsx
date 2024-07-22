import Link from "next/link";
import {
  AlarmIcon,
  CreateStudyIcon,
  Logo,
  LogoutIcon,
  PostIcon,
  SaveHeartIcon,
  SettingProfileIcon,
  StudyIcon,
} from "@public/icons";
import Image from "next/image";
import { DummyProfileImg } from "@public/images";
import Container from "./Container";
import LoginModal from "@/app/(auth)/_components/LoginModal";
import { getSession } from "@/auth";
import ResponsiveMenu from "./ProfileMenu/ResponsiveMenu";

export default async function Header() {
  const session = await getSession();

  return (
    <header className="fixed top-0 w-full bg-white z-header border-b border-b-line-normal">
      <Container>
        <div className="h-16 flex items-center justify-between">
          <div
            data-name="header__left-side"
            className="flex gap-6 lg:gap-20 items-center"
          >
            <h1>
              <Link href={"/"}>
                <Image src={Logo} alt="logo" />
              </Link>
            </h1>
            <nav>
              <ul className="flex gap-6 lg:gap-12">
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
            <div data-name="header__right-side__profile">
              <ResponsiveMenu
                profileImage={
                  <div className="flex items-center">
                    <Image
                      src={DummyProfileImg}
                      alt="profile img"
                      className="py-3"
                    />
                    <span className="pl-4 lg:hidden">{session.user.name}</span>
                  </div>
                }
              />
            </div>
          ) : (
            <LoginModal />
          )}
        </div>
      </Container>
    </header>
  );
}
