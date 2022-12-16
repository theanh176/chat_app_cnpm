import React, { useEffect } from "react";

import { Dialog, IconButton } from "@mui/material";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import RejectedIcon from "../../../assets/icons/rejected.svg";

import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import AddFriendChannel from "../../../assets/icons/add-friend.svg";
import AvatarDefaultIcon from "../../../assets/icons/avatar-default.svg";
import {
	toggleDialogChannel,
	toggleDialogAddFriendChannel,
} from "../../../store";
import { useDispatch } from "react-redux";
import { useChannel, useLeaveChannel } from "./useChannel";
import Swal from "sweetalert2";

interface IChannel {
	avatar: string;
	name: string;
	idChannel: string;
}

const ItemChannel = ({ name, avatar, idChannel }: IChannel) => {
	const { isMobile } = useBreakPoint();

	const dispatch = useDispatch();

	const { refetch } = useChannel();

	const { handleLeaveChannel, loadingLeaveChannel, leaveChannelData } =
		useLeaveChannel();

	useEffect(() => {
		leaveChannelData?.status === 200 &&
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Leave channel success",
				showConfirmButton: false,
				timer: 1500,
			});
		leaveChannelData?.status === 200 && refetch();
	}, [leaveChannelData, refetch]);

	const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleShowDialogChannel = () => {
		dispatch(toggleDialogChannel({ idChannel }));
	};

	const handleShowDialogAddFriendChannel = () => {
		dispatch(toggleDialogAddFriendChannel({ idChannel }));
	};

	const handleIsLeaveChannel = () => {
		handleClose();
		handleLeaveChannel(idChannel);
	};

	const ConformLeaveChannel = () => {
		return (
			<Dialog
				open={open}
				onClose={handleClose}
				classes={{
					paper: "px-4 py-10 md:px-10 md:py-16",
				}}
				sx={{
					"& .MuiDialog-paper": {
						borderRadius: "12px",
					},
				}}
			>
				<div className="text-lg flex justify-center gap-2 items-center font-bold text-center text-error md:text-2xl">
					<img src={RejectedIcon} alt="Rejected" className="w-10" />
					<p>Leave Channel</p>
				</div>
				<div className="text-sm mt-4 md:text-base">
					Are you sure you want to leave this channel?
				</div>
				<div className="flex justify-center gap-4 mt-10">
					<button
						className="bg-primary text-white px-4 py-2 rounded-xl w-full"
						onClick={handleClose}
					>
						Cancel
					</button>
					<button
						className="bg-error text-white px-4 py-2 rounded-xl w-full"
						onClick={handleIsLeaveChannel}
					>
						Yes
					</button>
				</div>
			</Dialog>
		);
	};

	return (
		<div className="py-2 border-t flex items-center justify-between md:py-4">
			<div
				className="flex items-center gap-3 md:gap-4 cursor-pointer"
				onClick={handleShowDialogChannel}
				aria-hidden="true"
			>
				<img
					src={avatar ? avatar : AvatarDefaultIcon}
					alt="Avatar"
					className="w-12 aspect-square rounded-full md:w-16"
				/>
				<p className="font-bold md:text-lg">{name}</p>
			</div>
			<div className="flex items-center">
				{/* onclick show  ConformDeleteFriend*/}
				<IconButton
					onClick={handleShowDialogAddFriendChannel}
					className="w-[56px] h-[56px]"
				>
					<img src={AddFriendChannel} alt="Add Friend" />
				</IconButton>
				<IconButton onClick={handleOpen}>
					<HighlightOffSharpIcon
						sx={{
							color: "#e32124",
							fontSize: isMobile ? "2rem" : "2.5rem",
						}}
					/>
				</IconButton>
			</div>
			<ConformLeaveChannel />
		</div>
	);
};

export default ItemChannel;
