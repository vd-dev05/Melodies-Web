import MainLayoutUser from "@/layouts/user/MainLayoutUser";
import { Route ,Routes } from "react-router";
const UserRouter = () => {
    return ( 
        <>
        <Routes>
            {/* <Route path="/" element={<MainLayoutUser />} /> */}
            <Route path="/" element={<MainLayoutUser />} />
        </Routes>
        </>
     );
}
 
export default UserRouter;