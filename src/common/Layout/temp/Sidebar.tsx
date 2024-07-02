import Link from "next/link";

export type TMenu = {
    key: string;
    href: string;
    label: string;
}
export type SidebarProps = {menus:TMenu[],value:TMenu["key"]}
export default function Sidebar ({menus,value}:SidebarProps){
    return (
        <ul className="flex flex-col gap-1">
            {menus.map((menu) => {
                const active = menu.key===value
                return  (
                    <li key={menu.key}>
                        <Link
                            href={menu.href}
                            className={`w-full inline-block rounded-[20px] text-H4 px-6 py-[26px] ${
                                active
                                    ? "text-main-600 bg-main-25 hover:bg-main-50"
                                    : "text-label-alt bg-white hover:bg-label-alt/20"
                            }`}
                        >
                            {menu.label}
                        </Link>
                    </li>
                )
            })}
        </ul>
    );
}
