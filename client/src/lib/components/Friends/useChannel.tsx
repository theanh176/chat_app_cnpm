import { useCallback } from "react";
import { useMutation, useQuery } from "react-query";
import { CreateChannel, GetMyChannel } from "../../../api/channelApi";

export const useChannel = () => {
	const { data: myChannelData, isLoading: loadingMyChannel } = useQuery(
		"myChannel",
		GetMyChannel
	);
	return {
		myChannelData,
		loadingMyChannel,
	};
};

export const useCreateChannel = () => {
	const {
		data: createChannelData,
		mutate: createChannel,
		isLoading: loadingCreateChannel,
	} = useMutation(CreateChannel);

	const handleCreateChannel = useCallback(
		async (data: any) => {
      console.log(data)
			await createChannel(data);
		},
		[createChannel]
	);

	return {
		handleCreateChannel,
		loadingCreateChannel,
		createChannelData,
	};
};
