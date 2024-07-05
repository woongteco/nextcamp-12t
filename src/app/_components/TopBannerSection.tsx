import BannerImage from "./BannerImage";
import Input from "@/common/Molecules/Form/Input";
import { CATEGORIES, GOALS } from "@/dummies/categories";
import Button from "@/common/Atoms/Form/Button";
import { Container } from "@/common/Layout";

export default function TopBanner() {
  return (
    <section className="banner relative mb-8">
      <div>
        <BannerImage />
        <Container>
          <p className="text-H3 text-white absolute top-16 pl-[8.75rem]">
            케밋에서 케미 터지는 스터디 장과 멤버들을 만나, <br />
            놀라운 성장을 경험하세요!
          </p>
        </Container>
      </div>
      <div className="search-study mx-auto absolute z-10 bottom-0 left-[50vw] translate-y-1/2 -translate-x-1/2">
        <form action="">
          <div className="search-bar w-[866px] h-[68px] shadow-normal bg-white rounded-full border border-line-alt flex flex-row flex-nowrap gap-5 items-center justify-between px-6 py-3">
            <Input.Select
              placeholder="직무 선택"
              unstyled
              options={CATEGORIES}
              className="w-[160px]"
            />
            <div className="h-4 w-0 border-l border-l-line-input"></div>
            <Input.Select
              placeholder="목표 선택"
              unstyled
              options={GOALS}
              className="w-[140px]"
            />
            <div className="h-4 w-0 border-l border-l-line-input"></div>
            <Input.Text
              placeholder="검색어를 입력하세요"
              className="border-none w-[400px] px-2 py-4 rounded-ten focus-visible:outline-1 focus-visible:outline-main-400"
            />
            <Button variation="icon" size={24}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
                  stroke="#2A7FFE"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
