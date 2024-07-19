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
import UnstyledLogoutButton from "./UnstyledLogoutButton";

const profileDepthList = [
  {
    link: "/my/profile",
    title: "내 프로필",
    icon: SettingProfileIcon,
  },
  {
    link: "/my/study",
    title: "내 스터디",
    icon: StudyIcon,
  },
  {
    link: "/my/like-study",
    title: "찜 스터디",
    icon: SaveHeartIcon,
  },
  {
    link: "/my/post",
    title: "내가 쓴 글",
    icon: PostIcon,
  },
];

export default async function Header() {
  const session = await getSession();

  return (
    <header className="fixed top-0 w-full bg-white z-header border-b border-b-line-normal">
      <Container>
        <div className="h-16 flex items-center justify-between">
          <div className="flex gap-20">
            <h1>
              <Link href={"/"}>
                <Image src={Logo} alt="logo" />
              </Link>
            </h1>
            <nav>
              <ul className="flex gap-12">
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
            <div className="flex gap-8 items-center">
              <>
                <Link
                  href={"/studyroom/create"}
                  className="flex items-center justify-center gap-2 w-36 py-2 leading-8 text-main-600 border border-solid border-main-600 rounded-[1.3rem]"
                >
                  <Image src={CreateStudyIcon} alt="create study" />
                  <span className="text-label-400">스터디 만들기</span>
                </Link>
                <div className="flex gap-8 items-center">
                  <div className="relative after:absolute after:top-4 after:left-[140%] after:block after:w-[1px] after:h-8 after:bg-label-alt [&:hover>ul]:block">
                    <Image
                      src={DummyProfileImg}
                      className="py-3"
                      alt="profile img"
                    />
                    <ul className="fixed top-[4.0625rem] bg-white shadow-emphasize rounded-b-xl hidden">
                      {profileDepthList.map(({ link, title, icon }) => (
                        <li className={"px-4 py-3 hover:bg-gray-100"}>
                          <Link href={link} className="flex gap-3 items-center">
                            <Image
                              src={icon}
                              alt={title}
                              width={24}
                              height={24}
                            />
                            <span className="text-base text-label-neutral">
                              {title}
                            </span>
                          </Link>
                        </li>
                      ))}
                      <li className="px-4 py-3 border-t hover:rounded-b-xl hover:bg-gray-100">
                        <UnstyledLogoutButton className="flex gap-3 items-center">
                          <Image
                            src={LogoutIcon}
                            alt="로그아웃"
                            width={24}
                            height={24}
                          />
                          <span className="text-base text-label-neutral">
                            로그아웃
                          </span>
                        </UnstyledLogoutButton>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Image src={AlarmIcon} alt="alarm" />
                  </div>
                </div>
              </>
            </div>
          ) : (
            <LoginModal />
          )}
        </div>
      </Container>
    </header>
  );
}
