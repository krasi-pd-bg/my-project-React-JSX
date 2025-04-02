import { Navigate, Outlet } from "react-router";
import { UserContext } from "../contexts/userContext";
import { useContext } from "react";

export default function GuestGuard() {
    const { accessToken } = useContext(UserContext);

    if(accessToken) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
}