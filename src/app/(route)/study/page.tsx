import PageTitle from "@/common/Atoms/Text/PageTitle";

import { faker } from "@faker-js/faker";
import StudyCardList from "@/common/Templates/CardList";
import HotStudyList from "./_components/HotStudyList";
import GoodStudyList from "./_components/GoodStudyList";
import Image from "next/image";
import {
  CategoryAplicationIcon,
  CategoryChallengeIcon,
  CategoryJobinterviewIcon,
  CategoryLearningIcon,
  CategoryLectureIcon,
  CategoryLicensetestIcon,
  CategoryOfflineIcon,
  CategoryOnlienIcon,
  CategoryProjectIcon,
  CategoryhobbyIcon,
} from "../../../../public/icons";
import SelectCategory from "../post/write/_components/SelectCategory";

const me = {
  username: "신지수",
};

export type TStudyCard = {
  id: number;
  user: {
    userType: string | "user" | "pro";
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
      userType: "user",
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
      userType: "user",
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
      userType: "user",
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

        <div className="pt-[1.875rem] mb-11">
          <div></div>
          <div className="flex justify-between text-[#C2C3C4]">
            <div className="flex gap-4">
              <div className="flex flex-col items-center justify-center gap-2 cursor-pointer">
                <div className="flex justify-center items-center w-11 h-11">
                  <Image
                    width={24}
                    height={24}
                    src={CategoryLearningIcon}
                    alt="개념 학습"
                  />
                </div>
                <span>개념학습</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex justify-center items-center w-11 h-11">
                  <Image
                    width={24}
                    height={24}
                    src={CategoryAplicationIcon}
                    alt="응용/활용"
                  />
                </div>
                <span>응용/활용</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex justify-center items-center w-11 h-11">
                  <Image
                    width={24}
                    height={24}
                    src={CategoryProjectIcon}
                    alt="프로젝트"
                  />
                </div>
                <span>프로젝트</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex justify-center items-center w-11 h-11">
                  <Image
                    width={24}
                    height={24}
                    src={CategoryLicensetestIcon}
                    alt="자격증/시험"
                  />
                </div>
                <span>자격증/시험</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex justify-center items-center w-11 h-11">
                  <Image
                    width={24}
                    height={24}
                    src={CategoryJobinterviewIcon}
                    alt="취업/면접"
                  />
                </div>
                <span>취업/면접</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex justify-center items-center w-11 h-11">
                  <Image
                    width={24}
                    height={24}
                    src={CategoryChallengeIcon}
                    alt="챌린지"
                  />
                </div>
                <span>챌린지</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex justify-center items-center w-11 h-11">
                  <Image
                    width={24}
                    height={24}
                    src={CategoryLectureIcon}
                    alt="특강"
                  />
                </div>
                <span>특강</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex justify-center items-center w-11 h-11">
                  <Image
                    width={24}
                    height={24}
                    src={CategoryhobbyIcon}
                    alt="취미"
                  />
                </div>
                <span>취미</span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex justify-center items-center w-11 h-11">
                  <Image
                    width={24}
                    height={24}
                    src={CategoryOfflineIcon}
                    alt="오프라인"
                  />
                </div>
                <span>오프라인</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex justify-center items-center w-11 h-11">
                  <Image
                    width={24}
                    height={24}
                    src={CategoryOnlienIcon}
                    alt="온라인"
                  />
                </div>
                <span>온라인</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-[6.25rem] flex-col">
          <div>
            <PageTitle size="md" className="pb-6">
              {me.username}님이 찾던 케미 좋은 프로 스터디
            </PageTitle>
            <div className="flex flex-col gap-6">
              <div>
                <PageTitle size="sm" className="pb-3">
                  디자인 프로 스터디
                </PageTitle>
                <GoodStudyList />
              </div>
              <div>
                <PageTitle size="sm" className="pb-3">
                  취업 / 포트폴리오 프로 스터디
                </PageTitle>
                <GoodStudyList />
              </div>
            </div>
          </div>
          <div>
            <PageTitle size="md" className="pb-6">
              오늘의 프로 스터디를 통해 빠른 성장을 경험해 보세요!
            </PageTitle>
            <StudyCardList studyCard={studyCard} />
          </div>
          <div>
            <PageTitle size="md" className="pb-6">
              프로없이, 우리끼리도 스터디해요
            </PageTitle>
            <StudyCardList studyCard={studyCard} />
          </div>
          <div>
            <PageTitle size="md" className="pb-6">
              케밋에서 인기있는 프로의 스터디
            </PageTitle>
            <HotStudyList />
          </div>
        </div>
      </div>
    </div>
  );
}
