import React from "react";
import { COLORFIELD } from "../../../helper/const.js";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import About from "./about";
import Achievements from "./achievements";
import AboutPage from "./aboutPage";
import Post from "../Post/post";

import CoverImg from "../../../assets/images/cover-image.jpg";
import AvatarImg from "../../../assets/images/avatar.jpg";
import UserIcon from "../../../assets/icons/user.svg";
import TimeLineIcon from "../../../assets/icons/timeline.svg";
import CommentIcon from "../../../assets/icons/comment.svg";

type Props = {};

const Avatar = () => {
  return (
    <>
      <div className="pt-4 md:pt-8 ">
        <img
          src={CoverImg}
          alt="coverImage"
          className="w-full h-[80px] cover rounded-t-xl md:h-[300px]"
        />
      </div>
      <div className="bg-white relative w-full md">
        <img
          src={AvatarImg}
          alt="avatar"
          className="w-[100px] h-[100px] z-10 rounded-full absolute -top-[50px] left-[50%] transform -translate-x-1/2 border-[4px] border-white md:w-[180px] md:h-[180px] md:-top-[120px]"
        />
      </div>
    </>
  );
};

const ProfileHeader = () => {
  return (
    <div className="bg-white text-center pt-14 rounded-b-xl relative md:pt-20 md:pb-8">
      <p className="font-bold text-lg md:text-2xl">Cenzo Truong</p>
      <p className="text-sm font-medium">@cenzo</p>
      <div className="grid grid-cols-3 mt-5 md:absolute md:right-0 md:bottom-0 md:pb-8 md:pr-8 md:w-[40%]">
        <div>
          <p className="font-bold text-sm md:text-xl">99</p>
          <p className="text-[#adafca] text-xs mt-[10px] font-bold md:text-sm">
            BÀI ĐĂNG
          </p>
        </div>
        <div className="border-x border-[#eaeaf5]">
          <p className="font-bold text-sm md:text-xl">9999</p>
          <p className="text-[#adafca] text-xs mt-[10px] font-bold md:text-sm">
            POINTS
          </p>
        </div>
        <div>
          <p className="font-bold text-sm md:text-xl">99</p>
          <p className="text-[#adafca] text-xs mt-[10px] font-bold md:text-sm">
            TRẢ LỜI
          </p>
        </div>
      </div>
    </div>
  );
};

const ScrollableTabsButtonVisible = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        borderRadius: "12px",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        <Tab icon={<img src={UserIcon} alt="UserIcon" />} href="/about" />
        <Tab
          icon={<img src={TimeLineIcon} alt="TimeLineIcon" />}
          href="/time-line"
        />
        <Tab
          icon={<img src={CommentIcon} alt="CommentIcon" />}
          href="/answered"
        />
      </Tabs>
    </Box>
  );
};

export default function Profile({}: Props) {
  return (
    <div className={`bg-[${COLORFIELD.body}] min-h-screen`}>
      <div className="max-w-[1200px] mx-4 md:mx-auto">
        <Avatar />
        <ProfileHeader />
        <div className="my-4">
          <ScrollableTabsButtonVisible />
        </div>
        {/* <About
          content="Hi! My name is Marina but some people may know me as GameHuntress! I
        have a Twitch channel where I stream, play and review all the newest
        games."
          grade="1"
          dateJoined="1-1-2001"
          location="An Giang, Viet Nam"
        /> */}
        {/* <Achievements /> */}
        {/* <AboutPage
          name="Truong Ngoc Phuong"
          school="Nguyen Hue High School"
          birthday="1/1/2001"
          sex="Nam"
          address="KTX khu B"
          phone="0123456789"
        /> */}
        <Post
          avatar={AvatarImg}
          name="Phuong Truong"
          timePost="1 second ago"
          description="một mảnh vườn hình chữ nhật có chu vi 532m.biết chiều rộng bằng 3/4 chiều dài.tính diện tích mảnh vườn đó."
          imagePost="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/vikinger/member/1/giphy.gif"
          subject="Toán học"
          numberComment="5"
        />
      </div>
    </div>
  );
}
