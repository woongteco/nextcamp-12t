import Image from "next/image";
import Link from "next/link";
import connectDB from "@/lib/db";
import { DummyProfileImg } from "@public/images";
import { getWriter } from "@/dummies/user";
import Thumbnail from "@/common/Atoms/Image/Thumbnail";
import { TStudyCard } from "@/types/model/StudyCard";
import { getStudyCards } from "@/dummies/studies";
import { Study } from "@/lib/schema";

type StudyState =
  | { state: true; data: TStudyCard }
  | { state: false; message: string };

async function getStudy(studyId: string): Promise<StudyState> {
  await connectDB();

  try {
    const data: TStudyCard | null = await Study.findOne({ studyId });
    if (!data) {
      return { state: false, message: "존재하지 않는 스터디정보입니다." };
    }
    return { state: true, data };
  } catch (error: any) {
    console.error("error", error.message);
    return { state: false, message: "잘못된 id 값입니다." };
  }
}

export default async function LinkedStudyCard({
  studyId,
}: {
  studyId: string;
}) {
  if (!studyId) return null;

  const result = await getStudy(studyId);

  if (result.state === false) return null;

  const study = result.data;
  const writer = study.user;
  return (
    <Link href={`/study/${studyId}`}>
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
                src={writer.profile_img || DummyProfileImg}
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
    </Link>
  );
}
