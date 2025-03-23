import { useMediaQuery } from "react-responsive";
import LayOutMobile from "@/layouts/user/mobile/index";
import DesktopLayout from "@/layouts/user/desktop/Login";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import NavbarDesktop from "./Navbar";
const MainLayoutUser = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ?

        <LayOutMobile />
        :
        <SidebarProvider>
            <NavbarDesktop />
            <SidebarTrigger  />
            <DesktopLayout />

        </SidebarProvider>;
}

export default MainLayoutUser;