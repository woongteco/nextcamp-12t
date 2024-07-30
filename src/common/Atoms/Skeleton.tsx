import clsx from "clsx";

export default function Skeleton({ className }: { className: string }) {
  return (
    <div
      className={clsx(
        className,
        "border border-line-neutral bg-line-neutral/80 animate-pulse w-full"
      )}
    ></div>
  );
}
