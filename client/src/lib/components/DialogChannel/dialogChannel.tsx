import { Dialog } from "@mui/material";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import { toggleDialogChannel } from "../../../store";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import AvatarDefaultIcon from "../../../assets/icons/avatar-default.svg";
import useBoxChat from "../messenger/useBoxChat";
import Loading from "../Loading/loading";
import { useEffect } from "react";

const DialogChannel = () => {
	const { isMobile } = useBreakPoint();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { isShow, _id } = useSelector(
		(state: any) => state.toggleDialogChannel.toggleDialogChannel
	);

	const { infoChannelData, loadingInfoChannel } =
		useBoxChat(_id ? _id : "");

	const data = infoChannelData?.data;

	const formatDays = (day: any) => {
		return dayjs(day).format("DD/MM/YYYY");
	};

	const handleChat = () => {
		navigate(`/messenger/${_id}`);
	};

	const HeaderUser = () => {
		return (
			<>
				{loadingInfoChannel && <Loading />}
				<div className="bg-banner h-[160px] bg-cover rounded-t-xl relative md:h-[250px]">
					<div className="absolute -bottom-10 w-full md:-bottom-20">
						<img
							src={
								data?.avatar?.link
									? data?.avatar?.link
									: AvatarDefaultIcon
							}
							alt=""
							className="w-[120px] aspect-square object-cover rounded-full mx-auto border-4 border-white md:w-[200px] md:border-8"
						/>
					</div>
					<div
						className="absolute top-4 right-4"
						onClick={() =>
							dispatch(
								toggleDialogChannel({
									_id: "",
								})
							)
						}
						aria-hidden="true"
					>
						<CloseRoundedIcon
							className="cursor-pointer text-white"
							fontSize={isMobile ? "medium" : "large"}
						/>
					</div>
				</div>
				<p className="font-bold text-xl mt-10 text-center md:mt-[90px] md:text-3xl">
					{data?.name}
				</p>
			</>
		);
	};

	const BodyUser = () => {
		return (
			<div className="px-4 md:px-10 max-h-[260px] overflow-y-auto">
				{data?.user?.map((member: any) => {
					return (
						<div className="flex items-center gap-4 mt-4">
							<img
								src={
									member.avatar
										? member.avatar.link
										: AvatarDefaultIcon
								}
								alt="avatar"
								className="w-12 h-12 rounded-full"
							/>
							<div className="flex flex-col">
								<p className="font-bold text-lg">
									{member.name}
								</p>
								<p className="text-sm text-gray-500">
									{formatDays(member.createdAt)}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	return (
		<>
			<Dialog
				open={isShow}
				onClose={() => dispatch(toggleDialogChannel({ _id: "" }))}
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
		</>
	);
};

export default DialogChannel;
