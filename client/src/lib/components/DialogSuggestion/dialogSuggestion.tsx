import { Dialog } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import { toggleDialogSuggestions } from "../../../store";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useEffect, useState } from "react";
import ItemFriend from "./itemFriendSuggestion";
import GetListSuggestions from "./useDialogSuggestion";
import { useSendRequest } from "../Friends/useRequest";
import Swal from "sweetalert2";

const DialogSuggestion = () => {
	const { isMobile } = useBreakPoint();
	const dispatch = useDispatch();
	const [isIdUser, setIsIdUser] = useState([] as string[]);

	const { listSuggestions } = GetListSuggestions();
	console.log(listSuggestions);
	const { sendRequestData, loadingSendRequest, handleSendRequest } =
		useSendRequest();

	const handleClose = () => {
		dispatch(toggleDialogSuggestions());
	};

	useEffect(() => {
		sendRequestData?.status === 200 &&
			Swal.fire({
				icon: "success",
				text: "Gửi lời mời kết bạn thành công",
				showConfirmButton: false,
				timer: 1500,
			});
	}, [sendRequestData]);

	const { isShow } = useSelector(
		(state: any) => state.toggleDialogSuggestions.toggleDialogSuggestions
	);

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
							onClick={() => dispatch(toggleDialogSuggestions())}
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
				{listSuggestions?.user1?.map((item: any) => (
					<ItemFriend
						key={item._id}
						name={item?.name}
						avatar={item?.avatar?.link}
						idFriend={item?._id}
						isIdUser={isIdUser}
						handleIdUser={handleIdUser}
					/>
				))}
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
