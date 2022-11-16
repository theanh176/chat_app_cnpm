import { Box } from "@mui/material";
import React from "react";
import ElevateAppBar from "../header/components/ElevateAppBar";
import styles from "./headerOnly.module.scss";
interface Props {
	children: React.ReactElement;
	// any props that come into the component
}
function HeaderOnly({ children }: Props) {
	return (
		<Box overflow="hidden">
			<ElevateAppBar>{children}</ElevateAppBar>
		</Box>
	);
}

export default HeaderOnly;
