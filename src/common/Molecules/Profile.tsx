import Image from "next/image";
import ProfileImg from "../Atoms/Image/ProfileImg";
import { BadgeIcon } from "@public/icons";
import { TUserBase } from "@/types/model/User";
import clsx from "clsx";
import { ProfileSchema } from "@/types/model/Profile";

export default function Profile({
  user,
  size,
}: {
  user: TUserBase | ProfileSchema;
  size: "default" | "large" | "small";
}) {
  const gap = {
    default: "gap-4",
    large: "gap-6",
    small: "gap-2",
  };
  const style = {
    default: "text-H4 text-label-normal",
    large: "text-H4 text-label-normal",
    small: "text-label-600 text-label-dimmed",
  };

  const src =
    user?.userId?.profile_img ||
    user?.profile_img ||
    "/images/profile/DummyProfileImg.jpg";
  return (
    <div className={clsx("flex flex-row flex-nowrap items-center", gap[size])}>
      <ProfileImg
        size={size}
        src={src}
        alt={`${user?.userId?.name || user?.name} 프로필 이미지`}
      />
      <span className={style[size]}>
        {user?.position_tag ? `${user?.position_tag} ` : null}
        {user?.userId?.name || user?.name}
      </span>
      {(user?.userId?.role === "pro" || user?.role === "pro") && (
        <Image src={BadgeIcon} alt="pro" />
      )}
    </div>
  );
}
