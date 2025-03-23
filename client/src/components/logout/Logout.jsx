import { useLogout } from "../../api/authApi"
import { Navigate } from "react-router";

export default function Logout() {
    
    const { isLoggedOut } = useLogout()
    console.log(isLoggedOut);
    return isLoggedOut
    
        ? <Navigate to="/" />
        : null; // todo: spinner
}