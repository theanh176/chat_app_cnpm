import { useQuery } from "react-query";
import { GetNotFriend } from "../../../api/usersApi";

const GetNotFriendList = () => {
    const {
        data: notFriend,
        isLoading: loadingNotFriend,
        refetch: refetchNotFriend,
    } = useQuery("notFriend", GetNotFriend,{
        refetchOnWindowFocus: false,
    });
    return {
        notFriend,
        loadingNotFriend,
        refetchNotFriend,
    };
};

export default GetNotFriendList;
