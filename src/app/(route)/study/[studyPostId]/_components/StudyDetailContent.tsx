import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import LeaderProfile, { TLeaderProfile } from "./LeaderProfile";
import AccordionComponent, {
  TAccordionList,
} from "../../_components/AccordionComponent";

export type TContents = {
  content: string;
  rule: TAccordionList[];
  curriculum: TAccordionList[];
};

export default function StudyDetailContent({
  contents,
  user,
}: {
  contents: TContents;
  user: TLeaderProfile;
}) {
  const { content, rule, curriculum } = contents;

  return (
    <div className="my-20 border-t border-b">
      <div className="pt-[6.25rem]">
        <div>
          <SectionTitle size="md" className="pb-6 text-2xl font-semibold">
            스터디장
          </SectionTitle>
          <LeaderProfile user={user} />
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

      <AccordionComponent title="규칙" lists={rule} />
      <AccordionComponent title="세부 커리큘럼" lists={curriculum} />
    </div>
  );
}
