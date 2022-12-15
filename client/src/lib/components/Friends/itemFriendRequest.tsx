import { useEffect } from "react";

import { IconButton } from "@mui/material";
import Swal from "sweetalert2";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import Loading from "../Loading/loading";
import { useAcceptRequest, useRejectRequest } from "./useRequest";

import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import AvatarDefaultIcon from "../../../assets/icons/avatar-default.svg";

interface IFriendRequest {
  avatar: string;
  name: string;
  idFriend: string;
}

const ItemFriendRequest = ({ avatar, name, idFriend }: IFriendRequest) => {
  const { isMobile } = useBreakPoint();

  const { acceptRequestData, loadingAcceptRequest, handleAcceptRequest } =
    useAcceptRequest();

  const { rejectRequestData, loadingRejectRequest, handleRejectRequest } =
    useRejectRequest();

  useEffect(() => {
    acceptRequestData?.status === 200 &&
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Kết bạn thành công",
        showConfirmButton: false,
        timer: 1500,
      });
  }, [acceptRequestData]);

  useEffect(() => {
    rejectRequestData?.status === 200 &&
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Đã từ chối lời mời kết bạn",
        showConfirmButton: false,
        timer: 1500,
      });
  }, [rejectRequestData]);

  return (
    <div className="py-2 border-y flex items-center justify-between md:py-4">
      {loadingAcceptRequest || loadingRejectRequest && <Loading />}
      <div className="flex items-center gap-3 md:gap-4">
        <img
          src={avatar ? avatar : AvatarDefaultIcon}
          alt="Avatar"
          className="w-12 aspect-square rounded-full md:w-16"
        />
        <p className="font-bold md:text-lg">{name}</p>
      </div>
      <div className="flex items-center md:gap-4">
        <IconButton onClick={() => handleAcceptRequest(idFriend)}>
          <CheckCircleOutlineSharpIcon
            sx={{
              color: "#1ed760",
              fontSize: isMobile ? "2rem" : "2.5rem",
            }}
          />
        </IconButton>
        <IconButton onClick={() => handleRejectRequest(idFriend)}>
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

export default ItemFriendRequest;
