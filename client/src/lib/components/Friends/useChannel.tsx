import { useQuery } from "react-query";
import { GetMyChannel } from "../../../api/channelApi";

const useChannel = () => {
  const { data: myChannelData, isLoading: loadingMyChannel } = useQuery(
    "myChannel",
    GetMyChannel
  );
  return {
    myChannelData,
    loadingMyChannel,
  };
};

export default useChannel;
