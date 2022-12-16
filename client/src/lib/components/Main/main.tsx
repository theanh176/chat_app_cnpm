import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";
import { setSocket } from "../../../store";
import Home from "../Home/home";
import { isSignIn } from "../../../api/authApi";

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    !isSignIn() && navigate("/sign-in");
  }, [navigate]);

  // socket
  useEffect(() => {
    const setInfoSocket = async () => {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const socket = io("https://backendchatapp-production.up.railway.app");
      await dispatch(setSocket(socket));
      if (user?.user?._id) {
        socket.emit("userJoin", {
          _id: user?.user?._id,
          friend: user?.user?.friend,
        });
      }
    };
    setInfoSocket();
  }, [dispatch]);

  return <Home />;
};

export default Main;
