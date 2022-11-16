import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
	Avatar,
	Box,
	Divider,
	IconButton,
	Menu,
	MenuItem,
	Stack,
	Typography,
} from "@mui/material";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
interface listMess {
	id: number;
	name: string;
	messengerEnd: string;
	timeEnd: string;
	ShowListMess: any;
}

export default function ItemMess(props: listMess) {
	const messengerId: any = useParams();
	const navigate = useNavigate();
	const [isIsChooseMess, setIsChooseMess] = useState(0);
	const [isShowNotiMess, setShowNotiMess] = useState(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
		useState<null | HTMLElement>(null);

	const isMenuOpen = Boolean(anchorEl);

	const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const menuId = "primary-search-account-menu";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "center",
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "center",
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<Link to={"/sign-in"}>
				<MenuItem>
					<IconButton
						size="large"
						aria-label="show 4 new mails"
						color="inherit"
						sx={{ padding: 0, marginRight: 1 }}
					>
						<DeleteOutlineIcon />
					</IconButton>
					<p>...</p>
				</MenuItem>
			</Link>
			<Link to={"/sign-in"}>
				<MenuItem>
					<IconButton
						size="large"
						aria-label="show 4 new mails"
						color="inherit"
						sx={{ padding: 0, marginRight: 1 }}
					>
						<DeleteOutlineIcon />
					</IconButton>
					<p>...</p>
				</MenuItem>
			</Link>
			<Divider light />
			<Link to={"/sign-in"}>
				<MenuItem>
					<IconButton
						size="large"
						aria-label="show 4 new mails"
						color="inherit"
						sx={{ padding: 0, marginRight: 1 }}
					>
						<DeleteOutlineIcon />
					</IconButton>
					<p>Xoá cuộc hội thoại</p>
				</MenuItem>
			</Link>
		</Menu>
	);

	return (
		<Box
			onClick={() => {
				navigate(`/messenger/${props.id}`);
				setIsChooseMess(messengerId);
				props.ShowListMess();
			}}
			sx={{
				cursor: "pointer",
				borderRadius: "8px",
				marginBottom: "16px",
				padding: "8px",
				margin: "4px",
				"&:hover": {
					background: "rgba(0, 0, 0, 0.05)",
				},
				background: `${
					isIsChooseMess === props.id
						? "rgba(84, 192, 239, 0.2)"
						: "rgba(0, 0, 0, 0)"
				}`,
			}}
			onMouseEnter={() => {
				setShowNotiMess(true);
			}}
			onMouseLeave={() => {
				setShowNotiMess(false);
			}}
		>
			<Stack direction="row" spacing={1}>
				<Avatar sx={{ width: 50, height: 50 }}></Avatar>
				<Box display="grid" alignContent="center">
					<Typography display="block">{props.name}</Typography>
					<Box>
						<Typography
							marginRight={1}
							fontSize={13}
							display="inline-block"
						>
							Bạn: {props.messengerEnd}
						</Typography>
						<Typography fontSize={12} display="inline-block">
							{props.timeEnd}
						</Typography>
					</Box>
				</Box>
				<Box sx={{ flexGrow: 1 }}></Box>
				{isShowNotiMess ? (
					<Box
						display="grid"
						alignContent="center"
						justifyContent="center"
						sx={{ flexGrow: 1 }}
					>
						<IconButton
							size="small"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							sx={{
								width: 36,
								height: 36,
								backgroundColor: "white",
								boxShadow: 3,
								"&:hover": {
									background: "rgba(0, 0, 0, 0.07)",
								},
							}}
						>
							<MoreHorizIcon />
						</IconButton>
					</Box>
				) : (
					<Box sx={{ flexGrow: 1 }}></Box>
				)}
				<Box display="grid" alignContent="center">
					<Avatar sx={{ width: 16, height: 16 }}></Avatar>
				</Box>
			</Stack>
			{renderMenu}
		</Box>
	);
}
