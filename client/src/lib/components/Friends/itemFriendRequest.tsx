import React from "react";

import { IconButton } from "@mui/material";
import { useBreakPoint } from "../../../hooks/useBreakPoint";

import AvatarDefaultIcon from "../../../assets/icons/avatar-default.svg";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";

interface IFriendRequest {
  avatar: string;
  name: string;
  status: string;
}

const ItemFriendRequest = ({ avatar, name, status }: IFriendRequest) => {
  const { isMobile } = useBreakPoint();

  return (
    <div className="py-2 border-y flex items-center justify-between md:py-4">
      <div className="flex items-center gap-3 md:gap-4">
        <img
          src={AvatarDefaultIcon}
          alt="Avatar"
          className="w-12 aspect-square rounded-full md:w-16"
        />
        <p className="font-bold md:text-lg">Ngoc Phuong</p>
      </div>
      <div className="flex items-center md:gap-4">
        <IconButton>
          <CheckCircleOutlineSharpIcon
            sx={{
              color: "#1ed760",
              fontSize: isMobile ? "2rem" : "2.5rem",
            }}
          />
        </IconButton>
        <IconButton>
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
