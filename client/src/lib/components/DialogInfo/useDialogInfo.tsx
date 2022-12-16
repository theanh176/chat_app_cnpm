import { useQuery } from "react-query";
import { GetInfoFriend } from "../../../api/usersApi";

const GetInfoFiend = (_id: string) =>{
  const { data, isLoading, error } = useQuery(["GetInfoFriend", _id], () =>
    GetInfoFriend(_id)
    );

  const dataFriend = data?.data;
  const idChannel = data?.channel;

  return { dataFriend, isLoading, error, idChannel };
};

export default GetInfoFiend;
