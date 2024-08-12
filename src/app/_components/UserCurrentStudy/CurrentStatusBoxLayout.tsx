import { TProps } from "@/types/component/props";
import Link from "next/link";

export function CurrentStatusLinkBox({
  href,
  children,
}: { href: string } & TProps) {
  return (
    <Link href={href}>
      <div className="rounded-twenty border border-line-input p-6 h-[200px] relative transition-all hover:-translate-y-1 hover:shadow-emphasize">
        {children}
      </div>
    </Link>
  );
}
