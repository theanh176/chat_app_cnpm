import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProfileUser from "../../../../../assets/icons/profileuser.svg";

export default function ControlledAccordions() {
	const [expanded, setExpanded] = React.useState<string | false>(false);

	const handleChange =
		(panel: string) =>
		(event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<div>
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography sx={{ flexShrink: 0 }}>
						Tuỳ chỉnh đoạn chat
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<ul>
						<li className="flex items-center rounded-lg p-4 cursor-pointer hover:bg-violet-200 active:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-300">
							<img
								className="mr-2"
								height={36}
								width={36}
								src={ProfileUser}
								alt="icon"
							/>
							Đổi chủ đề
						</li>
						<li className="flex items-center rounded-lg p-4 cursor-pointer hover:bg-violet-200 active:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-300">
							<img
								className="mr-2"
								height={36}
								width={36}
								src={ProfileUser}
								alt="icon"
							/>
							Thay đổi biểu tượng cảm xúc
						</li>
						<li className="flex items-center rounded-lg p-4 cursor-pointer hover:bg-violet-200 active:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-300">
							<img
								className="mr-2"
								height={36}
								width={36}
								src={ProfileUser}
								alt="icon"
							/>
							Chỉnh sửa biệt danh
						</li>
						<li className="flex items-center rounded-lg p-4 cursor-pointer hover:bg-violet-200 active:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-300">
							<img
								className="mr-2"
								height={36}
								width={36}
								src={ProfileUser}
								alt="icon"
							/>
							Tìm kiếm trong cuộc trò chuyện
						</li>
					</ul>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel2"}
				onChange={handleChange("panel2")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2bh-content"
					id="panel2bh-header"
				>
					<Typography sx={{ flexShrink: 0 }}>
						File phương tiện, file và liên kết
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<ul>
						<li className="flex items-center rounded-lg p-4 cursor-pointer hover:bg-violet-200 active:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-300">
							<img
								className="mr-2"
								height={36}
								width={36}
								src={ProfileUser}
								alt="icon"
							/>
							Đổi chủ đề
						</li>
						<li className="flex items-center rounded-lg p-4 cursor-pointer hover:bg-violet-200 active:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-300">
							<img
								className="mr-2"
								height={36}
								width={36}
								src={ProfileUser}
								alt="icon"
							/>
							Thay đổi biểu tượng cảm xúc
						</li>
						<li className="flex items-center rounded-lg p-4 cursor-pointer hover:bg-violet-200 active:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-300">
							<img
								className="mr-2"
								height={36}
								width={36}
								src={ProfileUser}
								alt="icon"
							/>
							Chỉnh sửa biệt danh
						</li>
						<li className="flex items-center rounded-lg p-4 cursor-pointer hover:bg-violet-200 active:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-300">
							<img
								className="mr-2"
								height={36}
								width={36}
								src={ProfileUser}
								alt="icon"
							/>
							Tìm kiếm trong cuộc trò chuyện
						</li>
					</ul>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel3"}
				onChange={handleChange("panel3")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel3bh-content"
					id="panel3bh-header"
				>
					<Typography sx={{ flexShrink: 0 }}>
						Quyền riêng tư và hỗ trợ
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<ul>
						<li className="flex items-center rounded-lg p-4 cursor-pointer hover:bg-violet-200 active:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-300">
							<img
								className="mr-2"
								height={36}
								width={36}
								src={ProfileUser}
								alt="icon"
							/>
							Đổi chủ đề
						</li>
						<li className="flex items-center rounded-lg p-4 cursor-pointer hover:bg-violet-200 active:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-300">
							<img
								className="mr-2"
								height={36}
								width={36}
								src={ProfileUser}
								alt="icon"
							/>
							Thay đổi biểu tượng cảm xúc
						</li>
						<li className="flex items-center rounded-lg p-4 cursor-pointer hover:bg-violet-200 active:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-300">
							<img
								className="mr-2"
								height={36}
								width={36}
								src={ProfileUser}
								alt="icon"
							/>
							Chỉnh sửa biệt danh
						</li>
						<li className="flex items-center rounded-lg p-4 cursor-pointer hover:bg-violet-200 active:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-300">
							<img
								className="mr-2"
								height={36}
								width={36}
								src={ProfileUser}
								alt="icon"
							/>
							Tìm kiếm trong cuộc trò chuyện
						</li>
					</ul>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
