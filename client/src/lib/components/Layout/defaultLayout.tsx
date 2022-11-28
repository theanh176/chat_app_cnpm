import { Box, Stack } from "@mui/material";
import { ReactNode } from "react";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import Header from "../header/header";
import AppBar from "../Appbar/appBar";
interface Props {
  children?: ReactNode;
  // any props that come into the component
}
function DefaultLayout({ children }: Props) {
  const { isMobile } = useBreakPoint();
  return (
    <Stack height="100vh" direction="column" bgcolor={"whitesmoke"}>
      <Header />
      <Box component="main" flexGrow={1} minWidth={360} className="py-[70px] md:pt-[90px] md:pb-0">
        {children}
      </Box>
      {isMobile && <AppBar />}
    </Stack>
  );
}

export default DefaultLayout;
