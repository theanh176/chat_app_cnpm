import { Box, Typography } from "@mui/material";
import IconMath from "../../../../assets/icons/subjectIcons/math_icon.svg";
import IconLiterature from "../../../../assets/icons/subjectIcons/literature_icon.svg";
import IconGeography from "../../../../assets/icons/subjectIcons/geography_icon.svg";
import IconChemistry from "../../../../assets/icons/subjectIcons/chemistry_icon.svg";
import IconPhysics from "../../../../assets/icons/subjectIcons/physics_icon.svg";

const LISTSUBJECTS = [
	{
		name: `Toán`,
		icon: IconMath,
		title: `Icon Math`,
	},
	{
		name: `Văn`,
		icon: IconLiterature,
		title: `Icon Literature`,
	},
	{
		name: `Địa`,
		icon: IconGeography,
		title: `Icon Geography`,
	},
	{
		name: `Hoá`,
		icon: IconChemistry,
		title: `Icon Chemistry`,
	},
	{
		name: `Lý`,
		icon: IconPhysics,
		title: `Icon Physics`,
	},
];

export default function ItemSubject() {
	const listSubject = [...LISTSUBJECTS];
	return (
		<Box>
			{listSubject.map((subject, index) => {
				return (
					<Box
						key={index}
						p={1}
						borderRadius={2}
						sx={{
							cursor: "pointer",
							"&:hover": {
								background: "rgba(0, 0, 0, 0.05)",
							},
						}}
					>
						<Box
							component="img"
							alt={subject.title}
							src={subject.icon}
							display="inline"
							width={40}
							mr={3}
						></Box>
						<Typography display="inline" fontWeight="bold">
							{subject.name}
						</Typography>
					</Box>
				);
			})}
		</Box>
	);
}
