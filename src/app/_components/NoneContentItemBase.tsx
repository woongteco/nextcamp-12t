import { TProps } from "@/types/component/props";
import clsx from "clsx";

export default function NoneContentItemBase({
  className,
  children,
}: { className?: string } & TProps) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-4 w-full h-[19rem] border text-label-dimmed rounded-3xl text-center",
        className
      )}
    >
      {children}
    </div>
  );
}
