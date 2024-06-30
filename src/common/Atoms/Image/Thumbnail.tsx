import Image from "next/image";
import { DefaultThumbnailImg } from "../../../../public/images";
import { TClassnameProps } from "@/types/component/props";
import clsx from "clsx";

/**
 *
 * @param type card-thumbnail(스터디 카드), detail-thumbnail(스터디 상세 페이지), linked-thumbnail(커뮤니티 관련 스터디 링크)
 */
export default function Thumbnail({
  altText = "썸네일",
  className,
}: {
  altText?: string;
  className?: TClassnameProps;
}) {
  return (
    <Image
      src={DefaultThumbnailImg}
      alt={altText}
      className={clsx("object-cover", className)}
    />
  );
}
