import { useCallback } from "react";
import { useMutation, useQuery } from "react-query";
import {
	AddMemberToChannel,
	CreateChannel,
	GetMyChannel,
	LeaveChannel,
} from "../../../api/channelApi";

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

export const useAddChannel = () => {
	const {
		data: addChannelData,
		mutate: addChannel,
		isLoading: loadingAddChannel,
	} = useMutation(AddMemberToChannel);

	const handleAddChannel = useCallback(
		async (dataAdd: any) => {
			await addChannel(dataAdd);
		},
		[addChannel]
	);

	return {
		handleAddChannel,
		loadingAddChannel,
		addChannelData,
	};
};

export const useLeaveChannel = () => {
	const {
		data: leaveChannelData,
		mutate: leaveChannel,
		isLoading: loadingLeaveChannel,
	} = useMutation(LeaveChannel);

	const handleLeaveChannel = useCallback(
		async (id: any) => {
			await leaveChannel(id);
		},
		[leaveChannel]
	);

	return {
		handleLeaveChannel,
		loadingLeaveChannel,
		leaveChannelData,
	};
};
