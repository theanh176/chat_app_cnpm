import { Dialog } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import { toggleDialogListFriend } from "../../../store";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useCreateChannel } from "../Friends/useChannel";
import useFriends from "../Friends/useFriends";
import Loading from "../Loading/loading";
import WarningEmpty from "../WarningEmpty/warningEmpty";
import ItemFriend from "./itemFriend";

const DialogListFriend = () => {
	const { isMobile } = useBreakPoint();
	const dispatch = useDispatch();
	const [isIdUser, setIsIdUser] = useState([] as string[]);
	const [isGroupName, setIsGroupName] = useState("");

	const { isShow } = useSelector(
		(state: any) => state.toggleDialogListFriend.toggleDialogListFriend
	);
	const { handleCreateChannel, loadingCreateChannel, createChannelData } =
		useCreateChannel();

	useEffect(() => {
		createChannelData?.status === 200 &&
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Tạo Nhóm Thành Công",
				showConfirmButton: false,
				timer: 1500,
			});
	}, [createChannelData]);

	const handleCreateGroup = () => {
		// tạo nhóm
		const groupData = {
			list_user: isIdUser,
			name: isGroupName ? isGroupName : "Nhóm chưa có tên",
		};
		handleCreateChannel(groupData);
	};

	const HeaderUser = () => {
		return (
			<>
				<div className="h-[60px]">
					<p className="font-bold text-xl text-center md:text-3xl pt-4">
						Create Group
					</p>
					<div className="absolute top-4 right-4">
						<CloseRoundedIcon
							className="cursor-pointer text-black"
							fontSize={isMobile ? "medium" : "large"}
							onClick={() => dispatch(toggleDialogListFriend())}
						/>
					</div>
				</div>
			</>
		);
	};

	const BodyUser = () => {
		const { friendsData } = useFriends();

		// Truyền data từ chilld sang parent
		const handleIdUser = (id: string) => {
			setIsIdUser([...isIdUser, id]);
		};

		// Xoá id user đã chọn
		const handleDeleteIdUser = (id: string) => {
			const index = isIdUser.indexOf(id);
			if (index > -1) {
				isIdUser.splice(index, 1);
			}
			setIsIdUser([...isIdUser]);
		};

		return (
			<div className="h-full overflow-y-scroll mt-1 md:px-10">
				{friendsData?.length < 1 && (
					<WarningEmpty message="No have friend" />
				)}
				{friendsData?.map((item: any) => (
					<ItemFriend
						key={item._id}
						name={item?.name}
						avatar={item?.avatar}
						idFriend={item?._id}
						isIdUser={isIdUser}
						handleIdUser={handleIdUser}
						handleDeleteIdUser={handleDeleteIdUser}
					/>
				))}
			</div>
		);
	};

	return (
		<>
			{loadingCreateChannel && <Loading />}
			<Dialog
				open={isShow}
				onClose={() => dispatch(toggleDialogListFriend())}
				classes={{
					paper: "pb-4 min-w-[300px] md:pb-5 md:min-w-[550px] h-[500px]",
				}}
				sx={{
					"& .MuiDialog-paper": {
						borderRadius: "12px",
					},
				}}
			>
				<HeaderUser />
				<BodyUser />
				{isIdUser.length > 1 && (
					<div className="flex justify-center gap-4 mt-10 mx-4 flex-col items-center">
						<input
							placeholder="Enter group name"
							onChange={(e) => {
								setIsGroupName(e.target.value);
							}}
							type="text"
							className="w-full md:max-w-[300px] border-2 border-gray-300 rounded-xl px-4 py-2"
						/>
						<button
							className="bg-primary-icon text-white px-4 py-2 rounded-xl w-full flex items-center justify-center md:max-w-[300px]"
							onClick={() => {
								dispatch(toggleDialogListFriend());
								handleCreateGroup();
							}}
						>
							Create group
						</button>
					</div>
				)}
			</Dialog>
		</>
	);
};

export default DialogListFriend;
