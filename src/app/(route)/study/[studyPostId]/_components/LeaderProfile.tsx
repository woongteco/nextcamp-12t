import { BadgeIcon, ProfileHeartIcon } from "@public/icons";
import Image from "next/image";

type TLeaderProfile = {
  id: number;
  userType: string;
  username: string;
  nickname: string;
  email: string;
  jobcategory: string;
  profileUrl: string;
  content: string;
  tags: string[];
};
export default function LeaderProfile({
  profile,
}: {
  profile: TLeaderProfile;
}) {
  return (
    <div className="max-w-screen-sm w-full">
      <div className="flex justify-between items-start">
        <div className="flex gap-7">
          <Image
            className="w-12 h-12 rounded-full"
            width={48}
            height={48}
            src={profile.profileUrl}
            alt="profile"
          />
          <div className="flex flex-col">
            <div className="flex gap-2">
              <span className="text-2xl font-semibold">{profile.nickname}</span>
              {profile.userType === "pro" ? (
                <Image src={BadgeIcon} alt="프로 뱃지" />
              ) : null}
            </div>
            <span className="text-sm text-label-dimmed">
              {profile.jobcategory} / {profile.email}
            </span>
          </div>
        </div>
        <button className="flex items-center gap-1 px-4 py-1 bg-main-25 rounded-full">
          <Image src={ProfileHeartIcon} alt="찜하기" />
          <span className="text-main-600 font-semibold">찜하기</span>
        </button>
      </div>
      <p className="pt-4 text-sm text-label-dimmed">{profile.content}</p>
      <div className="flex gap-4 mt-4">
        {profile.tags.map((tag) => (
          <span
            key={tag}
            className="py-1 px-5 text-main-600 text-xs font-semibold border border-blue-600 rounded-twenty"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
