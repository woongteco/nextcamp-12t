import Sidebar, {SidebarProps, TMenu, TMenus} from "@/common/Layout/temp/Sidebar";
import React, {ReactNode} from "react";
import {useSelectedLayoutSegment} from "next/navigation";

type ContainerWithSideBarProps = SidebarProps & {children?:ReactNode}
const ContainerWithSideBar = ({menus,value,children}:ContainerWithSideBarProps)=>{
    return (
        <div className="grid grid-cols-[282px_894px] gap-[30px] mt-20">
            <Sidebar menus={menus} value={value} />
            {children}
        </div>
    )
}
export default ContainerWithSideBar
type TMenuWithChildren = TMenu &{children:ReactNode}
const MENUS:(TMenuWithChildren)[] = [
    {
        key:"a",
        href:"/a",
        label:"a",
        children:<div></div>
    }
]
export function Page(){
    const pathname = useSelectedLayoutSegment()
    const currentChildren = MENUS.find(m=>pathname===m.key)?.children
    return (
        <ContainerWithSideBar menus={MENUS} value={pathname}>
            {currentChildren}
        </ContainerWithSideBar>
    )
}
