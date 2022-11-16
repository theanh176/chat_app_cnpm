import React from "react";
import RankOne from "../../../assets/images/Rank-One.png";
import RankTwo from "../../../assets/images/Rank-Two.png";
import RankThree from "../../../assets/images/Rank-Three.png";
import RankFour from "../../../assets/images/Rank-Four.png";
import RankFive from "../../../assets/images/Rank-Five.png";

const ItemRankPopUp = (props) => {
  const { name, avatar, rank, score } = props;

  const imgRank = (rank) => {
    switch (rank) {
      case 1:
        return RankOne;
      case 2:
        return RankTwo;
      case 3:
        return RankThree;
      case 4:
        return RankFour;
      case 5:
        return RankFive;
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <img src={imgRank(rank)} alt="rank" className="w-[50px] h-[50px] mr-5" />
      <img src={avatar} alt="avatar" className="w-[50px] h-[50px] rounded-xl" />
      <div className="ml-4 flex flex-col justify-center md:ml-6">
        <p className="font-bold md:text-lg">{name}</p>
        <p className="text-sm md:text-base">{score} Điểm</p>
      </div>
    </div>
  );
};

export default ItemRankPopUp;
