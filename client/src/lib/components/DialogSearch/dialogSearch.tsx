import { Button, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { Controller, useForm } from "react-hook-form";
import { useBreakPoint } from "../../../hooks/useBreakPoint";

import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/loading";

import SearchIcon from "../../../assets/icons/search_purple.svg";
import { GetUser } from "../User/useUser";
import useSearch from "./useDialogSearch";
import { toggleDialogSearch } from "../../../store";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import AvatarDefaultIcon from "../../../assets/icons/avatar-default.svg";
import ItemFriend from "./itemFriendSearch";
import { useListRequest, useSendRequest } from "../Friends/useRequest";

const Form = () => {
	const { searchRes, isLoading, handleSubmitForm } = useSearch();
	const { sendRequestData, loadingSendRequest, handleSendRequest } =
		useSendRequest();

	const { listRequestData, refetch } = useListRequest();

	useEffect(() => {
		sendRequestData?.status === 200 &&
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Send request success",
				showConfirmButton: false,
				timer: 1500,
			});
		sendRequestData?.status === 200 && refetch();
	}, [refetch, sendRequestData]);

	const {
		control,
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		defaultValues: {
			data: "",
		},
	});

	const dispatch = useDispatch();
	const handleClose = () => {
		dispatch(toggleDialogSearch());
	};

	const handleIdUser = (id: string) => {
		const data = {
			recever_id: id,
		};
		handleSendRequest(data);
		handleClose();
	};

	return (
		<div className={"w-full min-w-[520px] h-full mt-2"}>
			{isLoading && <Loading />}
			<form
				onSubmit={handleSubmit(handleSubmitForm)}
				className="grid gap-2"
			>
				<div className="pb-1">
					<Button
						type="submit"
						variant="contained"
						className="w-fit-content h-10 bg-purple-500 text-white rounded-3xl"
					>
						<p className="md:text-base">Search</p>
					</Button>
				</div>
				<Controller
					name="data"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							error={errors.data ? true : false}
							helperText={errors.data?.message}
							variant="outlined"
							label="Tìm kiếm"
							className="w-full"
							sx={{
								"& .MuiOutlinedInput-root": {
									color: "black",
									background: "white",
									borderRadius: "99px",
								},
								"& .MuiInputLabel-root": {
									color: "black",
									border: "none",
								},
								"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
									{
										color: "black",
									},
							}}
							placeholder="Nhập từ khóa tìm kiếm"
							{...register("data", {
								required: "Please enter your phone.",
								pattern: {
									value: /^[a-zA-Z0-9]+$/,
									message: "Please enter.",
								},
							})}
							InputProps={{
								endAdornment: (
									<img src={SearchIcon} alt="search" />
								),
							}}
						/>
					)}
				/>
			</form>

			{searchRes?.data?.length === 0 ? (
				<div className="flex items-center justify-center h-full">
					<p className="text-base font-semibold">No result found</p>
				</div>
			) : (
				searchRes?.data?.map((item: any) => {
					return (
						<>
							<ItemFriend
								key={item._id}
								name={item?.name}
								avatar={item?.avatar?.link}
								idFriend={item?._id}
								handleIdUser={handleIdUser}
							/>
						</>
					);
				})
			)}
		</div>
	);
};

const DialogSearch = () => {
	const { isShow } = useSelector(
		(state: any) => state.toggleDialogSearch.toggleDialogSearch
	);

	console.log(isShow);

	const dispatch = useDispatch();

	const { isMobile } = useBreakPoint();

	const handleClose = () => {
		dispatch(toggleDialogSearch());
	};

	// useEffect(() => {
	// 	searchRes?.status === 200 &&
	// 		Swal.fire({
	// 			position: "center",
	// 			icon: "success",
	// 			title: "Update profile success",
	// 			showConfirmButton: false,
	// 			timer: 1500,
	// 		});
	// 	searchRes?.status === 400 &&
	// 		Swal.fire({
	// 			position: "center",
	// 			icon: "error",
	// 			title: "Update profile error",
	// 			showConfirmButton: false,
	// 			timer: 1500,
	// 		});
	// 	refetch();
	// }, [searchRes, refetch]);

	return (
		<Dialog
			open={isShow}
			onClose={handleClose}
			fullScreen={isMobile ? true : false}
			classes={{
				paper: "p-4 h-[500px]",
			}}
		>
			<div className="h-[60px]">
				<p className="font-bold text-xl text-center md:text-3xl pt-4">
					Search
				</p>
				<div
					className="absolute top-4 right-4"
					onClick={() => dispatch(toggleDialogSearch())}
					aria-hidden="true"
				>
					<CloseRoundedIcon
						className="cursor-pointer text-black"
						fontSize={isMobile ? "medium" : "large"}
					/>
				</div>
			</div>
			<div className="text-sm mt-4">
				To search for a user, please enter the phone number of the user
			</div>
			<Form />
		</Dialog>
	);
};

export default DialogSearch;
