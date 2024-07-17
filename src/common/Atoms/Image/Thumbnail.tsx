import Image from "next/image";
import { DefaultThumbnailImg } from "@public/images";
import { TImageThumbnailProps } from "@/types/component/props";
import clsx from "clsx";

/**
 * @argument useIn list(기본 스터디 리스트의 썸네일), specific(스터디 상세 페이지 썸네일), linked(커뮤니티 관련 스터디 링크 카드 썸네일)
 */

export default function Thumbnail(props: TImageThumbnailProps) {
  const defaultSize = {
    list: { width: 268, height: 180 },
    specific: { width: 582, height: 438 },
    linked: { width: 200, height: 132 },
  };
  const {
    alt,
    src,
    useIn = "list",
    width = defaultSize[props.useIn || "list"].width,
    height = defaultSize[props.useIn || "list"].height,
    className,
    ...restProps
  } = props;
  return (
    <Image
      width={width}
      height={height}
      src={src || DefaultThumbnailImg}
      alt={alt}
      className={clsx(
        "thumbnailImage object-cover min-w-full w-auto h-auto",
        className
      )}
      {...restProps}
    />
  );
}
