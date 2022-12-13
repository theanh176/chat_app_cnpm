import { useMutation } from "react-query";
import { SendMessage } from "../../../api/messageApi";
import { useCallback } from "react";
import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";

const useSendMessage = () => {
    const handleSendMessage = (
        async (data: any) => {
            const { content, id } = data;
            const socket = socketIOClient("http://localhost:8088");
            socket.emit("send-message", { mess:content });
        }
    );
    return { handleSendMessage };
    
};
export default useSendMessage;
