import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";

import { Tab, TextField } from "@mui/material";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import { Controller, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import DialogInfo from "../DialogInfo/dialogInfo";
import Loading from "../Loading/loading";
import WarningEmpty from "../WarningEmpty/warningEmpty";
import ItemChannel from "./itemChannel";
import ItemFriend from "./itemFriend";
import ItemFriendRequest from "./itemFriendRequest";
import { useChannel } from "./useChannel";
import useFriends from "./useFriends";
import { useListRequest } from "./useRequest";

import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "../../../assets/icons/search_purple.svg";
import {
	toggleDialogListFriend,
	toggleDialogSuggestions,
} from "../../../store";
import DialogChannel from "../DialogChannel/dialogChannel";
import DialogListFriend from "../DialogIogListFriend/dialogListFriend";
import DialogSuggestion from "../DialogSuggestion/dialogSuggestion";
import ItemCancelRequest from "./itemCancelRequest";
import DialogAddFriendChannel from "../DialogChannel/dialogAddFriendChannel";
import GetListSuggestions from "../DialogSuggestion/useDialogSuggestion";

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
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="w-full md:mb-5 md:px-10"
		>
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
							required: "Please enter your phone.",
							pattern: {
								value: /^[0-9]{10}$/,
								message: "Please enter a valid phone !",
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
					className="cursor-pointer hover:shadow-lg hover:shadow-cyan-500/50 rounded-full hover:bg-primary-icon hover:text-white"
					fontSize={isMobile ? "medium" : "large"}
				/>
				<p className="font-bold md:text-xl">Friend List</p>
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
	const dispatch = useDispatch();

	const { listRequestData, loadListRequest, refetch } = useListRequest();
	const { refetchListSuggestions } = GetListSuggestions();

	//get data in local storage
	const user = JSON.parse(localStorage.getItem("user") || "{}");

	const listRequest = listRequestData?.filter(
		(item: any) => item?.status === 0
	);

	const handleShowDialogSuggestion = () => {
		refetchListSuggestions();
		dispatch(toggleDialogSuggestions());
	};

	return (
		<div className="flex flex-col p-4 h-full">
			{loadListRequest && <Loading />}
			<div className="flex gap-4 items-center mb-3 md:justify-center">
				<div onClick={handleShowDialogSuggestion} aria-hidden="true">
					<PersonAddIcon
						classes={{
							root: "text-primary-icon",
						}}
						className="cursor-pointer hover:shadow-lg hover:shadow-cyan-500/50 rounded-full hover:bg-primary-icon hover:text-white"
						fontSize={isMobile ? "medium" : "large"}
					/>
				</div>
				<p className="font-bold md:text-xl">Friend Request</p>
			</div>
			<div className="h-full overflow-y-scroll mb-[50px] md:px-10">
				{listRequest?.length < 1 && (
					<WarningEmpty message="No friend request" />
				)}
				{listRequestData?.map((item: any) =>
					item?.status === 0 &&
					item?.sender?._id !== user?.user?._id ? (
						<ItemFriendRequest
							key={item?._id}
							name={item?.sender?.name}
							avatar={item?.sender?.avatar?.link}
							idFriend={item?._id}
						/>
					) : (
						item?.status === 0 &&
						item?.sender?._id === user?.user?._id && (
							<ItemCancelRequest
								key={item?._id}
								name={item?.recever?.name}
								avatar={item?.recever?.avatar?.link}
								idFriend={item?._id}
								_id={item?._id}
							/>
						)
					)
				)}
			</div>
			<DialogSuggestion />
		</div>
	);
};

const Group = () => {
	const { isMobile } = useBreakPoint();
	const dispatch = useDispatch();

	const { myChannelData, loadingMyChannel } = useChannel();

	const handleShowDialogListFriend = () => {
		dispatch(toggleDialogListFriend());
	};

	return (
		<div className="flex flex-col p-4 h-full">
			{loadingMyChannel && <Loading />}
			<div className="flex gap-4 items-center mb-3 md:justify-center">
				<div onClick={handleShowDialogListFriend} aria-hidden="true">
					<GroupAddIcon
						classes={{
							root: "text-primary-icon",
						}}
						className="cursor-pointer hover:shadow-lg hover:shadow-cyan-500/50 rounded-full hover:bg-primary-icon hover:text-white"
						fontSize={isMobile ? "medium" : "large"}
					/>
				</div>
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
			<DialogListFriend />
			<DialogChannel />
			<DialogAddFriendChannel />
		</div>
	);
};

const Friends = () => {
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
