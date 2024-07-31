import clsx from "clsx";

export default function SectionTitle(
  props: React.ComponentProps<"p"> & { size: "sm" | "md" | "lg" }
) {
  const { size, className, children, ...restProps } = props;
  const fontSize = {
    sm: "text-[18px]",
    md: "text-[22px]",
    lg: "text-H2",
  };
  return (
    <div
      className={clsx(className, "font-bold", fontSize[size])}
      {...restProps}
    >
      {children}
    </div>
  );
}
