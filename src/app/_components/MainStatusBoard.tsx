import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import UserCurrentStudySection from "./UserCurrentStudySection";

export default function MainStatusBoard({
  name,
  userId,
}: {
  name: string;
  userId: string;
}) {
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
      <UserCurrentStudySection userId={userId} />
    </section>
  );
}
