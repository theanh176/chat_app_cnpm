import { useQuery, useMutation } from "react-query";
import { GetInfoChannel } from "../../../api/channelApi";
import { useCallback } from "react";
import { GetMessageOnChannel, RemoveMessage } from "../../../api/messageApi";

const useBoxChat = (id: string) => {
  const {
    data: infoChannelData,
    isLoading: loadingInfoChannel,
    isError,
  } = useQuery("getInfoChannel", () => GetInfoChannel(id), {
    enabled: !!id,
  });

  // get message on channel and fetch new message
  const {
    data: messageData,
    isLoading: loadingMessage,
    refetch,
  } = useQuery("getMessageOnChannel", () => GetMessageOnChannel(id), {
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  const {
    mutate: deleteMessageMutate,
    isLoading: deleteMessageLoading,
    data: deleteMessageData,
  } = useMutation(RemoveMessage);

  const handleDeleteMessage = async (idMessage: string) => {
    await deleteMessageMutate(idMessage);
  };

  return {
    infoChannelData,
    loadingInfoChannel,
    isError,
    messageData,
    loadingMessage,
    refetch,
    deleteMessageLoading,
    deleteMessageData,
    handleDeleteMessage,
  };
};

export default useBoxChat;
