import Link from "next/link";
import { TNavItemProps } from "@/types/component/props";

export default function SideNavItem({
  href,
  label,
  active = false,
}: TNavItemProps) {
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
