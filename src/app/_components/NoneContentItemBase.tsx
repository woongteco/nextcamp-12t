import { TProps } from "@/types/component/props";

export default function NoneContentItemBase({ children }: TProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full h-[19rem] border border-main-500	rounded-3xl text-center">
      {children}
    </div>
  );
}
