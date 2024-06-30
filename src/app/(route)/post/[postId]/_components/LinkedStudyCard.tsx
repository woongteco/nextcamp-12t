import Image from "next/image";
import {
  DefaultThumbnailImg,
  DummyProfileImg,
} from "../../../../../../public/images";
import { TStudy, getStudyData } from "@/dummies/studies";
import { getWriter } from "@/dummies/user";
import Thumbnail from "@/common/Atoms/Image/Thumbnail";

export default function LinkedStudyCard({ studyId }: { studyId: string }) {
  const study: TStudy = getStudyData(studyId);
  const writer = getWriter(study.writerId);
  return (
    <div className="overflow-hidden flex gap-6 justify-stretch items-center rounded-twenty border border-line-normal">
      <div className="study-thumbnail bg-main-600">
        <Thumbnail className="w-[200px] h-[132px]" />
      </div>
      <div className="flex flex-col gap-4 py-5">
        <div className="study-info flex flex-col gap-0">
          <span className="text-body-nomral text-[#828285]">
            {study.category.label} 스터디
          </span>
          <p className="text-[20px] text-black font-semibold w-full overflow-hidden text-nowrap text-ellipsis">
            {study.contents.title}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="flex gap-2 items-center">
            <Image
              src={writer.profileUrl || DummyProfileImg}
              alt={`${writer.name} 프로필 이미지`}
              className="block w-5 h-5 rounded-full"
            />
            <span className="text-label-600 text-[#828285]">
              {writer.position} {writer.name}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
