import { useCallback } from "react";
import { useMutation } from "react-query";
import { SearchUser } from "../../../api/usersApi";

const useSearch = () => {
	const {
		data: searchRes,
		isLoading,
		error,
		mutate,
	} = useMutation("searchApi", SearchUser);

	const handleSubmitForm = useCallback(
		async (data: any) => {
			await mutate(data.data);
		},
		[mutate]
	);

	return { searchRes, isLoading, error, handleSubmitForm };
};

export default useSearch;
