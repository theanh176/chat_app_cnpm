import React from "react";
import { Link } from "react-router-dom";

import LeftIcon from "../../../assets/icons/arrow-left.svg";
import RightIcon from "../../../assets/icons/arrow-right.svg";

type Props = {
  linkLeft: string;
  linkRight: string;
  textLeft: string;
  textRight: string;
};

function HeaderForm({ linkLeft, linkRight, textLeft, textRight }: Props) {
  return (
    <div className="flex justify-between w-full opacity-60 font-bold absolute left-0 right-0 top-4 md:top-8 md:text-xl">
      <Link to={linkLeft} className="flex items-center ">
        <img src={LeftIcon} alt="left" className="w-10" />
        <p>{textLeft}</p>
      </Link>
      <Link to={linkRight} className="flex items-center">
        <p>{textRight}</p>
        <img src={RightIcon} alt="right" className="w-10" />
      </Link>
    </div>
  );
}

export default HeaderForm;
