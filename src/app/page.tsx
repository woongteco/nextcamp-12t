import { Container, Footer, Header } from "@/common/Layout";
import PageTitle from "@/common/Atoms/Text/PageTitle";
import TopBannerSection from "./_components/TopBannerSection";
import UserCurrentStudySection from "./_components/UserCurrentStudySection";
import TabButtonsOfGoalSection from "./_components/TabButtonsOfGoalSection";
import UserReviewSlider from "./_components/ReviewSection/UserReviewSlider";
import { getUser } from "@/dummies/user";

const NOW_DATE = new Intl.DateTimeFormat("kr-KO", {
  weekday: "long",
  month: "long",
  day: "numeric",
}).format(Date.now());

export default function Home() {
  const user = getUser();
  return (
    <>
      <Header />
      <TopBannerSection />
      <Container>
        <div className="flex flex-col gap-100 mt-100">
          {user && (
            <section>
              <PageTitle size="md" className="mb-6">
                {user.name}님의{" "}
                <span className="text-main-600">{NOW_DATE}</span> 스터디 현황
              </PageTitle>
              <UserCurrentStudySection />
            </section>
          )}
          <section>
            <PageTitle size="md" className="mb-6">
              인기 많은 프로 스터디 추천
            </PageTitle>
          </section>
          <section>
            <PageTitle size="md" className="mb-6">
              방금 만들어진 스터디 추천
            </PageTitle>
          </section>
          <section>
            <PageTitle size="md" className="mb-6">
              목표별 스터디 탐색하기
            </PageTitle>
            <TabButtonsOfGoalSection />
          </section>
        </div>
      </Container>
      <section className="reviews-promotion mt-100">
        <Container>
          <PageTitle size="md" className="mb-6">
            케밋 스터디원들의 놀라운 성장 후기
          </PageTitle>
        </Container>
        <UserReviewSlider />
      </section>
      <Footer />
    </>
  );
}
