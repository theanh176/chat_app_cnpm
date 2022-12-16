import { IconButton } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useBreakPoint } from "../../../hooks/useBreakPoint";
import { toggleInfo, toggleDialogInfo } from "../../../store";
import useBoxChat from "./useBoxChat";
import DialogInfo from "../DialogInfo/dialogInfo";

import AvatarDefaultIcon from "../../../assets/icons/avatar-default.svg";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import PermMediaRoundedIcon from "@mui/icons-material/PermMediaRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

const InfoMess = () => {
  const { isMobile } = useBreakPoint();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { id } = useParams();

  const handleBack = () => {
    dispatch(toggleInfo());
  };

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const { infoChannelData } = useBoxChat(id ? id : "");

  const ListUserOnChannel = infoChannelData?.data?.user;

  //get info partner
  const infoParner = ListUserOnChannel?.filter(
    (item: any) => item._id !== user?.user?._id
  );

  console.log(infoParner[0]?._id);

  // hande show info friend
  const handleShowInfo = () => {
    dispatch(toggleDialogInfo({ idFriend: infoParner[0]?._id }));
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
          <img
            src={
              ListUserOnChannel?.length === 2 && infoParner[0]?.avatar
                ? infoParner[0]?.avatar
                : AvatarDefaultIcon
            }
            alt="avatar Friend"
            className="w-20 aspect-square"
          />
          <p className="font-bold md:text-xl">{infoParner[0]?.name}</p>
        </div>
        {isMobile && <div className="w-10" />}
      </div>
    );
  };

  const FunctionInfo = () => {
    return (
      <div>
        <div className="flex gap-4 p-4 border-b cursor-pointer items-center md:gap-8 md:py-6 ">
          <SearchRoundedIcon
            classes={{
              root: "text-primary",
            }}
            fontSize={isMobile ? "medium" : "large"}
          />
          <p className="font-bold md:text-lg">Tìm kiếm tin nhắn</p>
        </div>
        <div
          className="flex gap-4 p-4 border-b cursor-pointer md:gap-8 md:py-6"
          onClick={handleShowInfo}
          aria-hidden="true"
        >
          <PermIdentityRoundedIcon
            classes={{
              root: "text-primary",
            }}
            fontSize={isMobile ? "medium" : "large"}
          />
          <p className="font-bold md:text-lg">Xem trang cá nhân</p>
        </div>
        <div className="flex gap-4 p-4 border-b cursor-pointer md:gap-8 md:py-6">
          <PermMediaRoundedIcon
            classes={{
              root: "text-primary",
            }}
            fontSize={isMobile ? "medium" : "large"}
          />
          <p className="font-bold md:text-lg">Ảnh, file đã gửi</p>
        </div>
        <div className="flex gap-4 p-4 border-b cursor-pointer md:gap-8 md:py-6">
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
      <DialogInfo />
    </div>
  );
};

export default InfoMess;
