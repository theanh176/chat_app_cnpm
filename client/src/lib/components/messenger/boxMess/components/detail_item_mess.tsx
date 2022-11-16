import Tooltip from "@mui/material/Tooltip";
import React from "react";
import IconReply from "../../../../../assets/icons/reply.svg";
import IconEmojiEmotions from "../../../../../assets/icons/emoji_emotions.svg";
import IconDelete from "../../../../../assets/icons/delete.svg";
import IconButton from "@mui/material/IconButton/IconButton";

export default function DetailItemMess() {
	return (
		<>
			<Tooltip title="Trả lời">
				<IconButton
					onClick={() => {
						alert("Chức năng chưa hoàn thiện");
					}}
					size="small"
				>
					<img
						src={IconReply}
						className="cursor-pointer"
						alt="send"
						style={{
							width: 24,
							height: 24,
						}}
					/>
				</IconButton>
			</Tooltip>

			<Tooltip title="Thả cảm xúc">
				<IconButton
					onClick={() => {
						alert("Chức năng chưa hoàn thiện");
					}}
					size="small"
				>
					<img
						src={IconEmojiEmotions}
						className="cursor-pointer"
						alt="send"
						style={{
							width: 24,
							height: 24,
						}}
					/>
				</IconButton>
			</Tooltip>

			<Tooltip title="Xoá tin nhắn">
				<IconButton
					onClick={() => {
						alert("Chức năng chưa hoàn thiện");
					}}
					size="small"
				>
					<img
						src={IconDelete}
						className="cursor-pointer"
						alt="send"
						style={{
							width: 24,
							height: 24,
						}}
					/>
				</IconButton>
			</Tooltip>
		</>
	);
}
