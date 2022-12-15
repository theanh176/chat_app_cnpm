import { useQuery } from "react-query";
import { GetMyFriends } from "../../../api/usersApi";

const GetListFriend = () => {

  const { data, isLoading, error } = useQuery("friends", GetMyFriends);

	const dataFriend = data?.data;

	return { dataFriend, isLoading, error };
};

export default GetListFriend;
