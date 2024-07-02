import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
export { Header, Footer, Container, Sidebar };
import TempSideBar from "./temp/Sidebar";
import {useSelectedLayoutSegment} from "next/navigation";

const Page = ()=>{
    const pathname = useSelectedLayoutSegment()
    return (
        <TempSideBar menus={[
            {
                key:"a",
                href:"/a",
                label:"a"
            }
        ]} value={pathname} />
    )
}
