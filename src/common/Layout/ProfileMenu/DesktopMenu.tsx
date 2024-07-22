import { AlarmIcon, CreateStudyIcon, LogoutIcon } from "@public/icons";
import Image from "next/image";
import Link from "next/link";
import DefaultProfileMenuItems from "./DefaultProfileMenuItems";
import { TProfileImage } from "./ResponsiveMenu";
import UnstyledLogoutButton from "../UnstyledLogoutButton";

export default function DesktopMenu({ profileImage }: TProfileImage) {
  return (
    <div className="gap-8 items-center hidden lg:flex">
      <Link
        href={"/studyroom/create"}
        className="flex items-center justify-center gap-2 w-36 py-2 leading-8 text-main-600 border border-solid border-main-600 rounded-[1.3rem]"
      >
        <Image src={CreateStudyIcon} alt="create study" />
        <span className="text-label-400">스터디 만들기</span>
      </Link>
      <div className="flex gap-4 items-center divide-x divide-label-alt">
        <div className="relative [&:hover>ul]:block">
          {profileImage}
          <ul className="fixed top-[4.0625rem] right-16 xl:right-[calc(50vw-600px)] w-40 p-1 pt-2 bg-white shadow-emphasize rounded-b-xl hidden [&_li]:py-[6px] [&_li]:px-3">
            <DefaultProfileMenuItems />
            <div className="w-full h-0 border-t my-2 p-0"></div>
            <li className="hover:bg-backdrop/10 rounded-lg w-full">
              <UnstyledLogoutButton className="flex gap-4 items-center">
                <Image src={LogoutIcon} alt="로그아웃" />
                <span className="text-label-400 text-label-neutral">
                  로그아웃
                </span>
              </UnstyledLogoutButton>
            </li>
          </ul>
        </div>
        <div className="pl-4">
          <Image src={AlarmIcon} alt="alarm" />
        </div>
      </div>
    </div>
  );
}
