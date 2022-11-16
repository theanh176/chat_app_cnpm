// import { useBreakPoint } from "../../../hooks/useBreakPoint";
import { useState, useEffect } from "react";
import BoxMess from "./boxMess/boxMess";
import DetailMess from "./detailMess/detailMess";
import ListMess from "./listMess/listMess";
import { useParams } from "react-router-dom";
import TemporaryDrawer from "./components/drawer";
export default function Messenger() {
	// const { isDesktop } = useBreakPoint();
	// const [isShowListMess, setShowListMess] = useState(false);
	// const messengerId: any = useParams();

	const { id } = useParams();

	useEffect(() => {
		setIsShowListMess(false);
	}, [id]);

	const [isShowDetail, setIsShowDetail] = useState(true);
	const [isShowListMess, setIsShowListMess] = useState(false);

	const handleShowDetail = () => {
		setIsShowDetail(!isShowDetail);
	};

	const handleShowListMess = () => {
		setIsShowListMess(!isShowListMess);
	};

	return (
		<div className="bg-[white] overflow-hidden grid grid-cols-1 gap-1 md:bg-[whitesmoke] lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5">
			<div
				className={`order-2 lg:order-1 lg:col-span-1 ${
					isShowListMess ? "col-span-1 order-1" : ""
				}`}
			>
				<ListMess ShowListMess={handleShowListMess} />
				{/* <TemporaryDrawer /> */}
			</div>
			<div
				className={`order-1 lg:order-2 col-span-1 lg:col-span-2 xl:col-span-3 ${
					isShowDetail ? "" : "xxl:col-span-4"
				} ${isShowListMess ? "order-2" : ""}`}
			>
				<BoxMess
					ShowDetail={handleShowDetail}
					ShowListMess={handleShowListMess}
				/>
			</div>
			{isShowDetail && (
				<div className="order-3 xxl:col-span-1">
					<DetailMess />
				</div>
			)}
		</div>
	);
}
