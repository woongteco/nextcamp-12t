import clsx from "clsx";
import Image from "next/image";

export default function ProfileImg(
  props: React.ComponentProps<typeof Image> & {
    size?: "default" | "huge" | "xlarge" | "large" | "small";
    altText?: string;
  }
) {
  const { size = "default", className, ...restProps } = props;
  const square = {
    default: 40,
    xlarge: 60,
    huge: 80,
    large: 48,
    small: 20,
  };
  return (
    <Image
      className={clsx(className, "rounded-full")}
      width={square[size]}
      height={square[size]}
      {...restProps}
    />
  );
}
