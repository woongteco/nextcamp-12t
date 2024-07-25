import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import { getUser } from "@/dummies/user";
import UserCurrentStudySection from "./UserCurrentStudySection";

export default function MainStatusBoard({ name }: { name: string | null }) {
  const NOW_DATE = new Intl.DateTimeFormat("ko-KR", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(Date.now());

  return (
    <section>
      <SectionTitle size="md" className="mb-6">
        {name}님의 <span className="text-main-600">{NOW_DATE}</span> 스터디 현황
      </SectionTitle>
      <UserCurrentStudySection />
    </section>
  );
}
