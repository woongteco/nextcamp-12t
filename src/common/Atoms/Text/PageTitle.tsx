import clsx from "clsx";

export default function PageTitle(
  props: React.ComponentProps<"p"> & { size: "sm" | "md" | "lg" }
) {
  const { size, className, children, ...restProps } = props;
  const fontSize = {
    sm: "text-[18px]",
    md: "text-[22px]",
    lg: "text-H2",
  };
  return (
    <p className={clsx(className, "font-bold", fontSize[size])} {...restProps}>
      {children}
    </p>
  );
}
