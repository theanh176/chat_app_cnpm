import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import themeOptions from "../../../assets/styles/themeOptions";
import { publicRouter } from "../../../routers";
import DefaultLayout from "../Layout/defaultLayout";

type Props = {};

const App = (props: Props) => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={themeOptions}>
				<CssBaseline />
				<Box>
					<Routes>
						{publicRouter.map((route, index) => {
							const Page = route.component;
							let Layout: any = DefaultLayout;
							if (route.layout) {
								Layout = route.layout;
							} else if (route.layout === null) {
								Layout = Fragment;
							}
							return (
								<Route
									key={index}
									path={route.path}
									element={
										<Layout>
											<div className="max-w-[1920] w-full">
												<Page />
											</div>
										</Layout>
									}
								/>
							);
						})}
					</Routes>
				</Box>
			</ThemeProvider>
		</BrowserRouter>
	);
};
export default App;
