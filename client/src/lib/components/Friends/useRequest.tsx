import { useCallback } from "react";
import { useQuery, useMutation } from "react-query";
import {
  GetListRequest,
  AcceptRequest,
  RejectRequest,
} from "../../../api/requests";

export const useListRequest = () => {
  const {
    data: listRequestData,
    isLoading: loadListRequest,
    refetch,
  } = useQuery("request", GetListRequest);

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
