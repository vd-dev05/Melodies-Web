import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";
import GoogleIcon from "@/assets/icon/svg/devicon_google.svg";
import FacebookIcon from "@/assets/icon/svg/logos_facebook.svg";


const DesktopLayout = () => {

    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default DesktopLayout;

