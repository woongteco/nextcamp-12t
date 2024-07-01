import { TProps } from "@/types/component/props";

export default function Field({ children }: TProps) {
  return (
    <div className="flex flex-col gap-y-4 xl:grid xl:grid-cols-[282px_894px] xl:items-start xl:gap-x-gutter-xl">
      {children}
    </div>
  );
}
