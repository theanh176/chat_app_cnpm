import { useQuery } from "react-query";
import { GetInfoChannel } from "../../../api/channelApi";
import { GetMessageOnChannel } from "../../../api/messageApi";

const useBoxChat = (id: any) => {
  const {
    data: infoChannelData,
    isLoading: loadingInfoChannel,
    isError,
  } = useQuery("getInfoChannel", () => GetInfoChannel(id), {
    enabled: !!id,
  });

  // get message on channel
    const { data: messageData, isLoading: loadingMessage } = useQuery(
        "getMessageOnChannel",
        () => GetMessageOnChannel(id),
        {
            enabled: !!id,
        }
    );

  return {
    infoChannelData,
    loadingInfoChannel,
    isError,
    messageData,
    loadingMessage,
  };
};

export default useBoxChat;
