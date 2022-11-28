import { useState, useRef, useEffect } from "react";

import { IconButton, Slide } from "@mui/material";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import { useNavigate, useLocation } from "react-router-dom";

import Logo from "../../../assets/images/logo.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";

type Props = {};
const AppBar = ({}: Props) => {
  const { isDesktop } = useBreakPoint();
  const location = useLocation();

  const path = () => {
    switch (location.pathname) {
      case "/":
        return 0;
      case "/friends":
        return 1;
      case "/user":
        return 2;
      default:
        return 0;
    }
  };

  const TabBottom = () => {
    const [value, setValue] = useState(path());

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        sx={{
          height: "100%",
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#23d2e2",
            height: "4px",
          },
        }}
      >
        <Tab
          icon={<HomeRoundedIcon />}
          sx={{
            padding: 0,
          }}
          href="/"
        />
        <Tab
          icon={<Diversity3RoundedIcon />}
          sx={{
            padding: 0,
          }}
          href="/friends?tab=0"
        />
        <Tab
          icon={<PersonRoundedIcon />}
          sx={{
            padding: 0,
          }}
          href="/user"
        />
      </Tabs>
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-14 z-50 bg-white border-t rounded-t-xl">
      <TabBottom />
    </div>
  );
};

export default AppBar;
