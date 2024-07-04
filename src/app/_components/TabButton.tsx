import { MouseEventHandler } from "react";
import clsx from "clsx";

type TTabButtonProps = {
  label: string;
  active: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};
export function TabButton(props: TTabButtonProps) {
  const { label, active, onClick, children } = props;
  return (
    <div className="flex flex-col items-center gap-2 w-[72px]">
      <button
        onClick={onClick}
        className={clsx(
          "w-[44px] h-[44px] flex items-center justify-center rounded-ten",
          [active ? "bg-main-600" : "hover:bg-card/50 focus:bg-card/50"]
        )}
      >
        {children}
      </button>
      <span
        className={clsx([
          active
            ? "text-main-600 text-label-600"
            : "text-[#C2C3C4] text-label-400",
        ])}
      >
        {label}
      </span>
    </div>
  );
}
