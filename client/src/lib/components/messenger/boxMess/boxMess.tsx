import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./boxMess.module.css";
import { Avatar, Fab } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useRef, useState } from "react";
import BackIcon from "../../../../assets/icons/back.svg";
import CallIcon from "../../../../assets/icons/call.svg";
import VideoIcon from "../../../../assets/icons/call_video.svg";
import DetailIcon from "../../../../assets/icons/detail.svg";
import GifIcon from "../../../../assets/icons/gift.svg";
import MoreIcon from "../../../../assets/icons/icon_more.svg";
import TickerIcon from "../../../../assets/icons/icon_ticker.svg";
import TickerBigIcon from "../../../../assets/icons/icon_ticker_big.svg";
import Imagecon from "../../../../assets/icons/image.svg";
import SendIcon from "../../../../assets/icons/send.svg";
import BadgeAvatars from "../../CustomMui/badgeAvatars";
import DetailItemMess from "./components/detail_item_mess";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
	ShowDetail: any;
	ShowListMess: any;
}

const LISTMESS = [
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
	{
		name: "Thế Anh",
		messenger:
			"Trong ngôn ngữ HTML, chúng ta không thể sử dụng phím Enter với mục đích hiển thị dấu ngắt xuống dòng, nếu các bạn dùng phím Enter để nhập dấu ngắt xuống dòng thì khi hiển thị lên màn hình, trình duyệt cũng chỉ xem nó như một dấu khoảng trắng",
	},
	{
		name: "Thế Anh",
		messenger:
			"Trong ngôn ngữ HTML, chúng ta không thể sử dụng phím Enter với mục đích hiển thị dấu ngắt xuống dòng, nếu các bạn dùng phím Enter để nhập dấu ngắt xuống dòng thì khi hiển thị lên màn hình, trình duyệt cũng chỉ xem nó như một dấu khoảng trắng",
	},
	{
		name: "Thế Anh",
		messenger: "Hello",
	},
];
const LISTMESS_1 = [
	{
		name: "Thế Anh",
		messenger: "Hello	1",
	},
	{
		name: "Thế Anh",
		messenger: "Hello	1",
	},
	{
		name: "Thế Anh",
		messenger: "Hello	1",
	},
	{
		name: "Thế Anh",
		messenger: "Hello	1",
	},
	{
		name: "Thế Anh",
		messenger: "Hello	1",
	},
	{
		name: "Thế Anh",
		messenger: "Hello	1",
	},
	{
		name: "Thế Anh",
		messenger: "Hello	1",
	},
	{
		name: "Thế Anh",
		messenger: "Hello	1",
	},
	{
		name: "Thế Anh",
		messenger: "Hello	1",
	},
	{
		name: "Thế Anh",
		messenger: "Hello	1",
	},
	{
		name: "Thế Anh",
		messenger: "Hello	1",
	},
];

const LISTMESS_2 = [
	{
		name: "Thế Anh",
		messenger: "Hello	2",
	},
	{
		name: "Thế Anh",
		messenger: "Hello	2",
	},
	{
		name: "Thế Anh",
		messenger: "Hello	2",
	},
	{
		name: "Thế Anh",
		messenger: "Hello	2",
	},
	{
		name: "Thế Anh",
		messenger: "Hello	2",
	},
	{
		name: "Thế Anh",
		messenger: "Hello	2",
	},
	{
		name: "Thế Anh",
		messenger: "Hello	2",
	},
	{
		name: "Thế Anh",
		messenger: "Hello	2",
	},
	{
		name: "Thế Anh",
		messenger: "Hello	2",
	},
	{
		name: "Thế Anh",
		messenger: "Hello	2",
	},
	{
		name: "Thế Anh",
		messenger: "Hello	2",
	},
];

