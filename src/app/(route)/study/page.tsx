import PageTitle from "@/common/Atoms/Text/PageTitle";

import { faker } from "@faker-js/faker";
import StudyCardList from "@/common/Templates/CardList";

const me = {
  username: "신지수",
};

export type TStudyCard = {
  id: number;
  user: {
    userType: "user" | "pro";
    nickname: string;
    image: string;
  };
  study: {
    title: string;
    categoryJob: string;
    people: string;
    deadline: string;
    RecruitmentStatus: string;
    image: string;
  };
};

export const studyCard = [
  {
    id: 1,
    user: {
      userType: "common",
      nickname: "디자이너 이수빈",
      image: faker.image.avatar(),
    },
    study: {
      title: "내가 디자인한 앱을 출시하기까지",
      categoryJob: "UIUX 디자인 스터디",
      people: "모집 8명",
      deadline: "8/13 마감",
      RecruitmentStatus: "모집중",
      image: faker.image.avatar(),
    },
  },
  {
    id: 2,
    user: {
      userType: "pro",
      nickname: "과학자 김민수",
      image: faker.image.avatar(),
    },
    study: {
      title: "재밌는 생명과학 실험 스터디",
      categoryJob: "과학스터디",
      people: "모집 12명",
      deadline: "8/23 마감",
      RecruitmentStatus: "모집중",
      image: faker.image.avatar(),
    },
  },
  {
    id: 3,
    user: {
      userType: "pro",
      nickname: "과학자 김민수",
      image: faker.image.avatar(),
    },
    study: {
      title: "재밌는 생명과학 실험 스터디",
      categoryJob: "과학스터디",
      people: "모집 12명",
      deadline: "8/23 마감",
      RecruitmentStatus: "모집중",
      image: faker.image.avatar(),
    },
  },
  {
    id: 4,
    user: {
      userType: "common",
      nickname: "디자이너 이수빈",
      image: faker.image.avatar(),
    },
    study: {
      title: "내가 디자인한 앱을 출시하기까지",
      categoryJob: "UIUX 디자인 스터디",
      people: "모집 8명",
      deadline: "8/13 마감",
      RecruitmentStatus: "모집중",
      image: faker.image.avatar(),
    },
  },
  {
    id: 5,
    user: {
      userType: "pro",
      nickname: "과학자 김민수",
      image: faker.image.avatar(),
    },
    study: {
      title: "재밌는 생명과학 실험 스터디",
      categoryJob: "과학스터디",
      people: "모집 12명",
      deadline: "8/23 마감",
      RecruitmentStatus: "모집중",
      image: faker.image.avatar(),
    },
  },
  {
    id: 6,
    user: {
      userType: "pro",
      nickname: "과학자 김민수",
      image: faker.image.avatar(),
    },
    study: {
      title: "재밌는 생명과학 실험 스터디",
      categoryJob: "과학스터디",
      people: "모집 12명",
      deadline: "8/23 마감",
      RecruitmentStatus: "모집중",
      image: faker.image.avatar(),
    },
  },
  {
    id: 7,
    user: {
      userType: "common",
      nickname: "디자이너 이수빈",
      image: faker.image.avatar(),
    },
    study: {
      title: "내가 디자인한 앱을 출시하기까지",
      categoryJob: "UIUX 디자인 스터디",
      people: "모집 8명",
      deadline: "8/13 마감",
      RecruitmentStatus: "모집중",
      image: faker.image.avatar(),
    },
  },
  {
    id: 8,
    user: {
      userType: "pro",
      nickname: "과학자 김민수",
      image: faker.image.avatar(),
    },
    study: {
      title: "재밌는 생명과학 실험 스터디",
      categoryJob: "과학스터디",
      people: "모집 12명",
      deadline: "8/23 마감",
      RecruitmentStatus: "모집중",
      image: faker.image.avatar(),
    },
  },
  {
    id: 9,
    user: {
      userType: "pro",
      nickname: "과학자 김민수",
      image: faker.image.avatar(),
    },
    study: {
      title: "재밌는 생명과학 실험 스터디",
      categoryJob: "과학스터디",
      people: "모집 12명",
      deadline: "8/23 마감",
      RecruitmentStatus: "모집중",
      image: faker.image.avatar(),
    },
  },
];

export default function StudyComponent() {
  return (
    <div className="py-20">
      <div>
        <div className="flex items-center justify-between">
          <PageTitle size="lg">스터디</PageTitle>
          <div className="relative">
            <input
              type="search"
              placeholder="검색어를 입력하세요"
              className="w-[380px] py-2 pr-9 pl-6 border border-line-normal rounded-lg placeholder:text-label-assist placeholder:text-label-nomral"
            />
            <span className="absolute right-2 top-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>카테고리 구역</div>

        <div className="flex gap-[6.25rem] flex-col">
          <div>
            <PageTitle size="md">
              {me.username}님이 찾던 케미 좋은 프로 스터디
            </PageTitle>
          </div>
          <div>
            <div className="flex items-end justify-between pb-6">
              <PageTitle size="md">
                오늘의 프로 스터디를 통해 빠른 성장을 경험해 보세요!
              </PageTitle>
            </div>
            <StudyCardList studyCard={studyCard} />
          </div>
          <div>
            <div className="flex items-end justify-between pb-6">
              <PageTitle size="md">프로없이, 우리끼리도 스터디해요</PageTitle>
            </div>
            <StudyCardList studyCard={studyCard} />
          </div>
          <div>
            <PageTitle size="md">케밋에서 인기있는 프로의 스터디</PageTitle>
          </div>
        </div>
      </div>
    </div>
  );
}
