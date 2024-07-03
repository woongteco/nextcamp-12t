export type TReview = {
  reviewId: string;
  text: string;
  writerKeyword: string;
  studyName: string;
};
export default function UserReviewItem({ review }: { review: TReview }) {
  return (
    <div className="snap-center snap-mandatory snap-x rounded-twenty overflow-hidden w-[520px] flex flex-col border border-line-alt">
      <div className="flex flex-col items-center justify-center py-4 px-16 bg-card h-[200px]">
        <p className="text-body-400 w-[380px] text-justify">{review.text}</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 py-2 h-[90px] relative">
        <div className="triangle w-0 h-0 border-x-[15px] border-y-[25px] border-t-[#f0f4fa] border-b-transparent border-l-transparent border-r-transparent absolute top-0 left-1/4 -translate-x-full"></div>
        <p className="text-label-600">'{review.studyName}' 후기</p>
        <p className="text-label-400">{review.writerKeyword}</p>
      </div>
    </div>
  );
}
