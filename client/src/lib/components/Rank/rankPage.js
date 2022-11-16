import React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ItemRank from "./itemRank";

import RankIcon from "../../../assets/images/ranks-icon.png";
const data = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    avatar: "https://i.pravatar.cc/150?img=1",
    rank: 1,
    score: 100,
  },
  {
    id: 2,
    name: "Nguyễn Văn B",
    avatar: "https://i.pravatar.cc/150?img=2",
    rank: 2,
    score: 90,
  },
  {
    id: 3,
    name: "Nguyễn Văn C",
    avatar: "https://i.pravatar.cc/150?img=3",
    rank: 3,
    score: 80,
  },
  {
    id: 4,
    name: "Nguyễn Văn D",
    avatar: "https://i.pravatar.cc/150?img=4",
    rank: 4,
    score: 70,
  },
  {
    id: 5,
    name: "Nguyễn Văn E",
    avatar: "https://i.pravatar.cc/150?img=5",
    rank: 5,
    score: 60,
  },
  {
    id: 6,
    name: "Nguyễn Văn F",
    avatar: "https://i.pravatar.cc/150?img=6",
    rank: 6,
    score: 50,
  },
  {
    id: 7,
    name: "Nguyễn Văn G",
    avatar: "https://i.pravatar.cc/150?img=7",
    rank: 7,
    score: 40,
  },
  {
    id: 8,
    name: "Nguyễn Văn H",
    avatar: "https://i.pravatar.cc/150?img=8",
    rank: 8,
    score: 30,
  },
  {
    id: 9,
    name: "Nguyễn Văn I",
    avatar: "https://i.pravatar.cc/150?img=9",
    rank: 9,
    score: 20,
  },
  {
    id: 10,
    name: "Nguyễn Văn J",
    avatar: "https://i.pravatar.cc/150?img=10",
    rank: 10,
    score: 10,
  },
];

const TitleRank = () => {
  return (
    <div className="bg-banner rounded-xl w-full h-[86px] mt-[92px] bg-center bg-no-repeat bg-cover flex items-center md:h-[160px]">
      <img src={RankIcon} alt="Rank Icon" className="w-[96px] h-full md:w-[184px]" />
      <p className="font-bold text-xl leading- text-white pl-5 md:text-3xl">
        Bảng Xếp Hạng
      </p>
    </div>
  );
};

const getMonthNow = () => {
    const curDate = new Date();
    const month = curDate.getMonth() + 1;
    return month
  }

const ScrollableTabsButtonVisible = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        borderRadius: "12px",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        <Tab href="/about" label={`Tháng ${getMonthNow()}`} />
        <Tab href="/about" label={`Tháng ${getMonthNow()-1}`} />
        <Tab href="/about" label={`Tháng ${getMonthNow()-2}`} />
      </Tabs>
    </Box>
  );
};

const BoardRank = () => {
  return (
    <div className="bg-white gap-10 flex flex-col p-4 rounded-xl md:py-8 md:px-20">
      {data.map((item) => (
        <ItemRank key={item.id} {...item} />
      ))}
    </div>
  );
};

const RankPage = () => {
  return (
    <div className="px-4 flex flex-col gap-6 md:max-w-[900px] md:mx-auto">
      <TitleRank />
      <ScrollableTabsButtonVisible />
      <BoardRank />
    </div>
  );
};

export default RankPage;
