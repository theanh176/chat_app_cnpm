import React from "react";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import ListMess from "../messenger/listMess/listMess";
import BoxMess from "../messenger/boxMess";
import InfoMess from "../messenger/infoMess";

type Props = {};

const Home = ({}: Props) => {
  const { isMobile } = useBreakPoint();

  const location = useLocation();
  const path = location.pathname;

  const isShowInfo = useSelector((state: any) => state.isShowInfo);

  const HomeMobile = () => {
    return isShowInfo ? (
      <InfoMess />
    ) : path.includes("messenger") ? (
      <BoxMess />
    ) : (
      <ListMess ShowListMess={""} />
    );
  };

  const HomeDesktop = () => {
    return (
      <div className="flex max-h-[90vh]">
        <ListMess ShowListMess={""} />
        <BoxMess />
        {isShowInfo && <InfoMess />}
      </div>
    );
  };

  return <div>{isMobile ? <HomeMobile /> : <HomeDesktop />}</div>;
};

export default Home;
