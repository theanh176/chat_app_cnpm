import {
	Button,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
	TextField
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useBreakPoint } from "../../../hooks/useBreakPoint";


import { useDispatch } from "react-redux";
import Loading from "../Loading/loading";
import useChangeProfile from "./useChangeProfile";

import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { toggleDialogUpdateInfo } from "../../../store";
import { GetUser } from "../User/useUser";

interface isShow {
	isShow: boolean;
}

interface IForm {
	isLoading: boolean;
	handleSubmitForm: (data: {
		name: string;
		birthday: string;
		gender: string;
		address: string;
		job: string;
	}) => void;
}

const Form = ({ handleSubmitForm, isLoading }: IForm) => {
	const { dataUser } = GetUser();

	const {
		control,
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: "",
			birthday: "01/01/2022",
			gender: "",
			address: "",
			job: "",
		},
	});
	const onSubmit = async (data: {
		name: string;
		birthday: string;
		gender: string;
		address: string;
		job: string;
	}) => {
		try {
			handleSubmitForm(data);
			handleClose();
		} catch (err) {
			console.log(err);
		}
	};

	const dispatch = useDispatch();
	const handleClose = () => {
		dispatch(toggleDialogUpdateInfo());
	};

	return (
		<div className={"w-full min-w-[520px] h-full mt-10"}>
			{isLoading && <Loading />}
			<form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
				<Controller
					name="name"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							error={errors.name ? true : false}
							helperText={errors.name?.message}
							className="w-full"
							variant="outlined"
							label={dataUser?.name}
							defaultValue={dataUser?.name}
							{...register("name", {
								required: "Please enter your name !",
								maxLength: {
									value: 30,
									message: "Max length is 30 characters !",
								},
							})}
						/>
					)}
				/>
				<Controller
					name="birthday"
					control={control}
					render={({ field }) => (
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DesktopDatePicker
								label="Birthday"
								inputFormat="MM/DD/YYYY"
								{...field}
								renderInput={(params) => (
									<TextField {...params} />
								)}
							/>
						</LocalizationProvider>
					)}
				/>
				<Controller
					name="gender"
					control={control}
					render={({ field }) => {
						return (
							<FormControl
								fullWidth
								error={errors.gender ? true : false}
								{...register("gender", {
									required: "Please select",
								})}
							>
								<InputLabel id="demo-simple-select-label">
									Gender
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									label="Gender"
									{...field}
									sx={{
										textAlign: "left",
									}}
								>
									<MenuItem value="nam">Male</MenuItem>
									<MenuItem value="nu">Female</MenuItem>
								</Select>
								<FormHelperText>
									{errors.gender?.message}
								</FormHelperText>
							</FormControl>
						);
					}}
				/>
				<Controller
					name="address"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							error={errors.name ? true : false}
							helperText={errors.name?.message}
							className="w-full"
							variant="outlined"
							label="Address"
							placeholder="Ho Chi Minh"
							{...register("address", {
								required: "please enter your address!",
								maxLength: {
									value: 30,
									message: "Max length is 30 characters !",
								},
							})}
						/>
					)}
				/>
				<Controller
					name="job"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							error={errors.name ? true : false}
							helperText={errors.name?.message}
							className="w-full"
							variant="outlined"
							label="Job"
							placeholder="Software Engineer"
							{...register("job", {
								required: "Please enter your job!",
								maxLength: {
									value: 30,
									message: "Max length is 30 characters !",
								},
							})}
						/>
					)}
				/>
				<div className="pb-5">
					<Button
						type="submit"
						variant="contained"
						className="w-full"
						onClick={() => {
							handleSubmit(onSubmit);
						}}
					>
						<p className="md:text-base">Confirm</p>
					</Button>
				</div>
			</form>
		</div>
	);
};

const ChangeInfo = ({ isShow }: isShow) => {
	const { changeProfileRes, isLoading, handleSubmitForm } =
		useChangeProfile();

	const dispatch = useDispatch();

	const { isMobile } = useBreakPoint();

	const handleClose = () => {
		dispatch(toggleDialogUpdateInfo());
	};

	const { refetch } = GetUser();

	useEffect(() => {
		changeProfileRes?.status === 200 &&
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Update profile success",
				showConfirmButton: false,
				timer: 1500,
			});
		changeProfileRes?.status === 400 &&
			Swal.fire({
				position: "center",
				icon: "error",
				title: "Update profile error",
				showConfirmButton: false,
				timer: 1500,
			});
		refetch();
	}, [changeProfileRes, refetch]);

	return (
		<Dialog
			open={isShow}
			onClose={handleClose}
			fullScreen={isMobile ? true : false}
			classes={{
				paper: "p-4",
			}}
		>
			<div className="text-2xl font-bold text-center">Update Profile</div>
			<div className="text-sm mt-4">
				To update profile, please enter fill in the form below.
			</div>
			<Form handleSubmitForm={handleSubmitForm} isLoading={isLoading} />
		</Dialog>
	);
};

export default ChangeInfo;
