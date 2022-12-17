import { Dialog } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import { toggleDialogSuggestions } from "../../../store";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useEffect, useState } from "react";
import ItemFriend from "./itemFriendSuggestion";
import { useListRequest, useSendRequest } from "../Friends/useRequest";
import Swal from "sweetalert2";
import GetNotFriendList from "./useNotFriend";

const DialogSuggestion = () => {
	const { isMobile } = useBreakPoint();
	const dispatch = useDispatch();
	const [isIdUser, setIsIdUser] = useState([] as string[]);

	const { notFriend, refetchNotFriend } =
		GetNotFriendList();

	const { sendRequestData, handleSendRequest } =
		useSendRequest();

	const { listRequestData, refetch } = useListRequest();

	const handleClose = () => {
		dispatch(toggleDialogSuggestions());
	};

	useEffect(() => {
		sendRequestData?.status === 200 &&
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Send request success",
				showConfirmButton: false,
				timer: 1500,
			});
		sendRequestData?.status === 200 && refetch();
	}, [refetch, sendRequestData]);

	const { isShow } = useSelector(
		(state: any) => state.toggleDialogSuggestions.toggleDialogSuggestions
	);

	const HeaderUser = () => {
		return (
			<>
				<div className="h-[60px]">
					<p className="font-bold text-xl text-center md:text-3xl pt-4">
						Send Request
					</p>
					<div
						className="absolute top-4 right-4"
						onClick={() => dispatch(toggleDialogSuggestions())}
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
			const data = {
				recever_id: id,
			};
			handleSendRequest(data);
			handleClose();
		};

		return (
			<div className="h-full overflow-y-scroll mt-1 md:px-10">
				{notFriend?.user?.map(
					(item: any) =>
						// Kiểm tra xem user có tồn
						!listRequestData?.find(
							(itemRequest: any) =>
								item._id === itemRequest?.sender?._id ||
								item._id === itemRequest?.recever?._id
						) && (
							<ItemFriend
								key={item._id}
								name={item?.name}
								avatar={item?.avatar?.link}
								idFriend={item?._id}
								isIdUser={isIdUser}
								handleIdUser={handleIdUser}
							/>
						)
				)}
			</div>
		);
	};

	return (
		<>
			<Dialog
				open={isShow}
				onClose={() => handleClose()}
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
			</Dialog>
		</>
	);
};

export default DialogSuggestion;
