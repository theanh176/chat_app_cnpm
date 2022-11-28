import React from "react";

import { IconButton } from "@mui/material";

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AvatarDefaultIcon from "../../../assets/icons/avatar-default.svg";

interface IFriend {
  avatar: string;
  name: string;
  status: string;
}

const ItemFriendRequest = ({ avatar, name, status }: IFriend) => {
  return (
    <div className="py-2 border-t flex items-center justify-between md:py-4">
      <div className="flex items-center gap-3 md:gap-4">
        <img
          src={AvatarDefaultIcon}
          alt="Avatar"
          className="w-12 aspect-square rounded-full md:w-16"
        />
        <p className="font-bold md:text-lg">Ngoc Phuong</p>
      </div>
      <div className="flex items-center">
        <IconButton>
          <MoreHorizIcon
            sx={{
              color: "#23d2e2",
              fontSize: "2rem",
            }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default ItemFriendRequest;
