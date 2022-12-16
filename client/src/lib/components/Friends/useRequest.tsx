import { useCallback } from "react";
import { useQuery, useMutation } from "react-query";
import {
	GetListRequest,
	AcceptRequest,
	RejectRequest,
	CancelRequest,
	SendRequest,
	DeleteFriend,
} from "../../../api/requests";

export const useListRequest = () => {
	const {
		data: listRequestData,
		isLoading: loadListRequest,
		refetch,
	} = useQuery("request", GetListRequest, {
		refetchOnWindowFocus: false,
	});

	return {
		listRequestData,
		loadListRequest,
		refetch,
	};
};

export const useAcceptRequest = () => {
	const {
		data: acceptRequestData,
		mutate: acceptRequest,
		isLoading: loadingAcceptRequest,
	} = useMutation(AcceptRequest);

	const handleAcceptRequest = useCallback(
		async (idFriend: string) => {
			await acceptRequest(idFriend);
		},
		[acceptRequest]
	);

	return {
		acceptRequestData,
		loadingAcceptRequest,
		handleAcceptRequest,
	};
};

export const useRejectRequest = () => {
	const {
		data: rejectRequestData,
		mutate: rejectRequest,
		isLoading: loadingRejectRequest,
	} = useMutation(RejectRequest);

	const handleRejectRequest = useCallback(
		async (idFriend: string) => {
			await rejectRequest(idFriend);
		},
		[rejectRequest]
	);

	return {
		rejectRequestData,
		loadingRejectRequest,
		handleRejectRequest,
	};
};

export const useCancelRequest = () => {
	const {
		data: cancelRequestData,
		mutate: cancelRequest,
		isLoading: loadingCancelRequest,
	} = useMutation(CancelRequest);

	const handleCancelRequest = useCallback(
		async (idFriend: string) => {
			await cancelRequest(idFriend);
		},
		[cancelRequest]
	);

	return {
		cancelRequestData,
		loadingCancelRequest,
		handleCancelRequest,
	};
};

export const useSendRequest = () => {
	const {
		data: sendRequestData,
		mutate: sendRequest,
		isLoading: loadingSendRequest,
	} = useMutation(SendRequest);

	const handleSendRequest = useCallback(
		async (idFriend: any) => {
			await sendRequest(idFriend);
		},
		[sendRequest]
	);

	return {
		sendRequestData,
		loadingSendRequest,
		handleSendRequest,
	};
};

export const useDeleteFriend = () => {
	const {
		data: deleteFriendData,
		mutate: deleteFriend,
		isLoading: loadingDeleteFriend,
	} = useMutation(DeleteFriend);

	const handleDeleteFriend = useCallback(
		async (idFriend: any) => {
			await deleteFriend(idFriend);
		},
		[deleteFriend]
	);

	return {
		deleteFriendData,
		loadingDeleteFriend,
		handleDeleteFriend,
	};
};
