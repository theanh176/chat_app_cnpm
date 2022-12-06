import { useEffect } from "react";

import { Button } from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { isSignIn, SignOutApi } from "../../../api/authApi";
import ChangePass from "../ChangePass/changePass";
import Loading from "../Loading/loading";
import { GetUser } from "./useUser";

import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import PasswordRoundedIcon from "@mui/icons-material/PasswordRounded";
import { useDispatch, useSelector } from "react-redux";
import { isChangePass, isChangeProfile } from "../../../store";
import ChangeInfo from "../ChangeProfile/changeInfo";

const User = () => {
	const navigate = useNavigate();

	const { isChangePass: isChangePassState } = useSelector(
		(state: any) => state.isChangePass
	);
	const { isChangeProfile: isChangeProfileState } = useSelector(
		(state: any) => state.isChangeProfile
	);

	useEffect(() => {
		!isSignIn() && navigate("/sign-in");
	}, [navigate]);

	const { dataUser, isLoading } = GetUser();

	const formatDays = (day: any) => {
		return dayjs(day).format("DD/MM/YYYY");
	};

	const HeaderUser = () => {
		return (
			<>
				<div className="bg-banner h-[160px] bg-cover rounded-t-xl relative md:h-[250px]">
					<div className="absolute -bottom-10 w-full md:-bottom-20">
						<img
							src={dataUser?.avatar?.link}
							alt=""
							className="w-[120px] object-cover rounded-full mx-auto border-4 border-white md:w-[200px] md:border-8"
						/>
					</div>
				</div>
				<p className="font-bold text-xl mt-10 text-center md:mt-[90px] md:text-3xl">
					{dataUser?.name}
				</p>
			</>
		);
	};

	const BodyUser = () => {
		const dispatch = useDispatch();

		const handleClickChangePass = () => {
			dispatch(isChangePass());
		};
		const handleClickChangeInfo = () => {
			dispatch(isChangeProfile());
		};
		return (
			<div className="px-4 md:px-[160px]">
				<p className="font-bold md:text-2xl">Profile</p>
				<table className="table-fixed my-3 md:my-5">
					<tbody>
						<tr>
							<td className="md:text-xl">Phone: </td>
							<td className="pl-10 md:text-xl md:pl-20">
								{dataUser?.phone}
							</td>
						</tr>
						<tr>
							<td className="md:text-xl">Sex: </td>
							<td className="pl-10 md:text-xl md:pl-20">
								{dataUser?.gender}
							</td>
						</tr>
						<tr>
							<td className="md:text-xl">Email: </td>
							<td className="pl-10 md:text-xl md:pl-20">
								{dataUser?.email}
							</td>
						</tr>
						<tr>
							<td className="md:text-xl">Birthday: </td>
							<td className="pl-10 md:text-xl md:pl-20">
								{formatDays(dataUser?.birthday)}
							</td>
						</tr>
						<tr>
							<td className="md:text-xl">Create At: </td>
							<td className="pl-10 md:text-xl md:pl-20">
								{formatDays(dataUser?.createdAt)}
							</td>
						</tr>
					</tbody>
				</table>
				<div className="flex flex-col gap-2 md:gap-5 max-w-[480px] mx-auto md:flex-row">
					<Button className="w-full"onClick={handleClickChangeInfo}>
						<DriveFileRenameOutlineIcon />
						<p className="ml-1" >
							Change Profile
						</p>
					</Button>
					<Button className="w-full"onClick={handleClickChangePass}>
						<PasswordRoundedIcon />
						<p className="ml-1" >
							Change Password
						</p>
					</Button>
				</div>
			</div>
		);
	};

	const LogOut = () => {
		const handleLogOut = () => {
			SignOutApi();
			axios.defaults.headers.common["Authorization"] = "";
			window.location.reload();
		};

		return (
			<div className="absolute bottom-4 left-4 right-4 max-w-[480px] mx-auto">
				<Button
					className="w-full"
					sx={{
						backgroundColor: "#eb0014",
					}}
					onClick={handleLogOut}
				>
					<LogoutRoundedIcon />
					<p className="ml-2">LogOut</p>
				</Button>
			</div>
		);
	};

	return (
		<>
			{isLoading && <Loading />}
			<ChangePass isShow={isChangePassState} />
			<ChangeInfo isShow={isChangeProfileState} />
			<div className="bg-white relative rounded-xl h-[calc(100vh-140px)] max-w-[900px] mx-auto md:h-[calc(100vh-100px)]">
				<HeaderUser />
				<BodyUser />
				<LogOut />
			</div>
		</>
	);
};

export default User;
