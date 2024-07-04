"use client";
import clsx from "clsx";
import UserReviewItem, { TReview } from "./UserReviewItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const reviews: TReview[] = [
  {
    reviewId: "review-promotion-01",
    studyName: "화면 설계에서 필요한 사용자 심리",
    writerKeyword: "취업을 준비하던 UXUI 디자인 직무자",
    text: "이시후 전문가님의 ‘화면 설계에서 필요한 사용자 심리’ 스터디를 통해서 화면 설계를 하는데 있어서 사용자 심리가 얼마나 중요한지에 대해서 배우고 직무 전문성을 높일 수 있었어요! 면접에서 스터디 내용을 활요하니 정말 좋았습니다.",
  },
  {
    reviewId: "review-promotion-02",
    studyName: "피그마와 XD 한 계절에 끝내기",
    writerKeyword: "취업을 준비하던 마케팅 직무자",
    text: "김지은 전문가님의 ‘피그마와 XD 한 계절에 끝내기’ 스터디를 통해서 정말 빠르고 쉽게 툴을 익힐 수 있었어요! 전문가님 뿐만아니라 열정 많은 스터디원들과 미션을 공유하고 서로가 서로를 피드백하면서 정말 빠르게 성장 할 수 있었던 거 같아요.",
  },
  {
    reviewId: "review-promotion-03",
    studyName: "건축 설계에 대한 모든 것",
    writerKeyword: "취업을 준비하던 건설 직무자",
    text: "이지원 전문가님의 ‘건축 설계에 대한 모든 것’ 스터디를 통해서 어렵게만 느껴졌던 건축 설계와 가까워질 수 있었어요. 스터디 날마다 건축에 대해 생각해 볼 수 있는 질문을 던져주시며 스스로 생각해 볼 수 있었던 점이 가장 좋았습니다!",
  },
  {
    reviewId: "review-promotion-04",
    studyName: "개발에 필요한 지식들",
    writerKeyword: "혼자 공부하기 힘들었던 개발 전공자",
    text: "평소에 혼자 공부하기 힘들었던 이론적인 부분들을 다른 사람들과 함께 공부하니 더 이해가 잘 되는 느낌었어요~! 서로가 이해한 내용을 토대로 서로서로 강의해주며 공부하니 더 확실히 이해가 완벽히 됐던 것 같습니다.",
  },
];

export default function UserReviewSlider() {
  return (
    <>
      <div className="flex items-center justify-center w-full mx-auto overflow-hidden relative">
        <div className="swiper-container w-[1900px] mx-auto">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            navigation={{
              prevEl: ".prev-navigation",
              nextEl: ".next-navigation",
            }}
            spaceBetween={24}
            slidesPerView={3.5}
            centeredSlides={true}
            pagination={{
              clickable: true,
              renderBullet: function (_, className) {
                return `<span class="${className} [&.swiper-pagination-bullet-active]:bg-label-strong"></span>`;
              },
            }}
            className="reviewPromotion"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.reviewId}>
                <UserReviewItem review={review} />
              </SwiperSlide>
            ))}
            <div className="bg-gradient-to-r from-white w-[520px] h-full absolute top-0 left-0 z-10"></div>
            <div className="bg-gradient-to-l from-white w-[520px] h-full absolute top-0 right-0 z-10"></div>
          </Swiper>
        </div>
        <div className="navigations">
          <div className="prev-navigation">
            <SliderNavigationButton direction="prev" />
          </div>
          <div className="next-navigation">
            <SliderNavigationButton direction="next" />
          </div>
        </div>
      </div>
    </>
  );
}

function SliderNavigationButton({ direction }: { direction: "prev" | "next" }) {
  const icon =
    direction === "prev" ? (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18.002L9 12.002L15 6.00195"
          stroke="#171719"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ) : (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 6.00195L15 12.002L9 18.002"
          stroke="#171719"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  return (
    <div
      className={clsx(
        "next-navigation flex items-center justify-center absolute z-[11] bottom-[5px]",
        [
          direction === "prev"
            ? "left-[calc(50vw-80px)] pr-[2px]"
            : "right-[calc(50vw-80px)] pl-[2px]",
        ]
      )}
    >
      {icon}
    </div>
  );
}
