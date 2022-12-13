import React from "react";
import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Tabs, { tabsClasses } from "@mui/material/Tabs";
import { Tab, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import { useLocation, useNavigate } from "react-router-dom";
import ItemFriendRequest from "./itemFriendRequest";
import ItemFriend from "./itemFriend";
import ItemChannel from "./itemChannel";
import { useListRequest } from "./useRequest";
import Loading from "../Loading/loading";
import WarningEmpty from "../WarningEmpty/warningEmpty";
import useFriends from "./useFriends";
import useChannel from "./useChannel";
import DialogInfo from "../DialogInfo/dialogInfo";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PeopleIcon from "@mui/icons-material/People";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SearchIcon from "../../../assets/icons/search_purple.svg";

interface IFormInput {
  search: string;
}

const TabHeader = () => {
  const navigate = useNavigate();

  const { isMobile } = useBreakPoint();

  const location = useLocation();
  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location]
  );
  const tab = searchParams.get("tab");

  const [value, setValue] = useState(Number(tab));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    navigate(`/friends?tab=${newValue}`, { replace: true });
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      sx={{
        [`& .${tabsClasses.scrollButtons}`]: {
          "&.Mui-disabled": { opacity: 0.3 },
        },
        backgroundColor: "#1d9bf0",
      }}
      classes={{
        root: "rounded-t-xl",
        indicator: "hidden",
      }}
    >
      <Tab
        label="Friends"
        sx={{
          color: "white",
          padding: isMobile ? "0 20px" : "20px 40px",
          width: "33.33%",
          "&.Mui-selected": {
            color: "white",
            fontSize: isMobile ? "16px" : "20px",
          },
        }}
      />
      <Tab
        label="Groups"
        sx={{
          color: "white",
          padding: isMobile ? "0 20px" : "20px 40px",
          width: "33.33%",
          "&.Mui-selected": {
            color: "white",
            fontSize: isMobile ? "16px" : "20px",
          },
        }}
      />
      <Tab
        label="Requests"
        sx={{
          color: "white",
          padding: isMobile ? "0 20px" : "20px 40px",
          width: "33.33%",
          "&.Mui-selected": {
            color: "white",
            fontSize: isMobile ? "16px" : "20px",
          },
        }}
      />
    </Tabs>
  );
};

const Form = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full md:mb-5 md:px-10">
      <Controller
        name="search"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            error={errors.search ? true : false}
            helperText={errors.search?.message}
            variant="outlined"
            label="Tìm kiếm"
            className="w-full"
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "black",
                background: "white",
                borderRadius: "99px",
              },
              "& .MuiInputLabel-root": {
                color: "black",
                border: "none",
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  color: "black",
                },
            }}
            placeholder="Nhập từ khóa tìm kiếm"
            {...register("search", {
              required: "Vui lòng nhập từ khóa tìm kiếm !",
              maxLength: {
                value: 20,
                message: "Từ khóa tìm kiếm không được quá 20 ký tự !",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Từ khóa tìm kiếm không hợp lệ !",
              },
            })}
            InputProps={{
              endAdornment: <img src={SearchIcon} alt="search" />,
            }}
          />
        )}
      />
    </form>
  );
};

const FriendsList = () => {
  const { isMobile } = useBreakPoint();

  const { friendsData, loadingFriends } = useFriends();

  return (
    <div className="flex flex-col p-4 h-full ">
      {loadingFriends && <Loading />}
      <div className="flex gap-4 items-center mb-3 md:justify-center">
        <PeopleIcon
          classes={{
            root: "text-primary-icon",
          }}
          fontSize={isMobile ? "medium" : "large"}
        />
        <p className="font-bold md:text-xl">Friends List</p>
      </div>
      <Form />
      <div className="h-full overflow-y-scroll mt-3 mb-[50px] md:px-10">
        {friendsData?.length < 1 && (
          <WarningEmpty message="No have friend" />
        )}
        {friendsData?.map((item: any) => (
          <ItemFriend
            key={item._id}
            name={item?.name}
            avatar={item?.avatar}
            idFriend={item?._id}
          />
        ))}
      </div>
      <DialogInfo />
    </div>
  );
};

const FriendRequest = () => {
  const { isMobile } = useBreakPoint();

  const { listRequestData, loadListRequest } = useListRequest();

  const listRequest = listRequestData?.filter(
    (item: any) => item?.status === 0
  );

  return (
    <div className="flex flex-col p-4 h-full">
      {loadListRequest && <Loading />}
      <div className="flex gap-4 items-center mb-3 md:justify-center">
        <PersonAddIcon
          classes={{
            root: "text-primary-icon",
          }}
          fontSize={isMobile ? "medium" : "large"}
        />
        <p className="font-bold md:text-xl">Friends Request</p>
      </div>
      <div className="h-full overflow-y-scroll mb-[50px] md:px-10">
        {listRequest?.length < 1 && (
          <WarningEmpty message="No friend request" />
        )}
        {listRequestData?.map(
          (item: any) =>
            item?.status === 0 && (
              <ItemFriendRequest
                key={item?._id}
                name={item?.sender?.name}
                avatar={item?.sender?.avatar?.link}
                idFriend={item?._id}
              />
            )
        )}
      </div>
    </div>
  );
};

const Group = () => {
  const { isMobile } = useBreakPoint();

  const { myChannelData, loadingMyChannel } = useChannel();

  return (
    <div className="flex flex-col p-4 h-full">
      {loadingMyChannel && <Loading />}
      <div className="flex gap-4 items-center mb-3 md:justify-center">
        <GroupAddIcon
          classes={{
            root: "text-primary-icon",
          }}
          fontSize={isMobile ? "medium" : "large"}
        />
        <p className="font-bold md:text-xl">Groups</p>
      </div>
      <div className="h-full overflow-y-scroll mb-[50px] md:px-10">
        {myChannelData?.length < 1 && (
          <WarningEmpty message="No have group" />
        )}
        {myChannelData?.map((item: any) => (
          <ItemChannel
            key={item._id}
            name={item?.name}
            avatar={item?.avatar}
            idChannel={item?._id}
          />
        ))}
      </div>
    </div>
  );
};

const Friends = () => {
  const { isMobile } = useBreakPoint();

  const location = useLocation();
  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location]
  );
  const tab = searchParams.get("tab");

  const FriendsContent = () => {
    return tab === "0" ? (
      <FriendsList />
    ) : tab === "1" ? (
      <Group />
    ) : (
      <FriendRequest />
    );
  };

  return (
    <div className="bg-white mx-auto mt-1 rounded-xl h-[calc(100vh-140px)] md:h-[calc(100vh-160px)] md:max-w-[900px] ">
      <TabHeader />
      <FriendsContent />
    </div>
  );
};

export default Friends;
