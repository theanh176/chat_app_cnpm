import { useQuery } from "react-query";
import { GetInfoFriend } from "../../../api/usersApi";

const GetInfoFiend = (_id: string) =>{
  const { data, isLoading, error } = useQuery(["GetInfoFriend", _id], () =>
    GetInfoFriend(_id)
    );

  const dataFriend = data?.data;

  return { dataFriend, isLoading, error };
};

export default GetInfoFiend;
