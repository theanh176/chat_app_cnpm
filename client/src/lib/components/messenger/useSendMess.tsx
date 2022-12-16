import { useMutation } from "react-query";
import { SendMessage } from "../../../api/messageApi";
import { useCallback } from "react";
import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const useSendMessage = () => {
  const socket = io("http://localhost:8088");

  const handleSendMess = async (data: any) => {
    socket.emit("sendMessage", { message: data?.content, room: data?.id });
  };
  return { handleSendMess };
};

export default useSendMessage;
