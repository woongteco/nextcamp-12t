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
                    <ul className="fixed top-[4.0625rem] py-1 bg-white shadow-emphasize rounded-b-xl hidden">
                      <li className="py-2 px-4">
                        <Link
                          href={`/my/profile`}
                          className="flex gap-3 items-center"
                        >
                          <Image
                            src={SettingProfileIcon}
                            alt="내 프로필"
                            width={24}
                            height={24}
                          />
                          <span className="text-base text-label-neutral">
                            내 프로필
                          </span>
                        </Link>
                      </li>
                      <li className="py-2 px-4">
                        <Link
                          href={`/my/study`}
                          className="flex gap-3 items-center"
                        >
                          <Image
                            src={StudyIcon}
                            alt="내 스터디"
                            width={24}
                            height={24}
                          />
                          <span className="text-base text-label-neutral">
                            내 스터디
                          </span>
                        </Link>
                      </li>
                      <li className="py-2 px-4">
                        <Link
                          href={`/my/like-study`}
                          className="flex gap-3 items-center"
                        >
                          <Image
                            src={SaveHeartIcon}
                            alt="찜 스터디"
                            width={24}
                            height={24}
                          />
                          <span className="text-base text-label-neutral">
                            찜 스터디
                          </span>
                        </Link>
                      </li>
                      <li className="pt-2 pb-3 px-4">
                        <Link
                          href={`/my/post`}
                          className="flex gap-3 items-center"
                        >
                          <Image
                            src={PostIcon}
                            alt="내가 쓴 글"
                            width={24}
                            height={24}
                          />
                          <span className="text-base text-label-neutral">
                            내가 쓴 글
                          </span>
                        </Link>
                      </li>
                      <li className="pt-3 pb-2 px-4 border-t">
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
                        {/* <button
                          type="button"
                          className="flex gap-3 items-center"
                        >
                          <Image
                            src={LogoutIcon}
                            alt="로그아웃"
                            width={24}
                            height={24}
                          />
                          <span className="text-base text-label-neutral">
                            로그아웃
                          </span>
                        </button> */}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Image src={AlarmIcon} alt="alarm" />
                  </div>
                </div>
              </>

              {/* <Link
                href={"/login"}
                className={`py-2 px-4 border border-solid border-main-600 rounded-[.6rem] text-main-600 font-semibold`}
              >
                로그인
              </Link> */}
            </div>
          ) : (
            <LoginModal />
          )}
        </div>
      </Container>
    </header>
  );
}
