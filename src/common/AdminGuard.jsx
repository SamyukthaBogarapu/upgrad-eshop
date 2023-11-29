
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {useAuth} from "../context/auth/auth-context.js";
import {USER_ROLES} from "./constants.js";

const AdminGuard = () => {
  const {user} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }

    if (!user?.roles?.includes(USER_ROLES.ADMIN)) {
      navigate('/');
    }
  }, [user, navigate]);

  return <Outlet/>;
};

export default AdminGuard;
