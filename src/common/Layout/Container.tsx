import { TProps } from "@/types/component/props";

export default function Container({ children }: TProps) {
  return (
    <div className="xl:container xl:w-[1200px] xl:mx-auto mx-auto px-4">
      {children}
    </div>
  );
}
