import Image from "next/image";
import { DummyProfileImg } from "@public/images";
import { getWriter } from "@/dummies/user";
import Thumbnail from "@/common/Atoms/Image/Thumbnail";
import { TStudyCard } from "@/types/model/StudyCard";
import { getStudyCards } from "@/dummies/studies";

export default function LinkedStudyCard({ studyId }: { studyId: string }) {
  const studies: TStudyCard[] = getStudyCards();
  const study = studies[0];
  const writer = getWriter(study.user._id);
  return (
    <div className="overflow-hidden flex gap-6 justify-stretch items-center rounded-twenty border border-line-normal">
      <div className="study-thumbnail bg-main-600 relative w-[200px] h-[132px]">
        <Thumbnail
          useIn="linked"
          width={200}
          height={132}
          src={study.thumbnailUrl}
          alt={study.title}
        />
        <div className="w-full h-full bg-gradient-to-tl from-black/25 absolute left-0 top-0"></div>
      </div>
      <div className="flex flex-col gap-4 py-5">
        <div className="study-info flex flex-col gap-0">
          <span className="text-body-nomral text-label-dimmed">
            {study.jobCategory.label} 스터디
          </span>
          <p className="text-[20px] text-black font-semibold w-full overflow-hidden text-nowrap text-ellipsis">
            {study.title}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="flex gap-2 items-center">
            <Image
              src={writer.profileUrl || DummyProfileImg}
              alt={`${writer.name} 프로필 이미지`}
              className="block w-5 h-5 rounded-full"
            />
            <span className="text-label-600 text-label-dimmed">
              {writer.position} {writer.name}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
