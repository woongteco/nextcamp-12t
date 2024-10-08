import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import StudyForm from "./_components/StudyForm";
import { getSession } from "@/auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await getSession();

  if (!session) {
    return redirect("/login");
  }
  return (
    <>
      <SectionTitle size="lg" className="pb-6 border-b border-black">
        스터디 개설하기
      </SectionTitle>

      <div className="pt-14 mb-8">
        <SectionTitle size="md">개설자의 역량을 펼쳐주세요</SectionTitle>
        <span className="text-sm text-label-dimmed">
          당신이 가진 직무 역량과 팁을 공유해주세요
        </span>
      </div>
      <StudyForm />
    </>
  );
}
