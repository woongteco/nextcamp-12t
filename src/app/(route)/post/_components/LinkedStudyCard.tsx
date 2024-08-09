import Image from "next/image";
import Link from "next/link";
import connectDB from "@/lib/db";
import { DummyProfileImg } from "@public/images";
import { getWriter } from "@/dummies/user";
import Thumbnail from "@/common/Atoms/Image/Thumbnail";
import { StudySchema } from "@/types/model/StudyCard";
import { getStudyCards } from "@/dummies/studies";
import { Study } from "@/lib/schema";
import { delay } from "@/dummies/utils";
import { getStudy } from "@/lib/actions/studyAction";

type StudyState =
  | { state: true; data: StudySchema }
  | { state: false; message: string };

// AS_IS: testing with dummy data
// TO_BE: DB에 스터디 데이터가 존재한다면 DB에서 데이터를 가져와서 사용: line 11
// async function getStudy(studyId: string): Promise<StudyState> {
//   await delay(500);
//   const data: StudySchema | undefined = getStudyCards().find(
//     (study) => study.studyId === studyId
//   );
//   if (data === undefined) {
//     return { state: false, message: `Not Found id: ${studyId}` };
//   }
//   return { state: true, data };
// }

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
