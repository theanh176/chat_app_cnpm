import { Box, Stack } from "@mui/material";
import React from "react";
import ItemSubject from "./components/itemSubject";

export default function Subjects() {
	return (
		<Box
			sx={style}
			mx={2}
			position="sticky"
			top={76}
			maxHeight="90vh"
			overflow="auto"
		>
			<Stack direction="column">
				<ItemSubject />
			</Stack>
		</Box>
	);
}

const style = {
	"&::-webkit-scrollbar": {
		width: "8px",
	},
	"&::-webkit-scrollbar-track": {
		borderRadius: "8px",
	},
	"&::-webkit-scrollbar-thumb": {
		borderRadius: "8px",
		visibility: "hidden",
	},
	"&:hover::-webkit-scrollbar-thumb": {
		backgroundColor: "#adadad",
		visibility: "visible",
	},
	"&:active::-webkit-scrollbar-thumb": {
		visibility: "visible",
		backgroundColor: "#959595",
	},
	"&:active::-webkit-scrollbar-track": {
		borderRadius: "8px",
		backgroundColor: "#e5e5e5",
	},
};
