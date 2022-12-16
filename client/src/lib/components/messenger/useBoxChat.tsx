import { useQuery } from "react-query";
import { GetInfoChannel } from "../../../api/channelApi";
import { GetMessageOnChannel } from "../../../api/messageApi";

const useBoxChat = (id: string) => {
  const {
    data: infoChannelData,
    isLoading: loadingInfoChannel,
    isError,
  } = useQuery("getInfoChannel", () => GetInfoChannel(id), {
    enabled: !!id,
  });

  // get message on channel and fetch new message
  const { data: messageData, isLoading: loadingMessage, refetch } = useQuery(
    "getMessageOnChannel",
    () => GetMessageOnChannel(id),
    {
      enabled: !!id,
      refetchOnWindowFocus: false,
    }
  );




  return {
    infoChannelData,
    loadingInfoChannel,
    isError,
    messageData,
    loadingMessage,
    refetch,
  };
};

export default useBoxChat;
