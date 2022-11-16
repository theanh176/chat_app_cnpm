import Box from "@mui/material/Box";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import * as React from "react";
import NavBar from "./navbar";

interface Props {
	window?: () => Window;
	children: React.ReactElement;
}

function ElevationScroll(props: Props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

export default function ElevateAppBar(props: Props) {
	return (
		<React.Fragment>
			<ElevationScroll {...props}>
				<NavBar />
			</ElevationScroll>
			<div className="h-full">
				<div className="bg-[white] h-20 sm:h-[84px] lg:bg-[whitesmoke] "></div>
				<div className="sm:h-[calc(100vh-84px)] h-[calc(100vh-80px)] overflow-hidden">
					{props.children}
				</div>
			</div>
		</React.Fragment>
	);
}
