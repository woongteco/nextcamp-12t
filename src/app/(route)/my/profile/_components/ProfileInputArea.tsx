import { TProps } from "@/types/component/props";

export default function ProfileInputArea({
  label,
  children,
}: { label?: string } & TProps) {
  return (
    <div className="flex flex-col gap-2 justify-start">
      {label && <p className="text-H4">{label}</p>}
      {children}
    </div>
  );
}
