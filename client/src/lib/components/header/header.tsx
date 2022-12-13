import { useEffect, useState } from "react";

import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import { useLocation, useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

import Logo from "../../../assets/images/logo.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";

const Header = () => {
  const {isDesktop} = useBreakPoint();
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

  const TabHeader = () => {
    const [value, setValue] = useState(path());

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    const navigate = useNavigate();


    return (
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        <Tab
          icon={
            <HomeRoundedIcon
              fontSize="large"
              classes={{
                root: "text-white",
              }}
            />
          }
          to='/' 
          component={Link}
        />
        <Tab
          icon={
            <Diversity3RoundedIcon
              fontSize="large"
              classes={{
                root: "text-white",
              }}
            />
          }
          to='/friends?tab=0' 
          component={Link}
        />
        <Tab
          icon={
            <PersonRoundedIcon
              fontSize="large"
              classes={{
                root: "text-white",
              }}
            />
          }
          to='/user' 
          component={Link}
        />
      </Tabs>
    );
  };

  return (
    <div className="fixed top-0 left-0 right-0 h-14 bg-primary text-white flex justify-center z-50  rounded-b-xl md:justify-between md:h-20">
      <img src={Logo} alt="logo" className="w-14 md:w-20 md:ml-10" />
      {/* <div className="flex gap-10">
        <IconButton
          sx={{
            width: "150px",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
          ref={homeRef}
          onMouseOver={() => setHome(true)}
          onMouseOut={() => setHome(false)}
          onClick={() => navigate("/")}
        >
          <div className="flex justify-center items-center">
            {!home ? (
              <HomeRoundedIcon
                fontSize="large"
                classes={{
                  root: "text-white",
                }}
              />
            ) : (
              <Slide
                direction="down"
                in={home}
                container={homeRef.current}
                timeout={300}
              >
                <p className="text-white font-bold">Home</p>
              </Slide>
            )}
          </div>
        </IconButton>
        <IconButton
          sx={{
            width: "150px",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
          id="friends"
          ref={friendsRef}
          onMouseOver={() => setFriends(true)}
          onMouseOut={() => setFriends(false)}
          onClick={() => navigate("/friends")}
        >
          <div className="flex justify-center items-center">
            {!friends ? (
              <Diversity3RoundedIcon
                fontSize="large"
                classes={{
                  root: "text-white",
                }}
              />
            ) : (
              <Slide
                direction="down"
                in={friends}
                container={friendsRef.current}
                timeout={300}
              >
                <p className="text-white font-bold">Friends</p>
              </Slide>
            )}
          </div>
        </IconButton>
        <IconButton
          sx={{
            width: "150px",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
          ref={userRef}
          onMouseOver={() => setUser(true)}
          onMouseOut={() => setUser(false)}
          onClick={() => navigate("/user")}
        >
          <div className="flex justify-center items-center">
            {!user ? (
              <PersonRoundedIcon
                fontSize="large"
                classes={{
                  root: "text-white",
                }}
              />
            ) : (
              <Slide
                direction="down"
                in={user}
                container={userRef.current}
                timeout={300}
              >
                <p className="text-white font-bold">User</p>
              </Slide>
            )}
          </div>
        </IconButton>
      </div> */}
      {isDesktop && <TabHeader />}

      {isDesktop && <div className="w-20 mr-10" />}
    </div>
  );
};

export default Header;
