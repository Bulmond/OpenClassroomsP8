import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = (auth) => {
    return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
