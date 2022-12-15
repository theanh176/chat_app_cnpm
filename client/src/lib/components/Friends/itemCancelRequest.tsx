import { useEffect } from "react";

import { IconButton } from "@mui/material";
import Swal from "sweetalert2";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import Loading from "../Loading/loading";
import { useAcceptRequest, useCancelRequest, useRejectRequest } from "./useRequest";

import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import AvatarDefaultIcon from "../../../assets/icons/avatar-default.svg";

interface IFriendRequest {
  avatar: string;
  name: string;
  idFriend: string;
  _id: string;
}

const ItemCancelRequest = ({ avatar, name, idFriend, _id }: IFriendRequest) => {
  const { isMobile } = useBreakPoint();

  const { cancelRequestData,
    loadingCancelRequest,
    handleCancelRequest, } =
  useCancelRequest();

  useEffect(() => {
    cancelRequestData?.status === 200 &&
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Huỷ lời mời kết bạn thành công",
        showConfirmButton: false,
        timer: 1500,
      });
  }, [cancelRequestData]);

  return (
    <div className="py-2 border-y flex items-center justify-between md:py-4">
      {loadingCancelRequest && <Loading />}
      <div className="flex items-center gap-3 md:gap-4">
        <img
          src={avatar ? avatar : AvatarDefaultIcon}
          alt="Avatar"
          className="w-12 aspect-square rounded-full md:w-16"
        />
        <p className="font-bold md:text-lg">{name}</p>
      </div>
      <div className="flex items-center md:gap-4">
        {/* <IconButton onClick={() => handleAcceptRequest(idFriend)}>
          <CheckCircleOutlineSharpIcon
            sx={{
              color: "#1ed760",
              fontSize: isMobile ? "2rem" : "2.5rem",
            }}
          />
        </IconButton> */}
        <IconButton onClick={() => handleCancelRequest(idFriend)}>
          <HighlightOffSharpIcon
            sx={{
              color: "#e32124",
              fontSize: isMobile ? "2rem" : "2.5rem",
            }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default ItemCancelRequest;
