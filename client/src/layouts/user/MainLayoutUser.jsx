import { useMediaQuery } from "react-responsive";
import LayOutMobile from "@/layouts/user/mobile/index";
import DesktopLayout from "@/layouts/user/desktop/index";
const MainLayoutUser = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? <LayOutMobile /> : <DesktopLayout />;
}
 
export default MainLayoutUser;