
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CircularProgress, Stack } from "@mui/material";
import {useAuth} from "../context/auth/auth-context.js";

const AuthGuard = () => {
  const {user, isLoading} = useAuth();
  const {pathname, search} = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!user) {
      navigate(`/login?redirect=${encodeURIComponent(pathname + search)}`);
    }
  }, [user, isLoading, navigate, pathname, search]);

  if (isLoading) {
    return (
      <Stack width="100vh" height="100vh">
        <CircularProgress/>
      </Stack>
    )
  }

  return <Outlet/>;
};

export default AuthGuard;
