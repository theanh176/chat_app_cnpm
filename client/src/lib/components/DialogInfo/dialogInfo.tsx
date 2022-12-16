import { Dialog } from "@mui/material";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import { toggleDialogInfo } from "../../../store";
import useDialogInfo from "./useDialogInfo";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import AvatarDefaultIcon from "../../../assets/icons/avatar-default.svg";

const DialogInfo = () => {
  const { isMobile } = useBreakPoint();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isShow, _id } = useSelector(
    (state: any) => state.toggleDialogInfo.toggleDialogInfo
  );

  const { dataFriend } = useDialogInfo(_id);

  const formatDays = (day: any) => {
    return dayjs(day).format("DD/MM/YYYY");
  };

  const handleChat = () => {
    navigate(`/messenger/${_id}`);
  };

  const HeaderUser = () => {
    return (
      <>
        <div className="bg-banner h-[160px] bg-cover rounded-t-xl relative md:h-[250px]">
          <div className="absolute -bottom-10 w-full md:-bottom-20">
            <img
              src={
                dataFriend?.avatar?.link
                  ? dataFriend?.avatar?.link
                  : AvatarDefaultIcon
              }
              alt=""
              className="w-[120px] aspect-square object-cover rounded-full mx-auto border-4 border-white md:w-[200px] md:border-8"
            />
          </div>
          <div
            className="absolute top-4 right-4"
            onClick={() => dispatch(toggleDialogInfo({ idFriend: "" }))}
            aria-hidden="true"
          >
            <CloseRoundedIcon
              className="cursor-pointer text-white"
              fontSize={isMobile ? "medium" : "large"}
            />
          </div>
        </div>
        <p className="font-bold text-xl mt-10 text-center md:mt-[90px] md:text-3xl">
          {dataFriend?.name}
        </p>
      </>
    );
  };

  const BodyUser = () => {
    return (
      <div className="px-4 md:px-10">
        <table className="table-fixed my-3 md:my-5">
          <tbody>
            <tr>
              <td className="md:text-xl">Phone: </td>
              <td className="pl-5 md:text-xl md:pl-20">{dataFriend?.phone}</td>
            </tr>
            <tr>
              <td className="md:text-xl">Sex: </td>
              <td className="pl-5 md:text-xl md:pl-20">{dataFriend?.gender}</td>
            </tr>
            <tr>
              <td className="md:text-xl">Email: </td>
              <td className="pl-5 md:text-xl md:pl-20">{dataFriend?.email}</td>
            </tr>
            <tr>
              <td className="md:text-xl">Birthday: </td>
              <td className="pl-5 md:text-xl md:pl-20">
                {formatDays(dataFriend?.birthday)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <Dialog
      open={isShow}
      onClose={() => dispatch(toggleDialogInfo({ idFriend: "" }))}
      classes={{
        paper: "pb-4 min-w-[300px] md:pb-10 md:min-w-[550px]",
      }}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "12px",
        },
      }}
    >
      <HeaderUser />
      <BodyUser />
      <div className="flex justify-center gap-4 mt-10 mx-4 bg-">
        <button
          className="bg-primary-icon text-white px-4 py-2 rounded-xl w-full flex items-center justify-center md:max-w-[300px]"
          onClick={handleChat}
        >
          <span className="mr-2 font-bold md:text-xl">Chat</span>
          <MapsUgcRoundedIcon />
        </button>
      </div>
    </Dialog>
  );
};

export default DialogInfo;
