import { TProps } from "@/types/component/props";

export default function GridField({ children }: TProps) {
  return (
    <div className="w-full flex flex-col gap-y-4 xl:grid xl:grid-cols-[280px_890px] xl:items-start xl:gap-x-gutter-xl">
      {children}
    </div>
  );
}
