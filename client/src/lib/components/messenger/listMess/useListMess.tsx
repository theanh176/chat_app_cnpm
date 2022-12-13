import { useQuery } from "react-query";

import { GetMyChannel } from "../../../../api/channelApi";

const useListMess = () => {
  const {
    data: myChannelData,
    isLoading: loadingMyChannel,
    isError,
  } = useQuery("getMyChannel", GetMyChannel);

  return { myChannelData, loadingMyChannel, isError };
};

export default useListMess;
