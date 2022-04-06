import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = (e) => {
  const { auth } = useAuth();
  const location = useLocation();

  console.log("her", e.allowedAccount);
  console.log(auth?.email === e.allowedAccount);
  return auth?.email === e.allowedAccount ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default RequireAuth;
