import { TProps } from "@/types/component/props";

export default function Container({ children }: TProps) {
  return (
    <div className="xl:container xl:mx-auto container mx-auto px-4">
      {children}
    </div>
  );
}
