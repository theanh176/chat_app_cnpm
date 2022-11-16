import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import { useBreakPoint } from "../../../../hooks/useBreakPoint";

const LISTBANNER = [
	{
		title: "Banner 1",
		url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&h=281",
	},
	{
		title: "Banner 2",
		url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&h=281",
	},
	{
		title: "Banner 3",
		url: "https://images.unsplash.com/photo-1561089489-f13d5e730d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&h=281",
	},
];

export default function Banner() {
	const { isMobile, isDesktop } = useBreakPoint();
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		arrows: false,
	};
	return (
		<Box>
			<Slider {...settings}>
				{LISTBANNER.map((banner, index) => {
					return (
						<Box
							key={index}
							borderRadius={2}
							component="img"
							alt={banner.title}
							src={banner.url}
						/>
					);
				})}
			</Slider>
		</Box>
	);
}
