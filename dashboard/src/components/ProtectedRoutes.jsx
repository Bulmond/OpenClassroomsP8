import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = (auth) => {
    return auth.auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
