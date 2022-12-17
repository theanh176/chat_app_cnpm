import { useMutation } from "react-query";
import { RemoveMessage } from "../../../api/messageApi";
const useDeleteMess = () => {
  const { mutate } = useMutation(RemoveMessage, {});

  const handleDeleteMess = async (idMess: any) => {
    mutate({ idMess });
  };

  return { handleDeleteMess };
};

export default useDeleteMess;
