import Discover from "@/layouts/user/desktop/Discover";
import HomeDesktop from "@/layouts/user/desktop/Home";
import MainLayoutUser from "@/layouts/user/mainLayoutUser";
import { Navigate, Route ,Routes } from "react-router";
const UserRouter = () => {
    return ( 
        <>
        <Routes>
            {/* <Route path="/" element={<MainLayoutUser />} /> */}
            <Route path="/dashboard" element={<MainLayoutUser />} >
            <Route path="home" element={<HomeDesktop />} />
            <Route path="discover" element={<Discover />} />
            </Route>
            <Route path="*" element={<Navigate to="/dashboard/home" />} />
        </Routes>
        </>
     );
}
 
export default UserRouter;