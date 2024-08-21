import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import StudyCardList from "@/common/Templates/CardList";

import BackButton from "../../_components/BackButton";
import StudyDetail from "./_components/StudyDetail";

import { getStudy } from "@/lib/actions/studyAction";
import { StudyDataFull } from "@/types/model/StudyCard";
import { Study } from "@/lib/schema";
import { revalidateTag } from "next/cache";
import { cfetch } from "@/utils/customFetch";
import { notFound } from "next/navigation";

async function increaseViewCount(studyId: string) {
  try {
    const update = await Study.findOneAndUpdate(
      { studyId },
      { $inc: { view: 1 } },
      { new: true }
    );
    revalidateTag("study");
    return { state: true, data: update };
  } catch (error: any) {
    return { state: false, message: "Fail to update view count" };
  }
}

export default async function StudyDetailPage({
  params: { studyPostId },
}: {
  params: { studyPostId: string };
}) {
  // studyDetail api
  await increaseViewCount(studyPostId);

  const studyDetail = await cfetch(`api/study/${studyPostId}`, {
    next: { tags: ["study", studyPostId] },
  })
    .then((res) => res.json())
    .then(({ data }) => data)
    .catch((err) => {
      console.error(err.message);
      return { state: false };
    });

  if (studyDetail.state === false) return notFound();

  const study = studyDetail.data as StudyDataFull;

  // studylist
  const result = await getStudy();
  let studyCardLists: StudyDataFull;
  studyCardLists = result.data;

  const studyCards = JSON.parse(JSON.stringify(studyCardLists));

  console.log("dbdb study ", study);

  return (
    <div>
      <BackButton />
      <StudyDetail study={study} />

      <div className="mt-20">
        <SectionTitle size="md" className="pb-5">
          비슷한 스터디들
        </SectionTitle>
        <StudyCardList studyCards={studyCards} count={4} />
      </div>
    </div>
  );
}
