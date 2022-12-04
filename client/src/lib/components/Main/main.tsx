import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Home from "../Home/home";

import { isSignIn } from "../../../api/authApi";
import { useBreakPoint } from "../../../hooks/useBreakPoint";

const Main = () => {
  const navigate = useNavigate();

  const { isMobile } = useBreakPoint();

  useEffect(() => {
    !isSignIn() && navigate("/sign-in");
  }, [navigate]);
  
  return <Home />
};

export default Main;
