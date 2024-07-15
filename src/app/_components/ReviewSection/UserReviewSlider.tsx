"use client";
import { SwiperSlide } from "swiper/react";
import ReviewSwiper from "./ReviewSwiper";
import UserReviewItem from "./UserReviewItem";
import getMainReview from "@/constants/main_review";

export default function UserReviewSlider() {
  const reviews = getMainReview();
  return (
    <ReviewSwiper>
      {reviews.map((review) => (
        <SwiperSlide key={review.reviewId}>
          <UserReviewItem review={review} />
        </SwiperSlide>
      ))}
    </ReviewSwiper>
  );
}
