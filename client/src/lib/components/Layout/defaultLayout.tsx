import { Box, Stack } from "@mui/material";
import { ReactNode } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./defaultLayout.module.scss";
interface Props {
	children?: ReactNode;
	// any props that come into the component
}
function DefaultLayout({ children }: Props) {
	return (
		<Stack minHeight="100vh" direction="column" bgcolor={"whitesmoke"}>
			<Header />
			<Box component="main" flexGrow={1} minWidth={360} className="pt-20">
				{children}
			</Box>
			<Footer />
		</Stack>
	);
}

export default DefaultLayout;
