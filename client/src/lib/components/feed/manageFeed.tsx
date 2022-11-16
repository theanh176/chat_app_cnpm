import { Box, Grid } from "@mui/material";
import Subjects from "../subjects/subjects";
import ListPost from "../Post/listPost";
import RankPopup from "../Rank/rankPopup";
import Carousel from "../Carousel/carousel";
import CreatePost from "../Post/createPost";

export default function ManageFeed() {
	return (
		<Box component="section" pb={2}>
			<Grid container>
				<Grid item display={{ md: "block", xs: "none" }} xs={3}>
					<Subjects />
				</Grid>
				<Grid item xs={12} md={9} lg={6} textAlign="center" mt={2}>
					<Carousel />
					<CreatePost />
					<ListPost />
				</Grid>
				<Grid item display={{ lg: "block", xs: "none" }} xs={3}>
					<RankPopup />
				</Grid>
			</Grid>
		</Box>
	);
}
