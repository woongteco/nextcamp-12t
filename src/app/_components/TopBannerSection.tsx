import BannerImage from "./BannerImage";
import { Container } from "@/common/Layout";
import TopBannerSearchbar from "./TopBannerSearchbar";

export default function TopBanner() {
  return (
    <section className="banner relative mt-16 mb-8">
      <div className="overflow-hidden">
        <BannerImage />
        <Container>
          <p className="text-H3 text-white absolute top-[108px] -translate-y-1/2 lg:translate-y-0 lg:top-16 md:pl-24 xl:pl-[8.75rem]">
            케밋에서 케미 터지는 스터디 장과 멤버들을 만나,{" "}
            <br className="hidden md:block" />
            놀라운 성장을 경험하세요!
          </p>
        </Container>
      </div>
      <div className="search-study mx-auto lg:absolute lg:z-10 lg:bottom-0 lg:left-[50vw] lg:translate-y-1/2 lg:-translate-x-1/2">
        <TopBannerSearchbar />
      </div>
    </section>
  );
}
