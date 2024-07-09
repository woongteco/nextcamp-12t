"use client";

import Keyword from "@/common/Atoms/Text/Keyword";
import PageTitle from "@/common/Atoms/Text/PageTitle";
import StudyCardList from "@/common/Templates/CardList";

import { getStudiesData } from "@/dummies/studies";
import { faker } from "@faker-js/faker";

import {
  BadgeIcon,
  CalendarIcon,
  CategoryIcon,
  ExpenseIcon,
  FullheartIcon,
  OnOffIcon,
  PeopleIcon,
  QandAIcon,
  SaveHeartSMIcon,
  ShareIcon,
} from "@public/icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import AccordionList from "../_components/AccordionList";
import AccordionTitle from "../_components/AccordionTitle";

import Thumbnail from "@/common/Atoms/Image/Thumbnail";
import CommentInput from "@/common/Organisms/Comment/CommentInput";
import ProfileImg from "@/common/Atoms/Image/ProfileImg";

const Rule = [
  { accordionId: 1, content: "⏰ 집중 작업 시간 [ PM 14:00 - PM 17:00 ] ⏰" },
  { accordionId: 2, content: "개인사정 및 불참 시 미리 공지하기" },
  { accordionId: 3, content: "모르는 부분은 바로바로 질문하기" },
  { accordionId: 4, content: "공유 및 대화 환영하기" },
];

const Curriculum = [
  { accordionId: 1, content: "1주차 : 유튜브 뮤직앱 클론피그마 도전" },
  { accordionId: 2, content: "2주차 : 강의 시청 및 과제 부가" },
  { accordionId: 3, content: "3주차 : 클론피그마 활용 TIP" },
  { accordionId: 4, content: "4주차 : 유튜브 뮤직앱 클론피그마 완성" },
];

