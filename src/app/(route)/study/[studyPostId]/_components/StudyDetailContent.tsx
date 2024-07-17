import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import LeaderProfile from "./LeaderProfile";
import {
  Curriculum,
  Rule,
  getStudyLeaderUser,
  getStudyPostDetail,
} from "@/dummies/studypostdetail";
import Accordion from "../../_components/Accordion";

export default function StudyDetailContent() {
  const profile = getStudyLeaderUser();
  const cont = getStudyPostDetail();
  const { content } = cont;

  return (
    <div className="my-20 border-t border-b">
      <div className="pt-[6.25rem]">
        <div>
          <SectionTitle size="md" className="pb-6 text-2xl font-semibold">
            스터디장
          </SectionTitle>
          <LeaderProfile profile={profile} />
        </div>

        <div className="py-16  border-b">
          <SectionTitle size="md" className="text-2xl font-semibold">
            스터디 소개
          </SectionTitle>
          <div className="max-w-screen-md w-full mt-6 leading-6 font-normal text-base">
            {content}
          </div>
        </div>
      </div>

      <Accordion title="규칙" contentList={Rule} />
      <Accordion title="세부 커리큘럼" contentList={Curriculum} />
    </div>
  );
}
