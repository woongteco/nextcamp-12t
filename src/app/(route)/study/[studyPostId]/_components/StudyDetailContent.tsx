import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import LeaderProfile from "./LeaderProfile";
import AccordionComponent from "../../_components/AccordionComponent";
import ContentArea from "@/common/Organisms/ContentArea";
import { ProfileSchema } from "@/types/model/User";

export type TContents = {
  content: string;
  rules: string[];
  curriculums: string[];
};

export default function StudyDetailContent({
  contents,
  writer,
}: {
  contents: TContents;
  writer: ProfileSchema;
}) {
  const { content, rules, curriculums } = contents;

  return (
    <div className="my-20 border-t border-b">
      <div className="pt-[6.25rem]">
        <div>
          <SectionTitle size="md" className="pb-6 text-2xl font-semibold">
            스터디장
          </SectionTitle>
          <LeaderProfile writer={writer} />
        </div>

        <div className="py-16  border-b">
          <SectionTitle size="md" className="text-2xl font-semibold">
            스터디 소개
          </SectionTitle>
          <div className="max-w-screen-md w-full mt-6 leading-6 font-normal text-base">
            <ContentArea html={content} />
          </div>
        </div>
      </div>

      <AccordionComponent title="규칙" lists={rules} />
      <AccordionComponent title="세부 커리큘럼" lists={curriculums} />
    </div>
  );
}
