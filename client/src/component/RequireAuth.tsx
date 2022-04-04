import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth: React.FC<{allowedRoles: any}> = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.roles?.find((role: any) => allowedRoles?.includes(role)) ? <Outlet /> : <Navigate to="/home" state={{ from: location }} replace />
    );
}

export default RequireAuth;