import { useQuery } from "react-query";
import { GetMyFriends } from "../../../api/usersApi";

const useFriends = () => {
  const { data: friendsData, isLoading: loadingFriends } = useQuery(
    "friends",
    GetMyFriends
  );
  return { 
    friendsData,
    loadingFriends,
  }
};

export default useFriends;
