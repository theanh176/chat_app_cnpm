import { IconButton, Popover } from "@mui/material";
import React from "react";
import { useQuery } from 'react-query'

import { DeletePostApi } from "../../../api/postApi";
import { useBreakPoint } from "../../../hooks/useBreakPoint";

import DownIcon from "../../../assets/icons/angle-down.svg";
import UpdateIcon from "../../../assets/icons/update.svg";
import DeleteIcon from "../../../assets/icons/cross.svg";
import StarIcon from "../../../assets/icons/star.svg";
import CommentIcon from "../../../assets/icons/comment.svg";
import ShareIcon from "../../../assets/icons/share.svg";

function Post(props) {
  const { user, createdAt, content, image, subject, iclass, point_post, _id } =
    props.post;

  const { isMobile, isDesktop } = useBreakPoint();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUpdatePost = () => {
    console.log("Update post");
  };

  const handleDeletePost = async() => {
    const res = await DeletePostApi(_id);
    handleClose();
  };

  const open = Boolean(anchorEl);

  // calculate time
  const timePost = () => {
    const now = new Date();
    const time = new Date(createdAt);
    const diff = (now.getTime() - time.getTime()) / 1000;
    if (diff < 60) {
      return `${Math.floor(diff)} giây trước`;
    } else if (diff < 3600) {
      return `${Math.floor(diff / 60)} phút trước`;
    } else if (diff < 86400) {
      return `${Math.floor(diff / 3600)} giờ trước`;
    } else if (diff < 2592000) {
      return `${Math.floor(diff / 86400)} ngày trước`;
    } else if (diff < 31104000) {
      return `${Math.floor(diff / 2592000)} tháng trước`;
    } else {
      return `${Math.floor(diff / 31104000)} năm trước`;
    }
  };

  const hanldeComment = () => {
    console.log("Comment");
  };

  const handleShare = () => {
    console.log("Share");
  };

  return (
    <div className="py-4 bg-white rounded-xl my-4 md:py-6">
      <div className="flex justify-between px-4 items-start md:px-6">
        <div className="flex items-center gap-4 md:gap-6">
          <img
            src={user?.avatar?.link}
            alt="avatar"
            className="rounded-full w-[60px] aspect-square md:w-20"
          />
          <div className="flex flex-col items-start">
            <p className="font-bold md:text-xl">{`${user.last_name} ${user.first_name}`}</p>
            <p className="font-medium md:text-lg">{`${subject?.name} ${iclass?.name}`}</p>
            <p className="text-xs font-medium md:text-base">{timePost()}</p>
          </div>
        </div>
        <div className="flex flex-col items-end md:flex-row md:items-center md:gap-8">
          {isDesktop && (
            <div className="flex gap-2 items-center text-end">
              <img src={StarIcon} alt="star" className="w-10 h-10" />
              <p className="font-bold text-lg">{point_post} Điểm</p>
            </div>
          )}
          <IconButton>
            <img
              src={DownIcon}
              alt="down"
              className="w-4 md:w-5"
              onClick={handleClick}
            />
          </IconButton>
          {isMobile && (
            <div className="flex gap-2 items-center">
              <img src={StarIcon} alt="star" className="w-5 h-5" />
              <p className="font-bold text-sm">{point_post} Điểm</p>
            </div>
          )}
        </div>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          classes={{
            paper: "py-4",
          }}
        >
          <div className="flex items-center gap-4 border-b px-6 pb-4">
            <IconButton
              onClick={handleUpdatePost}
              className="flex items-center gap-8 mt-4"
            >
              <img src={UpdateIcon} alt="update" className="w-4" />
              <p className="text-sm font-bold">Chỉnh Sửa</p>
            </IconButton>
          </div>
          <div className="flex items-center gap-4 px-6 pt-4">
            <IconButton
              onClick={handleDeletePost}
              className="flex items-center gap-8 mt-4"
            >
              <img src={DeleteIcon} alt="update" className="w-4" />
              <p className="text-sm text-error font-bold">Xóa</p>
            </IconButton>
          </div>
        </Popover>
      </div>
      <p className="mt-5 font-medium px-4 text-left">{content}</p>
      <img src={image?.link} alt="imagePost" className="w-full my-5 md:my-6" />
      <div className="flex justify-between px-4 md:px-6">
        <p className="font-bold text-sm md:text-base">5 Câu Trả Lời</p>
        <div className="flex gap-8 md:gap-10">
          <div className="flex gap-2 items-center cursor-pointer" onClick={hanldeComment}>
            <img
              src={CommentIcon}
              alt="comment"
              className="w-5 aspect-square md:w-7"
            />
            <p className="font-bold text-sm md:text-base">Trả Lời</p>
          </div>
          <div className="flex gap-2 items-center cursor-pointer" onClick={handleShare}>
            <img
              src={ShareIcon}
              alt="share"
              className="w-5 aspect-square md:w-7"
            />
            <p className="font-bold text-sm md:text-base">Chia sẻ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