export default function StudyPostComponent() {
  const router = useRouter();
  const studyCard = getStudiesData();

  return (
    <div className="mt-20 pb-20">
      <button
        className="flex gap-2 items-center mb-8 text-body-600 hover:text-main-600 [&:hover_path]:stroke-main-600"
        onClick={() => router.back()}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 19L8 12L15 5"
            stroke="#202020"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-base font-semibold">목록으로 돌아가기</span>
      </button>
      <div>
        <div className="flex gap-7">
          <div className="relative">
            {/* <Thumbnail /> */}
            <Image
              width={582}
              height={438}
              className="w-[36.375rem] h-[27.375rem] rounded-3xl"
              src={faker.image.avatar()}
              alt="썸네일 이미지"
            />
            <Keyword
              bg="bg-status-danger"
              text="text-white"
              className="absolute left-0 top-6 rounded-l-none"
            >
              모집중
            </Keyword>
            <Keyword
              bg="bg-status-danger"
              text="text-white"
              className="absolute left-[68px] top-6"
            >
              5/17 마감
            </Keyword>
          </div>
          <div>
            <span className="block mb-3 text-[#888] text-xl">
              UXUI 디자인 스터디
            </span>
            <p className="text-H2">웹디자인 마스터 하기 !</p>
            <div className="flex gap-8 py-10">
              <ul className="flex flex-col gap-4">
                <li className="flex gap-4">
                  <Image
                    className="w-6 h-6"
                    width={24}
                    height={24}
                    src={CategoryIcon}
                    alt="카테고리"
                  />
                  <strong className="text-xl">카테고리</strong>
                </li>
                <li className="flex gap-4">
                  <Image
                    className="w-6 h-6"
                    width={24}
                    height={24}
                    src={PeopleIcon}
                    alt="모집 인원"
                  />
                  <strong className="text-xl">모집 인원</strong>
                </li>
                <li className="flex gap-4">
                  <Image
                    className="w-6 h-6"
                    width={24}
                    height={24}
                    src={ExpenseIcon}
                    alt="참가 비용"
                  />
                  <strong className="text-xl">참가 비용</strong>
                </li>
                <li className="flex gap-4">
                  <Image
                    className="w-6 h-6"
                    width={24}
                    height={24}
                    src={CalendarIcon}
                    alt="스터디 기간"
                  />
                  <strong className="text-xl">스터디 기간</strong>
                </li>
                <li className="flex gap-4">
                  <Image
                    className="w-6 h-6"
                    width={24}
                    height={24}
                    src={OnOffIcon}
                    alt="스터디 방식"
                  />
                  <strong className="text-xl">스터디 방식</strong>
                </li>
              </ul>

              <ul className="flex flex-col gap-4 text-xl">
                <li>취업/면접</li>
                <li>정원 20명</li>
                <li>참가비 무료</li>
                <li>06/24 ~ 7/21</li>
                <li>온라인 스터디</li>
              </ul>
            </div>

            <div className="flex items-center gap-5">
              <Link
                href={"/studyroom/:studyroomId"}
                className="w-full max-w-[12.5rem] h-16 border rounded-ten border-main-700 text-main-700 text-center leading-[62px] font-semibold text-lg"
              >
                스터디룸 살펴보기
              </Link>
              <button className="w-full max-w-[12.5rem] h-16 border rounded-ten bg-main-700 font-semibold text-lg text-white">
                스터디 참여 신청하기
              </button>
              <div className="flex items-center gap-3">
                <Image
                  className="w-9 h-9"
                  width={36}
                  height={36}
                  src={ShareIcon}
                  alt="공유하기"
                />
                <Image
                  className="w-9 h-9"
                  width={36}
                  height={36}
                  src={FullheartIcon}
                  alt="좋아요"
                />
                <span className="text-label-neutral font-semibold">262</span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-20 border-t border-b">
          <div className="pt-[6.25rem]">
            <div>
              <PageTitle size="md" className="pb-6 text-2xl font-semibold">
                스터디장
              </PageTitle>
              <div className="max-w-screen-sm w-full">
                <div className="flex justify-between items-start">
                  <div className="flex gap-7">
                    <Image
                      className="w-12 h-12 rounded-full"
                      width={48}
                      height={48}
                      src={faker.image.avatar()}
                      alt="profile"
                    />
                    <div className="flex flex-col">
                      <div className="flex gap-2">
                        <span className="text-2xl font-semibold">
                          UXUI 디자이너 이선형
                        </span>
                        <Image src={BadgeIcon} alt="프로 뱃지" />
                      </div>
                      <span className="text-sm text-label-dimmed">
                        디자인, 마케팅 / jisoo.sin@chemeet.com
                      </span>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 px-4 py-1 bg-main-25 rounded-full">
                    <Image src={SaveHeartSMIcon} alt="찜하기" />
                    <span className="text-main-600 font-semibold">찜하기</span>
                  </button>
                </div>
                <p className="pt-4 text-sm text-label-dimmed">
                  상명대학교 졸업 후 많은 이직 끝에 네이버에 입사하여 쌓은
                  기술들과 카카오로 이직하며 얻은 노하우를 여러분들과 함께
                  나누며 같이 성장하고 싶습니다.
                </p>
                <div className="flex gap-4 mt-4">
                  <span className="py-1 px-5 text-main-600 text-xs font-semibold border border-blue-600 rounded-twenty">
                    #디자인8년차
                  </span>
                  <span className="py-1 px-5 text-main-600 text-xs font-semibold border border-blue-600 rounded-twenty">
                    #전네이버디자이너
                  </span>
                  <span className="py-1 px-5 text-main-600 text-xs font-semibold border border-blue-600 rounded-twenty">
                    #현카카오디자이너
                  </span>
                </div>
              </div>
            </div>

            <div className="py-16  border-b">
              <PageTitle size="md" className="text-2xl font-semibold">
                스터디 소개
              </PageTitle>
              <div className="max-w-screen-md w-full mt-6 leading-6 font-normal text-base">
                <p>
                  이 스터디는 예비 디자이너들을 위한 UXUI 디자인 스터디입니다!
                </p>
                <p>
                  혼자서 피그마 공부를 하고 있는데 현업에서 어떻게 활용하는지,
                  완성도를 높이는지 알지 못해 답답했다면 🤦‍♀🤦‍♂
                  <br />
                  클론피그마 챌린지로 4주 동안 유튜브 뮤직앱을 구현해보면서
                  피그마 활용 Tip을 전수 받고
                  <br /> 함께 도전하는 참여자들과 소통하며 빠르게 Skill🆙
                  해보세요!
                  <br />
                  <br />
                  🔎이런 분들께 추천드려요!
                  <br />
                  피그마 기초는 알지만, 실무에서 어떻게 사용되는지 모르는 취준생
                  <br />
                  회사에서 피그마를 사용하고 있으나 더 다양하게 활용하고 싶은
                  디자이너
                  <br />
                  피그마를 활용하여 개발자와의 소통 비용을 줄이고 싶은 서비스
                  기획자
                </p>
              </div>
            </div>
          </div>

          <div className="border-b">
            <AccordionTitle title="규칙" />
            <AccordionList CONTENTLIST={Rule} />
          </div>

          <div className="border-b">
            <AccordionTitle title="세부 커리큘럼" />
            <AccordionList CONTENTLIST={Curriculum} />
          </div>
        </div>

        <div className="py-8 px-10 border border-line-neutral rounded-twenty">
          <div className="flex items-center gap-1 mb-8">
            <Image src={QandAIcon} alt="스터디 QandA" />
            <span className="text-lg font-semibold text-[#202020]">
              스터디 Q&A
            </span>
            <span className="text-lg font-semibold text-primary-strong">4</span>
          </div>
          {/* 댓글 전체 */}
          {/* 1번째 1개 댓글  */}
          <ul>
            <li className="py-6 border-t">
              <div className="flex items-center gap-4">
                <ProfileImg
                  src="/images/profile/DummyProfileImg.jpg"
                  alt="프로필 이미지"
                  className="my-[6px]"
                />
                <span className="text-lg text-label-normal font-semibold">
                  김지현
                </span>
              </div>
              <div className="pl-14">
                <p className="my-1 text-base font-normal text-body-400">
                  디자인 초보도 참여가능 할까요 ?
                </p>
                <div className="pt-2 text-sm text-label-dimmed font-normal">
                  <span>2024.05.11 11:02</span>
                  <button className="ml-5" onClick={() => <CommentInput />}>
                    답글쓰기
                  </button>
                </div>
              </div>

              {/* 1번째 1개 댓글의 대댓글 */}
              <ul className="flex flex-col gap-4 mt-4 pl-14">
                <li>
                  <div className="flex items-center gap-4">
                    <ProfileImg
                      src="/images/profile/DummyProfileImg.jpg"
                      alt="프로필 이미지"
                      className="my-[6px]"
                    />
                    <span className="text-lg text-label-normal font-semibold">
                      UXUI 디자이너 이선형
                    </span>
                  </div>
                  <div className="pl-14">
                    <p className="pt-2 my-1 text-base font-normal text-body-400">
                      네, 가능합니다. 서로 공유하면서 배워나가는 스터디
                      모임입니다!
                    </p>
                    <div>
                      <span>2024.05.11 11:02</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-4">
                    <ProfileImg
                      src="/images/profile/DummyProfileImg.jpg"
                      alt="프로필 이미지"
                      className="my-[6px]"
                    />
                    <span className="text-lg text-label-normal font-semibold">
                      UXUI 디자이너 이선형
                    </span>
                  </div>
                  <div className="pl-14">
                    <p className="pt-2 my-1 text-base font-normal text-body-400">
                      스터디 참여 신청서 작성 부탁드려요
                    </p>
                    <div>
                      <span>2024.05.11 11:02</span>
                    </div>
                  </div>
                </li>
              </ul>
            </li>

            {/* 2번째 댓글 */}
            <li className="py-6 border-t">
              <div className="flex items-center gap-4">
                <ProfileImg
                  src="/images/profile/DummyProfileImg.jpg"
                  alt="프로필 이미지"
                  className="my-[6px]"
                />
                <span className="text-lg text-label-normal font-semibold">
                  신지우
                </span>
              </div>
              <div className="pl-14">
                <p className="pt-2 my-1 text-base font-normal text-body-400">
                  저도 참여하고 싶어요! 진행중인데 참여 가능할까요?
                </p>
                <div>
                  <span>2024.05.11 11:02</span>
                  <button className="ml-5">답글쓰기</button>
                </div>
              </div>
            </li>
          </ul>
          <div className="flex items-center gap-5">
            <ProfileImg
              size="xlarge"
              src="/images/profile/DummyProfileImg.jpg"
              alt="프로필 이미지"
              className="my-[6px]"
            />
            <CommentInput init={false} />
          </div>
        </div>
      </div>

      <div>
        <PageTitle size="md" className="pb-5">
          비슷한 스터디들
        </PageTitle>
        <StudyCardList studyCard={studyCard} count={4} />
      </div>
    </div>
  );
}
