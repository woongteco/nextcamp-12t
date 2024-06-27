import { TButtonProps } from "@/types/component/props";

export default function Button(props: TButtonProps) {
  const {
    variation = "solid",
    color = "main-600",
    fullWidth = false,
    children,
    ...restProps
  } = props;
  const styles = {
    solid: `bg-${color} rounded-[10px] hover:brightness-75 hover:saturate-150`,
    outline: `border border-${color} bg-transparent text-${color} rounded-[10px] hover:bg-${color} hover:text-white`,
    icon: `rounded-md`,
  };
  return (
    <button
      className={`flex flex-row gap-2 ${styles[variation]} ${
        fullWidth ? "w-full" : "w-fit"
      }`}
      {...restProps}
    >
      {children}
    </button>
  );
}
