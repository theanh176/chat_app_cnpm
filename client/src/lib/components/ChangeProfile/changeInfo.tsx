import {
	Button,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import {DropzoneDialog} from 'material-ui-dropzone';
import {DropzoneArea} from 'material-ui-dropzone';

import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch } from "react-redux";
import { isChangeProfile } from "../../../store";
import useChangeInfo from "./useChangeInfo";

interface isShow {
	isShow: boolean;
}

const Form = () => {
	const { changeInfoRes, handleSubmitForm } = useChangeInfo();
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
			images: "",
		},
	});
	const onSubmit = async (data: {
		name: string;
		birthday: string;
		gender: string;
		address: string;
		job: string;
		images: string;
	}) => {
		try {
			handleSubmitForm(data);
			if (changeInfoRes.status === 200) {
				handleClose();
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Đổi thông tin thành công",
					showConfirmButton: false,
					timer: 1500,
				});
			} else {
				handleClose();
				Swal.fire({
					position: "center",
					icon: "error",
					title: "Đổi thông tin thất bại",
					showConfirmButton: false,
					timer: 1500,
				});
			}
		} catch (err) {
			console.log(err);
		}
	};

	const dispatch = useDispatch();
	const handleClose = () => {
		dispatch(isChangeProfile());
	};

	return (
		<div className={"w-full max-w-[520px] mt-10"}>
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
							label="Họ và Tên"
							placeholder="Truong Van A"
							{...register("name", {
								required: "Vui lòng nhập thông tin!",
								maxLength: {
									value: 30,
									message: "Không được quá 30 ký tự !",
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
								label="Ngày sinh"
								inputFormat="YYYY-MM-DD"
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
									required: "Vui lòng chọn!",
								})}
							>
								<InputLabel id="demo-simple-select-label">
									Giới tính
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									label="Giới tính"
									{...field}
									sx={{
										textAlign: "left",
									}}
								>
									<MenuItem value="nam">Male</MenuItem>
									<MenuItem value="nu">FeMale</MenuItem>
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
							label="Địa Chỉ"
							placeholder="Hà Nội"
							{...register("address", {
								required: "Vui lòng nhập thông tin!",
								maxLength: {
									value: 30,
									message: "Không được quá 30 ký tự !",
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
							label="Nghề Nghiệp"
							placeholder="Sinh Viên"
							{...register("job", {
								required: "Vui lòng nhập thông tin!",
								maxLength: {
									value: 30,
									message: "Không được quá 30 ký tự !",
								},
							})}
						/>
					)}
				/>
				{/* 
					uploader avatar 
				*/}
				<div className="pb-5">
					<Button
						type="submit"
						variant="contained"
						className="w-full"
					>
						<p className="md:text-base">Confirm</p>
					</Button>
				</div>
			</form>
		</div>
	);
};

const ChangeInfo = ({ isShow }: isShow) => {
	const dispatch = useDispatch();

	const { isMobile } = useBreakPoint();

	const handleClose = () => {
		dispatch(isChangeProfile());
	};

	return (
		<Dialog
			open={isShow}
			onClose={handleClose}
			fullScreen={isMobile ? true : false}
			classes={{
				paper: "p-4",
			}}
		>
			<div className="text-2xl font-bold text-center">Change Profile</div>
			<div className="text-sm mt-4">
				To change your profile, please enter your current profile and a
				new profile!
			</div>
			<Form />
		</Dialog>
	);
};

export default ChangeInfo;
