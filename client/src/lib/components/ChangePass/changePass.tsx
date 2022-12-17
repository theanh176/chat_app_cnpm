import {
	Button,
	FormControl,
	FormHelperText,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import Swal from "sweetalert2";
import styles from "./changePass.module.css";

import VisibilityOff from "../../../assets/icons/visibility-off.svg";
import Visibility from "../../../assets/icons/visibility.svg";

import { useDispatch } from "react-redux";
import { isChangePass } from "../../../store";
import useChangePass from "./useChangePass";
import Loading from "../Loading/loading";

interface isShow {
	isShow: boolean;
}

interface IForm {
	isLoading: boolean;
	handleSubmitForm: (data: { password: string; newpassword: string }) => void;
}

const Form = ({ handleSubmitForm, isLoading }: IForm) => {
	console.log(isLoading);
	const {
		control,
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		defaultValues: {
			password: "",
			newpassword: "",
		},
	});
	const onSubmit = async (data: {
		password: string;
		newpassword: string;
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
		dispatch(isChangePass());
	};

	//toggle show password
	const [isShowPass, setIsShowPass] = useState(false);

	//toggle show new password
	const [isShowNewPass, setIsShowNewPass] = useState(false);

	return (
		<div className={styles.hide + " " + "w-full max-w-[520px] mt-10"}>
			{isLoading && <Loading />}
			<form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
				<Controller
					name="password"
					control={control}
					render={({ field }) => (
						<FormControl
							variant="outlined"
							error={errors.password ? true : false}
							{...register("password", {
								required: "Vui lòng nhập thông tin!",
								maxLength: {
									value: 20,
									message: "Không được quá 20 ký tự !",
								},
							})}
						>
							<InputLabel htmlFor="password">Password</InputLabel>
							<OutlinedInput
								id="password"
								{...field}
								type={isShowPass ? "text" : "password"}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={() =>
												setIsShowPass(!isShowPass)
											}
											onMouseDown={(e) =>
												e.preventDefault()
											}
											edge="end"
										>
											{isShowPass ? (
												<img
													src={VisibilityOff}
													alt="Visibility-Off"
												/>
											) : (
												<img
													src={Visibility}
													alt="Visibility"
												/>
											)}
										</IconButton>
									</InputAdornment>
								}
								label="Password"
							/>
							<FormHelperText>
								{errors.password?.message}
							</FormHelperText>
						</FormControl>
					)}
				/>
				<Controller
					name="newpassword"
					control={control}
					render={({ field }) => (
						<FormControl
							variant="outlined"
							error={errors.newpassword ? true : false}
							{...register("newpassword", {
								required: "Vui lòng nhập thông tin!",
								maxLength: {
									value: 20,
									message: "Không được quá 20 ký tự !",
								},
							})}
						>
							<InputLabel htmlFor="newpassword">
								New Password
							</InputLabel>
							<OutlinedInput
								id="newpassword"
								{...field}
								type={isShowNewPass ? "text" : "password"}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle newpassword visibility"
											onClick={() =>
												setIsShowNewPass(!isShowNewPass)
											}
											onMouseDown={(e) =>
												e.preventDefault()
											}
											edge="end"
										>
											{isShowNewPass ? (
												<img
													src={VisibilityOff}
													alt="Visibility-Off"
												/>
											) : (
												<img
													src={Visibility}
													alt="Visibility"
												/>
											)}
										</IconButton>
									</InputAdornment>
								}
								label="New Password"
							/>
							<FormHelperText>
								{errors.newpassword?.message}
							</FormHelperText>
						</FormControl>
					)}
				/>
				<div className="pb-5">
					<Button
						type="submit"
						variant="contained"
						className="w-full"
						onClick={handleSubmit(onSubmit)}
					>
						<p className="md:text-base">Confirm</p>
					</Button>
				</div>
			</form>
		</div>
	);
};

const ChangePass = ({ isShow }: isShow) => {
	const { changePassRes, handleSubmitForm, isLoading } = useChangePass();

	const dispatch = useDispatch();

	const { isMobile } = useBreakPoint();

	const handleClose = () => {
		dispatch(isChangePass());
	};

	useEffect(() => {
		changePassRes?.status === 200 &&
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Change password success",
				showConfirmButton: false,
				timer: 1500,
			});
		changePassRes?.status === 400 &&
			Swal.fire({
				position: "center",
				icon: "error",
				title: "Change password error",
				showConfirmButton: false,
				timer: 1500,
			});
	}, [changePassRes]);

	return (
		<Dialog
			open={isShow}
			onClose={handleClose}
			fullScreen={isMobile ? true : false}
			classes={{
				paper: "p-4",
			}}
		>
			<div className="text-2xl font-bold text-center">
				Change Password
			</div>
			<div className="text-sm mt-4">
				To change your password, please enter your current password and
				a new password!
			</div>
			<Form handleSubmitForm={handleSubmitForm} isLoading={isLoading} />
		</Dialog>
	);
};

export default ChangePass;
