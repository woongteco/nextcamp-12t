import { TProps } from "@/types/component/props";

export function ProfileInputArea({
  label,
  children,
}: { label: string } & TProps) {
  return (
    <div className="flex flex-col gap-2 justify-start">
      <p className="text-H4">{label}</p>
      {children}
    </div>
  );
}
