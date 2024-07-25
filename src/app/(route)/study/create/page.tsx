import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import StudyForms from "./_components/StudyForms";
import { getSession } from "@/auth";

export default async function page() {
  const session = await getSession();
  return (
    <>
      <SectionTitle size="lg" className="pb-6 border-b border-black">
        스터디 개설하기
      </SectionTitle>
      <StudyForms session={session} />
    </>
  );
}
