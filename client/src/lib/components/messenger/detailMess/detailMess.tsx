import { Avatar, Typography } from "@mui/material";
import ProfileUser from "../../../../assets/icons/profileuser.svg";
import NotifiUser from "../../../../assets/icons/Notifications.svg";
import SearchUser from "../../../../assets/icons/SearchIcon.svg";
import ControlledAccordions from "./components/accordion";

export default function DetailMess() {
	return (
		<div
			style={{
				scrollBehavior: "smooth",
				height: "calc(100vh - 80px)",
				backgroundColor: "white",
				overflow: "auto",
			}}
			className="shadow p-4"
		>
			<div className="flex flex-col items-center gap-1 mb-2">
				<Avatar
					src="https://scontent.xx.fbcdn.net/v/t1.6435-1/65557800_2263400743973830_959032846775746560_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=Z0pN7WPItLMAX8hK3Aj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AT869D40u96pg56qyGvgckn3DMsIq_FUhU_-dq8i2oDnTw&oe=637562D8"
					sx={{ height: 100, width: 100 }}
				></Avatar>
				<Typography fontSize={22} fontWeight={600}>
					Thế Anh
				</Typography>
				<h5>Hoạt động 10 phút trước</h5>
			</div>
			<div className="grid grid-cols-3 justify-evenly">
				<div className="col-span-1 text-center">
					<button className="rounded-[50%] bg-white hover:bg-violet-200 active:bg-violet-500 focus:bg-violet-200 focus:ring-violet-300">
						<img
							className="rounded-[50%] h-11 w-11"
							src={ProfileUser}
							alt="profile"
						/>
					</button>
					<h6>Trang cá nhân</h6>
				</div>
				<div className="col-span-1 text-center">
					<button className="rounded-[50%] bg-white hover:bg-violet-200 active:bg-violet-500 focus:bg-violet-200 focus:ring-violet-300">
						<img
							className="rounded-[50%] h-11 w-11"
							src={NotifiUser}
							alt="profile"
						/>
					</button>
					<h6>Tắt thông báo</h6>
				</div>
				<div className="col-span-1 text-center">
					<button className="rounded-[50%] bg-white hover:bg-violet-200 active:bg-violet-500 focus:bg-violet-200 focus:ring-violet-300">
						<img
							className="rounded-[50%] h-11 w-11"
							src={SearchUser}
							alt="profile"
						/>
					</button>
					<h6>Tìm kiếm</h6>
				</div>
			</div>
			<div className="mt-3">
				<ControlledAccordions />
			</div>
		</div>
	);
}
