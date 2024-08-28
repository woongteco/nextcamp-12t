import clsx from "clsx";
import Image from "next/image";

export default function ProfileImg(
  props: React.ComponentProps<typeof Image> & {
    size?: "default" | "xlarge" | "large" | "small";
    altText?: string;
  }
) {
  const { size = "default", className, alt = "profile", ...restProps } = props;
  const square = {
    default: 40,
    xlarge: 60,
    large: 48,
    small: 20,
  };
  return (
    <Image
      className={clsx(className, "rounded-full aspect-square object-cover")}
      width={square[size]}
      height={square[size]}
      alt={alt}
      {...restProps}
    />
  );
}
