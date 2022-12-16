import { useBreakPoint } from "../../../hooks/useBreakPoint";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import ListMess from "../messenger/listMess/listMess";
import BoxMess from "../messenger/boxMess";
import InfoMess from "../messenger/infoMess";

const Home = () => {
  const { isMobile } = useBreakPoint();

  const location = useLocation();
  const path = location.pathname;
  const isShowInfo = useSelector((state: any) => state.isShowInfo.isShowInfo);

  const HomeMobile = () => {
    return isShowInfo ? (
      <InfoMess />
    ) : path.includes("messenger") ? (
      <BoxMess />
    ) : (
      <ListMess />
    );
  };

  const HomeDesktop = () => {
    return (
      <div className="flex max-h-[90vh]">
        <ListMess />
        <BoxMess />
        {isShowInfo && <InfoMess />}
      </div>
    );
  };

  return <div>{isMobile ? <HomeMobile /> : <HomeDesktop />}</div>;
};

export default Home;
