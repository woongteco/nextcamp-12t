import {
  LogoutIcon,
  PostIcon,
  SaveHeartIcon,
  SettingProfileIcon,
  StudyIcon,
} from "@public/icons";
import Image from "next/image";
import Link from "next/link";
import UnstyledLogoutButton from "../UnstyledLogoutButton";
import { ReactNode } from "react";

export default function DefaultProfileMenuItems() {
  return (
    <>
      <ProfileMenuItemLink
        icon={
          <Image
            src={SettingProfileIcon}
            alt="내 프로필"
            width={24}
            height={24}
          />
        }
        label="내 프로필"
      />
      <ProfileMenuItemLink
        icon={<Image src={StudyIcon} alt="내 스터디" />}
        label="내 스터디"
      />
      <ProfileMenuItemLink
        icon={<Image src={SaveHeartIcon} alt="찜 스터디" />}
        label="찜 스터디"
      />
      <ProfileMenuItemLink
        icon={<Image src={PostIcon} alt="내가 쓴 글" />}
        label="내가 쓴 글"
      />
      <div className="w-full h-0 border-t my-2 p-0"></div>
      <UnstyledLogoutButton className="w-full">
        <ProfileMenuItemLink
          icon={<Image src={LogoutIcon} alt="로그아웃" />}
          label="로그아웃"
        />
      </UnstyledLogoutButton>
    </>
  );
}

function ProfileMenuItemLink({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <li className="hover:bg-backdrop/10 rounded-lg w-full">
      <Link href={`/my/post`} className="flex gap-3 items-center">
        <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
        <span className="text-label-400 text-label-neutral">{label}</span>
      </Link>
    </li>
  );
}
