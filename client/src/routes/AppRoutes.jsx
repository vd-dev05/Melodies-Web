import MainLayoutUser from "@/layouts/user/MainLayoutUser";
import { BrowserRouter as Router } from "react-router-dom";
import UserRouter from "@/routes/userRouter/index";
const role = 'user'

export function AppRoutes() {
    return(
        <Router>
            {/* <Home/> */}
            {role === 'user' && <UserRouter/> }
            {role ===  ''}
        </Router>
    )
}