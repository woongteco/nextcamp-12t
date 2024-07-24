import { TProps } from "@/types/component/props";

export default function GridField({ children }: TProps) {
  return (
    <div className="gridField w-full flex flex-col gap-y-4 lg:[&>*:last-child]:w-auto lg:flex-row lg:[&>*:first-child]:w-[240px] xl:[&>*:first-child]:w-[280px] lg:items-start lg:gap-x-gutter-xl">
      {children}
    </div>
  );
}
