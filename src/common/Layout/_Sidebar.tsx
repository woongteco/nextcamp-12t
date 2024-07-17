import React, { ReactNode } from "react";
import Link from "next/link";
import { TNavItemProps, TProps } from "@/types/component/props";

export function NavItem({ href, label, active = false }: TNavItemProps) {
  return (
    <li>
      <Link
        href={href}
        className={`w-full inline-block rounded-[20px] text-H4 px-6 py-[26px] ${
          active
            ? "text-main-600 bg-main-25 hover:bg-main-50"
            : "text-label-alt bg-white hover:bg-label-alt/20"
        }`}
      >
        {label}
      </Link>
    </li>
  );
}

function SideNav({
  menus,
  action = null,
}: {
  menus: TNavItemProps[];
  action?: React.ReactNode | null;
}) {
  return (
    <ul className="flex flex-col gap-1">
      {menus.map(({ key, ...items }) => (
        <NavItem key={key} {...items} />
      ))}
      {action}
    </ul>
  );
}

function Container({ children }: TProps) {
  return children;
}

/**
 * @기능
 *  1. flex-col xl:grid 반응형
 *  2. Sidebar.Nav와 Sidebar.Container가 각 한번씩만 사용
 * @디자인
 *  1. [xl] 1:3 그리드의 Sidebar.Nav와 Sidebar.Container 기본 레이아웃
 *  2. [~1279px] flex column 레이아웃 시 NavItem 드롭다운
 *  3. Sidebar.Nav의 menus 반복, 현재 페이지표시
 */
function Sidebar({ children }: TProps) {
  if (React.Children.count(children) !== 2) {
    throw new Error(
      "Sidebar 컴포넌트는 Sidebar.Nav와 Sidebar.Container 컴포넌트를 하나씩 가져야만합니다."
    );
  }

  const childrenArr = React.Children.toArray(children);
  const nav = childrenArr.filter((child) => child.type === SideNav);
  const container = childrenArr.filter((child) => child.type === Container);

  if (nav.length !== 1) {
    throw new Error(
      "Sidebar 컴포넌트 내부에는 Sidebar.Nav가 반드시 하나 필요합니다"
    );
  }
  if (container.length !== 1) {
    throw new Error(
      "Sidebar 컴포넌트 내부에는 Sidebar.Container가 반드시 하나 필요합니다"
    );
  }

  return (
    <div className="grid grid-cols-[282px_894px] gap-[30px] mt-20">
      {nav[0]}
      {container[0]}
    </div>
  );
}

export default Object.assign(Sidebar, {
  Nav: SideNav,
  Container: Container,
});
