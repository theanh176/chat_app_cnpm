import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import DetailMess from "../detailMess/detailMess";

type Anchor = "top" | "left" | "bottom" | "right";

export default function TemporaryDrawer() {
	const [state, setState] = React.useState({
		right: false,
	});

	const toggleDrawer =
		(anchor: Anchor, open: boolean) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "Shift")
			) {
				return;
			}

			setState({ ...state, [anchor]: open });
		};

	const list = (anchor: Anchor) => (
		<Box
			sx={{
				width: "auto",
			}}
			role="presentation"
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<DetailMess />
		</Box>
	);

	return (
		<React.Fragment>
			<Button onClick={toggleDrawer("right", true)}>{"right"}</Button>
			<Drawer
				anchor={"right"}
				open={state["right"]}
				onClose={toggleDrawer("right", false)}
			>
				{list("right")}
			</Drawer>
		</React.Fragment>
	);
}
