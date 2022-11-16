import React from "react";
import RankOne from "../../../assets/images/Rank-One.png";
import RankTwo from "../../../assets/images/Rank-Two.png";
import RankThree from "../../../assets/images/Rank-Three.png";
import RankFour from "../../../assets/images/Rank-Four.png";
import RankFive from "../../../assets/images/Rank-Five.png";

const ItemRank = (props) => {
  const { id, name, avatar, rank, score } = props;

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
      {imgRank(rank) ? (
        <img
          src={imgRank(rank)}
          alt="rank"
          className="w-[50px] h-[50px] mr-10 md:w-[80px] md:h-[80px]"
        />
      ) : (
        <p className='w-[50px] h-[50px] mr-10 text-2xl flex justify-center items-center opacity-60 md:w-[80px] md:h-[80px]'>{id}</p>
      )}

      <img src={avatar} alt="avatar" className="w-[50px] h-[50px] rounded-xl md:w-[80px] md:h-[80px]" />
      <div className="ml-4 flex flex-col justify-center md:ml-6">
        <p className="font-bold md:text-lg">{name}</p>
        <p className="text-sm md:text-base">{score} Điểm</p>
      </div>
    </div>
  );
};

export default ItemRank;
