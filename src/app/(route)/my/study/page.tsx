import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import StudyCardItem from "@/common/Organisms/StudyCardItem";
import { getStudiesData } from "@/dummies/studies";
import { getUser } from "@/dummies/user";
import CircleProgressGraph from "../_components/CircleProgressGraph";

export default function MyStudyPage() {
  const user = getUser();
  const studyCard = getStudiesData();
  const mission = { total: 5, done: 4 };
  return (
    <div className="flex flex-col gap-100">
      <section>
        <SectionTitle size="lg" className="mb-6">
          {user.name}님, 오늘 하루도 달려봐요!
        </SectionTitle>
        <div className="grid gap-6 grid-flow-col lg:grid-flow-row grid-cols-[4fr_2fr] [&>.cardBox]:h-[220px] [&>.cardBox]:bg-card [&>.cardBox]:rounded-twenty [&>.cardBox]:px-8 [&>.cardBox]:py-6">
          <div className="cardBox relative">
            <p className="text-H4 text-main-600 mb-6">오늘의 미션</p>
            <p className="text-[20px] font-bold text-label-normal">
              아직 완료하지 못한 미션이 있어요!
            </p>
            <p className="text-body-600 text-label-dimmed">
              오늘까지 꼭 완료해주세요
            </p>
            <div className="absolute right-8 top-6">
              <CircleProgressGraph
                total={mission.total}
                progress={mission.done}
              />
              <p className="text-H2 center">
                <span>{mission.total - mission.done}</span>
                <span className="text-label-400"> / {mission.total}개</span>
              </p>
            </div>
          </div>
          <div className="cardBox flex flex-col justify-between relative bg-shield-badge bg-no-repeat bg-[right_2rem_bottom_2rem]">
            <p className="text-H4">
              지금까지
              <br />
              {user.badges}개의 뱃지를 모았어요
            </p>
            <p className="text-[2.5rem] font-bold">X{user.badges}</p>
          </div>
        </div>
      </section>
      <section>
        <SectionTitle size="md" className="mb-6">
          참여 중인 스터디
        </SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-gutter-sm xl:gap-gutter-xl">
          {studyCard.slice(0, 1).map((card) => (
            <StudyCardItem key={card.id} card={card} />
          ))}
        </div>
      </section>
      {/* TODO: 종료된 스터디 표시 추가 필요 */}
      <section>
        <SectionTitle size="md" className="mb-6">
          종료된 스터디
        </SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-gutter-sm xl:gap-gutter-xl">
          {studyCard.slice(1, 3).map((card) => (
            <StudyCardItem key={card.id} card={card} />
          ))}
        </div>
      </section>
      <section>
        <SectionTitle size="md" className="mb-6">
          내가 만든 스터디
        </SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-gutter-sm xl:gap-gutter-xl">
          {studyCard.slice(3, 5).map((card) => (
            <StudyCardItem key={card.id} card={card} />
          ))}
        </div>
      </section>
    </div>
  );
}
