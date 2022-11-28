import React from "react";
import { TextField, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useBreakPoint } from "../../../hooks/useBreakPoint";
import { toggleInfo } from "../../../store";

import AvatarDefaultIcon from "../../../assets/icons/avatar-default.svg";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import PermMediaRoundedIcon from "@mui/icons-material/PermMediaRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

type Props = {};

const InfoMess = ({}: Props) => {
  const { isMobile } = useBreakPoint();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(toggleInfo());
  };

  const HeaderInfo = () => {
    return (
      <div className="flex justify-between items-start pb-4 border-b md:justify-center md:pt-20 md:pb-10">
        {isMobile && (
          <IconButton onClick={handleBack}>
            <ChevronLeftRoundedIcon />
          </IconButton>
        )}
        <div className="flex flex-col items-center gap-4 md:gap-5">
          <img src={AvatarDefaultIcon} alt="" className="w-20 aspect-square" />
          <p className="font-bold md:text-xl">Phương Trương</p>
        </div>
        {isMobile && <div className="w-10" />}
      </div>
    );
  };

  const FunctionInfo = () => {
    return (
      <div>
        <div className="flex gap-4 p-4 border-b items-center md:gap-8 md:py-6 ">
          <SearchRoundedIcon
            classes={{
              root: "text-primary",
            }}
            fontSize={isMobile ? "medium" : "large"}
          />
          <p className="font-bold md:text-lg">Tìm kiếm tin nhắn</p>
        </div>
        <div className="flex gap-4 p-4 border-b md:gap-8 md:py-6">
          <PermIdentityRoundedIcon
            classes={{
              root: "text-primary",
            }}
            fontSize={isMobile ? "medium" : "large"}
          />
          <p className="font-bold md:text-lg">Xem trang cá nhân</p>
        </div>
        <div className="flex gap-4 p-4 border-b md:gap-8 md:py-6">
          <PermMediaRoundedIcon
            classes={{
              root: "text-primary",
            }}
            fontSize={isMobile ? "medium" : "large"}
          />
          <p className="font-bold md:text-lg">Ảnh, file đã gửi</p>
        </div>
        <div className="flex gap-4 p-4 border-b md:gap-8 md:py-6">
          <DeleteForeverRoundedIcon
            classes={{
              root: "text-primary",
            }}
            fontSize={isMobile ? "medium" : "large"}
          />
          <p className="font-bold md:text-lg">Xóa lịch sử trò chuyện</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white grid grid-rows-[auto,1fr] rounded-xl p-4 h-[calc(100vh-140px)] md:h-[calc(100vh-100px)] md:mr-4 md:min-w-[25%]">
      <HeaderInfo />
      <FunctionInfo />
    </div>
  );
};

export default InfoMess;
