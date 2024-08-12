import { Container, Footer, Header } from "@/common/Layout";
import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import TopBannerSection from "./_components/TopBannerSection";
import TabButtonsOfGoalSection from "./_components/CategoryTab/TabButtonsOfGoalSection";
import UserReviewSlider from "./_components/ReviewSection/UserReviewSlider";
import RecommendProStudies from "./_components/RecommendProStudies";
import RecommendLatestStudies from "./_components/RecommendLatestStudies";
import MainStatusBoard from "./_components/MainStatusBoard";
import { getSession } from "@/auth";

export default async function Home() {
  const session = await getSession();

  return (
    <>
      <Header />
      <TopBannerSection />
      <Container>
        <div className="flex flex-col gap-100 mt-100">
          {session?.user && (
            <MainStatusBoard
              name={session.user.name as string}
              userId={session.user.id}
            />
          )}
          <section>
            <SectionTitle size="md" className="mb-6">
              인기 많은 스터디 추천
            </SectionTitle>
            <RecommendProStudies userId={session?.user.id || ""} />
          </section>
          <section>
            <SectionTitle size="md" className="mb-6">
              방금 만들어진 스터디 추천
            </SectionTitle>
            <RecommendLatestStudies />
          </section>
          <section>
            <SectionTitle size="md" className="mb-6">
              목표별 스터디 탐색하기
            </SectionTitle>
            <TabButtonsOfGoalSection />
          </section>
        </div>
      </Container>
      <section className="reviews-promotion mt-100">
        <Container>
          <SectionTitle size="md" className="mb-6">
            케밋 스터디원들의 놀라운 성장 후기
          </SectionTitle>
        </Container>
        <UserReviewSlider />
      </section>
      <Footer />
    </>
  );
}
