import { Dialog } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import { toggleDialogAddFriendChannel } from "../../../store";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ItemFriend from "../DialogIogListFriend/itemFriend";
import { useAddChannel, useChannel } from "../Friends/useChannel";
import useFriends from "../Friends/useFriends";
import Loading from "../Loading/loading";
import WarningEmpty from "../WarningEmpty/warningEmpty";
import useBoxChat from "../messenger/useBoxChat";

const DialogAddFriendChannel = () => {
	const { isMobile } = useBreakPoint();
	const dispatch = useDispatch();
	const [isIdUser, setIsIdUser] = useState([] as string[]);

	const { isShow, _id } = useSelector(
		(state: any) =>
			state.toggleDialogAddFriendChannel.toggleDialogAddFriendChannel
	);

	const { friendsData } = useFriends();

	const { infoChannelData } = useBoxChat(_id ? _id : "");

	const dataInfoChannel = infoChannelData?.data;

	const { handleAddChannel, loadingAddChannel, addChannelData } =
		useAddChannel();

	useEffect(() => {
		addChannelData?.status === 200 &&
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Add friend success",
				showConfirmButton: false,
				timer: 1500,
			});
	}, [addChannelData]);

	const handleAddFriendChannel = () => {
		// tạo nhóm
		const groupData = {
			listId: { list_user: isIdUser },
			_id: _id,
		};
		handleAddChannel(groupData);
	};

	const HeaderUser = () => {
		return (
			<>
				<div className="h-[60px]">
					<p className="font-bold text-xl text-center md:text-3xl pt-4">
						{dataInfoChannel.name}
					</p>
					<div
						className="absolute top-4 right-4"
						onClick={() =>
							dispatch(toggleDialogAddFriendChannel({ _id: "" }))
						}
						aria-hidden="true"
					>
						<CloseRoundedIcon
							className="cursor-pointer text-black"
							fontSize={isMobile ? "medium" : "large"}
						/>
					</div>
				</div>
			</>
		);
	};

	const BodyUser = () => {
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
				{friendsData?.map(
					(item: any) =>
						// Kiểm tra item có tồn tại trong myChannelData không
						// Nếu có thì không hiển thị

						!dataInfoChannel.user?.find(
							(itemChannel: any) => itemChannel._id === item._id
						) && (
							<ItemFriend
								key={item._id}
								name={item?.name}
								avatar={item?.avatar}
								idFriend={item?._id}
								isIdUser={isIdUser}
								handleIdUser={handleIdUser}
								handleDeleteIdUser={handleDeleteIdUser}
							/>
						)
				)}
			</div>
		);
	};

	return (
		<>
			{loadingAddChannel && <Loading />}
			<Dialog
				open={isShow}
				onClose={() =>
					dispatch(toggleDialogAddFriendChannel({ _id: "" }))
				}
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
				{isIdUser.length > 0 && (
					<div className="flex justify-center gap-4 mt-10 mx-4 flex-col items-center">
						<button
							className="bg-primary-icon text-white px-4 py-2 rounded-xl w-full flex items-center justify-center md:max-w-[300px]"
							onClick={() => {
								dispatch(
									toggleDialogAddFriendChannel({ _id: "" })
								);
								handleAddFriendChannel();
							}}
						>
							Add Friend To Channel
						</button>
					</div>
				)}
			</Dialog>
		</>
	);
};

export default DialogAddFriendChannel;
