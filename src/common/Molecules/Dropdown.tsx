"use client";
import { MouseEvent, ReactNode, useState } from "react";

type TDropdownProps = {
  buttonLabel: string | ReactNode;
  items: ReactNode;
  align?: "left" | "right";
};
export default function Dropdown(props: TDropdownProps) {
  const { buttonLabel, items, align = "left" } = props;
  const [open, setOpen] = useState(false);

  const openMenu = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    setOpen(true);
  };
  const closeMenu = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    setOpen(false);
  };
  return (
    <div className="relative py-2" data-open={open}>
      <button onClick={openMenu} className="flex gap-3">
        {align === "right" && <CircleChevronDown />}
        {buttonLabel}
        {align === "left" && <CircleChevronDown />}
      </button>
      {open ? (
        <>
          <div
            className="backdrop w-screen h-screen fixed top-0 left-0 z-dropdown-back"
            onClick={closeMenu}
          ></div>
          <div onClick={closeMenu}>
            <ul
              className={`absolute top-8 z-dropdown mt-2 px-1 py-2 rounded-lg bg-normal text-label-neutral shadow-emphasize ${
                align === "left" ? "left-0" : "right-0"
              }`}
            >
              {items}
            </ul>
          </div>
        </>
      ) : null}
    </div>
  );
}

function CircleChevronDown() {
  // 드롭다운에서만 사용하는 아이콘
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C19.995 7.58378 16.4162 4.00496 12 4ZM11.95 15.5L7 10.55L8.414 9.136L11.95 12.671L15.486 9.136L16.9 10.55L11.95 15.5Z"
        fill="#171719"
      />
    </svg>
  );
}
