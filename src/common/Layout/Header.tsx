import Link from "next/link";
import { AlarmIcon, CreateStudyIcon, Logo } from "@public/icons";
import Image from "next/image";
import Container from "./Container";
import LoginProfile from "@/app/(auth)/login/page";

export default function Header() {
  return (
    <header className="border-b border-b-line-normal">
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

          <div className="flex gap-8 ">
            {/* <Link
              href={"/login"}
              className={`py-2 px-4 border border-solid border-main-600 rounded-[.6rem] text-main-600 font-semibold`}
            >
              로그인
            </Link> */}
            <Link
              href={"/studyroom/create"}
              className="flex items-center justify-center gap-2 w-36 text-main-600 border border-solid border-main-600 rounded-[1.3rem]"
            >
              <Image src={CreateStudyIcon} alt="create study" />
              스터디 만들기
            </Link>
            <div className="flex gap-8 items-center">
              <div className="relative after:absolute after:top-1 after:left-[140%] after:block after:w-[1px] after:h-8 after:bg-label-alt">
                <LoginProfile />

                <ul className="my-menu hidden">
                  <li>
                    <Link href={"/my/pofile"}>svg 내 프로필</Link>
                  </li>
                  <li>
                    <Link href={"/my/study"}>svg 내 스터디</Link>
                  </li>
                  <li>
                    <Link href={"/my/like-study"}>svg 찜 스터디</Link>
                  </li>
                  <li>
                    <Link href={"/post"}>svg 내가 쓴 글</Link>
                  </li>
                  <li className="logout">
                    <button>svg 로그아웃</button>
                  </li>
                </ul>
              </div>
              <div>
                <Image src={AlarmIcon} alt="alarm" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
