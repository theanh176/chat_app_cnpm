import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddFriendChat from "./addFriendChat";

const style = {
	position: "absolute" as "absolute",
	top: "30%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	// width: 700,
	bgcolor: "background.paper",
	borderRadius: "10px",
	boxShadow: 24,
	p: 4,
};

interface showAddChatProps {
	open: boolean;
	handleClose: () => void;
}

export default function BasicModal({ open, handleClose }: showAddChatProps) {
	return (
		<div>
			{/* <Button onClick={handleOpen}>Open modal</Button> */}
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<AddFriendChat />
				</Box>
			</Modal>
		</div>
	);
}
