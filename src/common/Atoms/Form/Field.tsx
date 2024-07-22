import { TProps } from "@/types/component/props";

export default function GridField({ children }: TProps) {
  return (
    <div className="w-full flex flex-col gap-y-4 lg:grid lg:grid-cols-[1fr_3fr] lg:items-start lg:gap-x-gutter-xl mt-12 lg:mt-20">
      {children}
    </div>
  );
}
