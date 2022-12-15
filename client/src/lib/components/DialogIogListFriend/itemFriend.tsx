
import { IconButton } from "@mui/material";
import { useBreakPoint } from "../../../hooks/useBreakPoint";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AvatarDefaultIcon from "../../../assets/icons/avatar-default.svg";

interface IFriend {
	avatar: string;
	name: string;
	idFriend: string;
	isIdUser: string[];
	handleIdUser: (id: string) => void;
	handleDeleteIdUser: (id: string) => void;
}

const ItemFriend = ({
	name,
	avatar,
	idFriend,
	isIdUser,
	handleIdUser,
	handleDeleteIdUser,
}: IFriend) => {
	const { isMobile } = useBreakPoint();

	const handleRemove = () => {
		// xoá idFriend trong mảng isIdUser
		handleDeleteIdUser(idFriend);
	};

	const handleAdd = () => {
		// thêm idFriend vào mảng isIdUser
		handleIdUser(idFriend);
	};
	return (
		<>
			<div className="py-2 border-t flex items-center justify-between md:py-4">
				<div className="flex items-center w-full gap-3 md:gap-4 cursor-pointer">
					<img
						src={avatar ? avatar : AvatarDefaultIcon}
						alt="Avatar"
						className="w-12 aspect-square rounded-full md:w-16"
					/>
					<p className="font-bold md:text-lg">{name}</p>
				</div>
				<div className="flex items-center">
					{/* onclick show  ConformDeleteFriend*/}
					{isIdUser.includes(idFriend) ? (
						<IconButton onClick={handleRemove}>
							<CheckCircleIcon
								sx={{
									color: "#21a6e3",
									fontSize: isMobile ? "2rem" : "2.5rem",
								}}
							/>
						</IconButton>
					) : (
						<IconButton onClick={handleAdd}>
							<CheckCircleOutlineIcon
								sx={{
									color: "#21a6e3",
									fontSize: isMobile ? "2rem" : "2.5rem",
								}}
							/>
						</IconButton>
					)}
				</div>
			</div>
		</>
	);
};

export default ItemFriend;
