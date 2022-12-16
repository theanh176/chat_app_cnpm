
import { io } from "socket.io-client";

const useSendMessage = () => {
  const socket = io("https://backendchatapp-production.up.railway.app");

  const handleSendMess = async (data: any) => {
    socket.emit("sendMessage", { message: data?.content, room: data?.id });
  };
  return { handleSendMess };
};

export default useSendMessage;
