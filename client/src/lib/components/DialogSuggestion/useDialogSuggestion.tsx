import { useQuery } from "react-query";
import { GetMySuggestions } from "../../../api/usersApi";

const GetListSuggestions = () => {
	const {
		data: listSuggestions,
		isLoading: loadingListSuggestions,
		refetch: refetchListSuggestions,
	} = useQuery("listSuggestions", GetMySuggestions,{
		refetchOnWindowFocus: false,
	});
	return {
		listSuggestions,
		loadingListSuggestions,
		refetchListSuggestions,
	};
};

export default GetListSuggestions;