export default function BoxMess({ ShowDetail, ShowListMess }: Props) {
	let items = [];
	const ref: any = useRef(null);
	const [listMess, setListMess] = useState(LISTMESS);
	const [pos, setPos] = useState(false);
	const [heightBox, setHeightBox] = useState(0);

	useEffect(() => {
		const temp: any = ref.current;
		temp.addEventListener("scroll", handleScroll);
		return () => temp.removeEventListener("scroll", handleScroll);
	});

	useEffect(() => {
		ref.current.scrollTo(0, ref.current.scrollHeight);
		setHeightBox(ref.current.scrollHeight);
	}, []);

	for (var i = 0; i <= 40; i++) {
		items.push(
			`Trong ngôn ngữ HTML, chúng ta không thể sử dụng phím Enter với mục đích hiển thị dấu ngắt xuống dòng, nếu các bạn dùng phím Enter để nhập dấu ngắt xuống dòng thì khi hiển thị lên màn hình, trình duyệt cũng chỉ xem nó như một dấu khoảng trắng. ${i}`
		);
	}

	const handleBottom = () => {
		ref.current.scrollTop = ref.current.scrollHeight;
		setPos(false);
	};

	const handleScroll = () => {
		if (ref.current.scrollTop < heightBox - 1200) {
			setPos(true);
		} else {
			setPos(false);
		}
	};

	function fetchMoreData() {
		console.log("first");
		setTimeout(() => {
			setListMess([...listMess, ...LISTMESS_1]);
		}, 1000);
	}

	return (
		<div className="shadow">
			<div
				style={{
					backgroundColor: "white",
					padding: 1,
					borderTopLeftRadius: 8,
					borderTopRightRadius: 8,
					height: 84,
				}}
				className="flex items-center justify-between"
			>
				<div className="flex items-center px-2">
					<div className="mr-2 content-center lg:hidden block">
						<button
							onClick={() => {
								ShowListMess();
							}}
						>
							<img
								src={BackIcon}
								alt="back"
								style={{
									width: 32,
									height: 32,
								}}
							/>
						</button>
					</div>
					<BadgeAvatars />
					<div className="mx-2">
						<Typography fontWeight="bold"></Typography>
						<Typography>My Name</Typography>
					</div>
				</div>
				<div className="flex items-center justify-between ">
					<Tooltip title="Bắt đầu gọi thoại">
						<IconButton
							onClick={() => {
								alert("Chức năng chưa hoàn thiện");
							}}
							size="small"
						>
							<img
								src={CallIcon}
								alt="video"
								style={{
									width: 32,
									height: 32,
								}}
							/>
						</IconButton>
					</Tooltip>
					<Tooltip title="Bắt đầu gọi video">
						<IconButton
							onClick={() => {
								alert("Chức năng chưa hoàn thiện");
							}}
							size="small"
						>
							<img
								src={VideoIcon}
								alt="video"
								style={{
									width: 32,
									height: 32,
								}}
							/>
						</IconButton>
					</Tooltip>
					<Tooltip title="Thông tin về cuộc trò chuyện">
						<IconButton
							onClick={() => {
								ShowDetail();
							}}
							size="small"
						>
							<img
								src={DetailIcon}
								alt="video"
								style={{
									width: 32,
									height: 32,
								}}
							/>
						</IconButton>
					</Tooltip>
				</div>
			</div>
			<div
				id="scrollableDiv"
				style={{
					overflow: "auto",
					scrollBehavior: "smooth",
					height: "calc(100vh - 248px)",
					backgroundColor: "white",
					padding: "0 5px",
					borderTop: "1px solid #e5e5e5",
					borderBottom: "1px solid #e5e5e5",
					display: "flex",
					flexDirection: "column-reverse",
				}}
				ref={ref}
			>
				<InfiniteScroll
					style={{ display: "flex", flexDirection: "column-reverse" }}
					dataLength={listMess.length}
					next={fetchMoreData}
					inverse={true}
					hasMore={true}
					loader={<h4>Loading...</h4>}
					scrollableTarget="scrollableDiv"
				>
					{listMess.map((item, index) => (
						<>
							{/* <div className="flex justify-center p-2">
								<div
									key={index}
									style={{
										margin: "2px",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									12h:30m
								</div>
							</div> */}
							{index % 2 === 0 ? (
								<div
									key={index}
									className={
										styles.box_item_mess_left +
										" " +
										"flex justify-start p-2"
									}
									style={{ position: "relative" }}
								>
									<div className="w-[45%] flex">
										<div className="flex self-end">
											<Avatar />
										</div>
										<div>
											<h6 className="py-1 px-4 text-xs">
												{item.name}
											</h6>
											<div
												onMouseEnter={() => {}}
												style={{
													position: "relative",
													padding: "8px 12px",
													display: "flex",
													justifyContent: "center",
													alignItems: "start",
													margin: "0px 5px",
													borderRadius: 20,
													backgroundColor:
														"whitesmoke",
													fontSize: "1rem",
													color: "black",
												}}
											>
												{item.messenger}
												<div
													className={
														styles.box_detail_mess_left
													}
												>
													<DetailItemMess />
												</div>
											</div>
										</div>
									</div>
								</div>
							) : (
								<div
									key={index}
									className={
										styles.box_item_mess_right +
										" " +
										"flex justify-end"
									}
								>
									<div className="w-[45%] flex justify-end p-2">
										<div
											style={{
												position: "relative",
												padding: "8px 12px",
												display: "flex",
												justifyContent: "center",
												alignItems: "end",
												margin: "0px 5px",
												borderRadius: 20,
												backgroundColor: "#615dfa",
												fontSize: "1rem",
												color: "white",
											}}
										>
											<div
												className={
													styles.box_detail_mess_right +
													" " +
													"justify-end"
												}
											>
												<DetailItemMess />
											</div>
											{item.messenger}
										</div>
										<div className="flex self-end">
											<Avatar
												sx={{ height: 14, width: 14 }}
											/>
										</div>
									</div>
								</div>
							)}
						</>
					))}
				</InfiniteScroll>
			</div>
			<Fab
				style={{
					marginLeft: 8,
					position: "fixed",
					bottom: 100,
					display: pos ? "block" : "none",
				}}
				size="small"
				aria-label="scroll back to top"
				onClick={handleBottom}
			>
				<KeyboardArrowDownIcon />
			</Fab>
			<div
				style={{
					backgroundColor: "white",
					borderBottomLeftRadius: 8,
					borderBottomRightRadius: 8,
					height: 84,
				}}
				className="flex items-center justify-between"
			>
				<div className="flex justify-evenly" style={{ width: "20%" }}>
					<Tooltip title="Mở hành động khác">
						<IconButton
							onClick={() => {
								alert("Chức năng chưa hoàn thiện");
							}}
							size="small"
						>
							<img
								src={MoreIcon}
								alt="send"
								style={{
									width: 24,
									height: 24,
								}}
							/>
						</IconButton>
					</Tooltip>
					<Tooltip title="Đính kèm file">
						<IconButton
							onClick={() => {
								alert("Chức năng chưa hoàn thiện");
							}}
							size="small"
						>
							<img
								src={Imagecon}
								alt="send"
								style={{
									width: 24,
									height: 24,
								}}
							/>
						</IconButton>
					</Tooltip>
					<Tooltip title="Chọn nhãn dán">
						<IconButton
							onClick={() => {
								alert("Chức năng chưa hoàn thiện");
							}}
							size="small"
						>
							<img
								src={TickerBigIcon}
								alt="send"
								style={{
									width: 24,
									height: 24,
								}}
							/>
						</IconButton>
					</Tooltip>
					<Tooltip title="Chọn file gif">
						<IconButton
							onClick={() => {
								alert("Chức năng chưa hoàn thiện");
							}}
							size="small"
						>
							<img
								src={GifIcon}
								alt="send"
								style={{
									width: 24,
									height: 24,
								}}
							/>
						</IconButton>
					</Tooltip>
				</div>
				<div className="flex justify-evenly" style={{ width: "80%" }}>
					<div
						className="flex justify-evenly"
						style={{
							width: "calc(90%)",
							height: 40,
							borderRadius: 20,
							border: "none",
							outline: "none",
							backgroundColor: "whiteSmoke",
						}}
					>
						<input
							placeholder="Nhập tin nhắn"
							type="text"
							style={{
								width: "calc(90%)",
								height: 40,
								borderRadius: 20,
								border: "none",
								outline: "none",
								backgroundColor: "whiteSmoke",
							}}
						></input>
						<Tooltip title="Chọn biểu tượng cảm xúc">
							<IconButton
								onClick={() => {
									alert("Chức năng chưa hoàn thiện");
								}}
								size="small"
								className="h-[34px] w-[34px] flex self-center"
							>
								<img
									src={TickerIcon}
									alt="send"
									style={{
										width: 24,
										height: 24,
									}}
								/>
							</IconButton>
						</Tooltip>
					</div>
					<Tooltip title="Gửi">
						<IconButton
							onClick={() => {
								alert("Chức năng chưa hoàn thiện");
							}}
							size="small"
							className="h-[34px] w-[34px] flex self-center"
						>
							<img
								src={SendIcon}
								alt="send"
								style={{
									width: 24,
									height: 24,
								}}
							/>
						</IconButton>
					</Tooltip>
				</div>
			</div>
		</div>
	);
}
