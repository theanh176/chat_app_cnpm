import React from "react";
import { Button } from "@mui/material";
import ItemRankPopUp from "./itemRankPopup";

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
    <div className="text-center">
      <h3 className="text-2xl font-bold">Bảng xếp hạng</h3>
    </div>
  );
};

const BoardRank = () => {
  return (
    <div className="gap-7 flex flex-col my-5">
      {data
        .filter((item) => item.rank <= 5)
        .map((item) => (
          <ItemRankPopUp key={item.id} {...item} />
        ))}
    </div>
  );
};

const RankPopup = () => {
  return (
    <div className="hidden mt-20 rounded-xl bg-white lg:block lg:w-full xl:max-w-[284px] py-5 px-4">
      <TitleRank />
      <BoardRank />
      <Button variant="contained" className="w-full" href='/rank'>
        Xem Tất Cả
      </Button>
    </div>
  );
};

export default RankPopup;
