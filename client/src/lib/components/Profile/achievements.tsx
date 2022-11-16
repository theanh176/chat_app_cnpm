import React from "react";

import Rank1 from "../../../assets/images/rank1.png";
import Rank2 from "../../../assets/images/rank2.png";
import Rank3 from "../../../assets/images/rank3.png";
import AchievementIcon from "../../../assets/images/achievement.png";

type Props = {};

type ItemProps = {
  title: string;
  id: any;
};

const achievementList = [
  {
    id: Rank1,
    title: "Nhất tháng 1",
  },
  {
    id: Rank2,
    title: "Nhì tháng 2",
  },
  {
    id: Rank3,
    title: "Ba tháng 3",
  },
];

const Item = ({ id, title }: ItemProps) => {
  return (
    <div className="flex items-center py-2 border-b">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f2f2f2] mr-4">
        <img src={id} alt={`Rank${id}`} />
      </div>
      <div className="ml-3">
        <p className="font-bold">{title}</p>
      </div>
    </div>
  );
};

export default function Achievements({}: Props) {
  return (
    <div className="bg-white py-8 px-6 rounded-xl flex flex-col gap-2">
        <div className="flex items-center justify-center md:justify-start">
            <img src={AchievementIcon} alt="AchievementIcon" className="w-8 h-8 mr-2" />
            <p className="font-bold text-lg">Thành Tích</p>
        </div>
      {achievementList.map((item) => {
        return <Item id={item.id} title={item.title} />;
      })}
    </div>
  );
}
