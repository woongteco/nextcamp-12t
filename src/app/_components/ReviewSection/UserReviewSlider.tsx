"use client";
import { SwiperSlide } from "swiper/react";
import DefaultSwiper from "../../../common/Molecules/DefaultSwiper";
import UserReviewItem from "./UserReviewItem";
import getMainReview from "@/constants/main_review";

export default function UserReviewSlider() {
  const reviews = getMainReview();
  return (
    <DefaultSwiper
      items={reviews}
      render={(review) => <UserReviewItem review={review} />}
      getId={(review) => review.reviewId}
    />
  );
}
