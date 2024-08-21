import { BadgeIcon, ProfileHeartIcon } from "@public/icons";
import { DummyProfileImg } from "@public/images";
import Image from "next/image";

export type TLeaderProfile = {
  _id: string;
  email: string;
  name: string;
  profile_img: string | null;
  phone: string;
  role: string;
  position_tag: string | "";
  introduce: string | "";
  my_category: { label: string; value: string }[];
};
export default function LeaderProfile({ writer }: { writer: TLeaderProfile }) {
  return (
    <div className="max-w-screen-sm w-full">
      <div className="flex justify-between items-start">
        <div className="flex gap-7">
          <Image
            className="w-12 h-12 rounded-full"
            width={48}
            height={48}
            src={writer.profile_img || DummyProfileImg}
            alt="profile"
          />
          <div className="flex flex-col">
            <div className="flex gap-2">
              <span className="text-2xl font-semibold">{writer.name}</span>
              {writer.role === "pro" ? (
                <Image src={BadgeIcon} alt="프로 뱃지" />
              ) : null}
            </div>
            <span className="text-sm text-label-dimmed">
              {writer.position_tag} / {writer.email}
            </span>
          </div>
        </div>
        <button className="flex items-center gap-1 px-4 py-1 bg-main-25 rounded-full">
          <Image src={ProfileHeartIcon} alt="찜하기" />
          <span className="text-main-600 font-semibold">찜하기</span>
        </button>
      </div>
      <p className="pt-4 text-sm text-label-dimmed">{writer.introduce}</p>
      <div className="flex gap-4 mt-4">
        {writer.my_category.map((tag) => (
          <span
            key={tag.value}
            className="py-1 px-5 text-main-600 text-xs font-semibold border border-blue-600 rounded-twenty"
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
}
