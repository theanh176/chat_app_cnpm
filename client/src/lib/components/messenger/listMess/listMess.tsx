import MdGroupAdd from "@mui/icons-material/GroupAdd";
// import SearchIcon from "@mui/icons-material/Search";
import {
	Box,
	IconButton,
	// InputBase,
	Stack,
	// styled,
	TextField,
	Tooltip,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SearchIcon from "../../../../assets/icons/search_purple.svg";
import IconGropuApp from "../../../../assets/icons/group_add.svg";
import ItemMess from "./components/itemMess";
import BadgeAvatars from "../../CustomMui/badgeAvatars";
import BasicModal from "../../CustomMui/modalCreateChat";

const LISTMESS = [
	{
		id: 1,
		name: "Thế Anh",
		messengerEnd: "Kết thúc",
		timeEnd: "3 ngày",
	},
	{
		id: 2,
		name: "Trung",
		messengerEnd: "Kết thúc",
		timeEnd: "3 ngày",
	},
	{
		id: 3,
		name: "Nam",
		messengerEnd: "Kết thúc",
		timeEnd: "3 ngày",
	},
	{
		id: 4,
		name: "Phương",
		messengerEnd: "Kết thúc",
		timeEnd: "3 ngày",
	},
	{
		id: 5,
		name: "Kiệt",
		messengerEnd: "Kết thúc",
		timeEnd: "3 ngày",
	},
	{
		id: 6,
		name: "Tấn",
		messengerEnd: "Kết thúc",
		timeEnd: "3 ngày",
	},
];

interface IFormInput {
	search: string;
}

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
		<form onSubmit={handleSubmit(onSubmit)} className="w-full grid gap-6">
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
						sx={{
							"& .MuiOutlinedInput-root": {
								color: "black",
								background: "white",
								border: "none",
							},
							"& .MuiInputLabel-root": {
								color: "black",
								border: "none",
							},
							"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
								{
									border: "1px solid #4e4ac8",
									color: "black",
								},
							"& .MuiOutlinedInput-notchedOutline": {
								border: "1px solid #4e4ac8",
								// color: "black",
							},
						}}
						placeholder="Nhập từ khóa tìm kiếm"
						{...register("search", {
							required: "Vui lòng nhập từ khóa tìm kiếm !",
							maxLength: {
								value: 20,
								message:
									"Từ khóa tìm kiếm không được quá 20 ký tự !",
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

interface Props {
	ShowListMess: any;
}

export default function ListMess({ ShowListMess }: Props) {
	const [isListMess] = useState([...LISTMESS]);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div className="shadow bg-white p-4">
			<BasicModal open={open} handleClose={handleClose} />
			<Stack direction="column" spacing={2}>
				<Box>
					<Stack direction="row">
						<Typography
							fontWeight="bold"
							fontSize="24px"
							display="flex"
							alignItems="center"
						>
							Tin nhắn
						</Typography>
						<Box sx={{ flexGrow: 1 }}></Box>
						<Tooltip title="Tạo nhóm">
							<IconButton
								onClick={handleOpen}
								size="small"
								sx={{ ml: 1 }}
							>
								<img
									src={IconGropuApp}
									className="cursor-pointer"
									alt="send"
									style={{
										width: 24,
										height: 24,
									}}
								/>
							</IconButton>
						</Tooltip>
					</Stack>
				</Box>
				<Form />
			</Stack>
			<div
				style={{
					overflow: "auto",
					scrollBehavior: "smooth",
					height: "calc(100vh - 224px)",
					backgroundColor: "white",
				}}
			>
				{isListMess && isListMess.length > 0
					? isListMess.map((item, idx) => {
							return (
								<div key={idx}>
									<ItemMess
										id={item.id}
										name={item.name}
										messengerEnd={item.messengerEnd}
										timeEnd={item.timeEnd}
										ShowListMess={ShowListMess}
									/>
								</div>
							);
					  })
					: ""}
			</div>
		</div>
	);
}

// const style = {
// 	"&::-webkit-scrollbar": {
// 		width: "8px",
// 	},
// 	"&::-webkit-scrollbar-track": {
// 		borderRadius: "8px",
// 	},
// 	"&::-webkit-scrollbar-thumb": {
// 		borderRadius: "8px",
// 		visibility: "hidden",
// 	},
// 	"&:hover::-webkit-scrollbar-thumb": {
// 		backgroundColor: "#adadad",
// 		visibility: "visible",
// 	},
// 	"&:active::-webkit-scrollbar-thumb": {
// 		visibility: "visible",
// 		backgroundColor: "#959595",
// 	},
// 	"&:active::-webkit-scrollbar-track": {
// 		borderRadius: "8px",
// 		backgroundColor: "#e5e5e5",
// 	},
// };

// const Search = styled("div")(({ theme }) => ({
// 	background: "rgb(211 211 211 / 30%)",
// 	color: "rgb(25, 118, 210, 1)",
// 	position: "relative",
// 	borderRadius: theme.shape.borderRadius,
// 	backgroundColor: "rgb(211 211 211 / 40%)",
// 	"&:hover": {
// 		backgroundColor: "rgb(211 211 211 / 40%)",
// 	},
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
// 	padding: theme.spacing(0, 2),
// 	height: "100%",
// 	position: "absolute",
// 	pointerEvents: "none",
// 	display: "flex",
// 	alignItems: "center",
// 	justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
// 	color: "inherit",
// 	"& .MuiInputBase-input": {
// 		padding: theme.spacing(1, 1, 1, 0),
// 		// vertical padding + font size from searchIcon
// 		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
// 		transition: theme.transitions.create("width"),
// 		width: "100%",
// 	},
// }));

// const StyledInputBaseOn = styled(InputBase)(({ theme }) => ({
// 	color: "inherit",
// 	"& .MuiInputBase-input": {
// 		padding: theme.spacing(1),
// 		// vertical padding + font size from searchIcon
// 		transition: theme.transitions.create("width"),
// 		width: "100%",
// 	},
// }));
