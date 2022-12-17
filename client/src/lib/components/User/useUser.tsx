import React from "react";
import { useQuery } from "react-query";
import { GetMyInfo } from "../../../api/usersApi";

export const GetUser = () => {
	const { data, isLoading, error, refetch } = useQuery(
		"user",
		() => GetMyInfo(),
		{
			refetchOnWindowFocus: false,
		}
	);

	const dataUser = data?.data;

	return { dataUser, isLoading, error, refetch };
};
