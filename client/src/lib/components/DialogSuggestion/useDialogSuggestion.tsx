import { useQuery } from "react-query";
import { GetMySuggestions } from "../../../api/usersApi";

const GetListSuggestions = () => {
	const {
		data: listSuggestions,
		isLoading: loadingListSuggestions,
	} = useQuery("listSuggestions", GetMySuggestions);
	return {
		listSuggestions,
		loadingListSuggestions,
	};
};

export default GetListSuggestions;
