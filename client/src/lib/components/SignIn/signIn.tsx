import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
	Button,
	TextField,
	InputAdornment,
	OutlinedInput,
	IconButton,
	InputLabel,
	FormControl,
	Checkbox,
	FormHelperText,
} from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./signIn.module.css";
import { COLORFIELD } from "../../../helper/const";
import HeaderForm from "../header/headerForm";
import useSignIn from "./useSignIn";
import Loading from "../Loading/loading";
import Swal from "sweetalert2";

import Logo from "../../../assets/images/logo.png";
import Visibility from "../../../assets/icons/visibility.svg";
import VisibilityOff from "../../../assets/icons/visibility-off.svg";
import FacebookIcon from "../../../assets/images/facebook-icon.png";
import GoogleIcon from "../../../assets/images/google-icon.png";
import CrossIcon from "../../../assets/icons/cross-circle.svg";

interface IFormInput {
	username: string;
	password: string;
}

const Form = () => {
	const {
		control,
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		defaultValues: {
			username: "",
			password: "",
		},
	});

	const { loginRes, isLoading, error, handleSubmitForm } = useSignIn();

	//check remember me
	const [isCheck, setIsCheck] = useState(false);
	const handleCheckRemember = () => {
		setIsCheck(!isCheck);
	};

	//toggle show password
	const [isShow, setIsShow] = useState(false);
	const handleClickShowPassword = () => {
		setIsShow(!isShow);
	};
	const handleMouseDownPassword = (event: any) => {
		event.preventDefault();
	};

	//action after login success
	const navigate = useNavigate();
	useEffect(() => {
		if (loginRes?.status === 200) {
			Swal.fire({
				icon: "success",
				title: "Login success",
				showConfirmButton: false,
				timer: 1500,
			});
			navigate("/");
			// reload page
			window.location.reload();
		}
	}, [loginRes, navigate]);

	const AlertError = () => {
		return (
			<div className="flex bg-[#fd4350] p-4 rounded-xl w-full mb-6 md:p-6">
				<img src={CrossIcon} alt="cross-icon" className="w-5 md:w-8" />
				<div className="text-white ml-4 text-sm md:text-base md:ml-6">
					<p>T??i kho???n kh??ng c?? ho???c kh??ng ????ng!</p>
					<p>Vui l??ng nh???p l???i</p>
				</div>
			</div>
		);
	};

	return (
		<div className="w-full max-w-[520px]">
			{loginRes?.status === 400 && <AlertError />}
			{isLoading && <Loading />}
			<form
				onSubmit={handleSubmit(handleSubmitForm)}
				className="grid gap-6"
			>
				<Controller
					name="username"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							error={errors.username ? true : false}
							helperText={errors.username?.message}
							variant="outlined"
							label="S??? ??i???n tho???i"
							placeholder="0123456789"
							{...register("username", {
								required: "Vui l??ng nh???p s??? ??i???n tho???i !",
								maxLength: {
									value: 10,
									message: "S??? ??i???n tho???i kh??ng ????ng !",
								},
								pattern: {
									value: /^[0-9]+$/,
									message: "S??? ??i???n tho???i kh??ng ????ng !",
								},
							})}
						/>
					)}
				/>
				<Controller
					name="password"
					control={control}
					render={({ field }) => (
						<FormControl
							variant="outlined"
							error={errors.password ? true : false}
							{...register("password", {
								required: "Vui l??ng nh???p th??ng tin!",
								maxLength: {
									value: 20,
									message: "Kh??ng ???????c qu?? 20 k?? t??? !",
								},
							})}
						>
							<InputLabel htmlFor="password">M???t Kh???u</InputLabel>
							<OutlinedInput
								id="password"
								{...field}
								type={isShow ? "text" : "password"}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={
												handleMouseDownPassword
											}
											edge="end"
										>
											{isShow ? (
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
								label="M???t Kh???u"
							/>
							<FormHelperText>
								{errors.password?.message}
							</FormHelperText>
						</FormControl>
					)}
				/>
				<div className="flex items-center">
					<Checkbox
						checked={isCheck}
						onChange={handleCheckRemember}
					/>
					<p className="text-sm font-bold md:text-base">Ghi Nh???</p>
				</div>
				<div className="pb-5">
					<Button
						type="submit"
						variant="contained"
						className="w-full"
					>
						<p className="md:text-base">????ng Nh???p</p>
					</Button>
				</div>
			</form>
		</div>
	);
};

const SignIn = () => {
	return (
		<div className={styles.hide + " " + "flex"}>
			<div className={styles.bg}>
				<p className="text-2xl font-medium">WELCOME TO</p>
				<h1 className="text-[44px] font-black">APP CHAT</h1>
			</div>
			<div className="w-full px-4 min-h-screen xl:w-[45%] flex flex-col justify-center items-center relative">
				<HeaderForm
					linkLeft="/"
					linkRight="/sign-up"
					textLeft="Trang Ch???"
					textRight="????ng K??"
				/>
				<img src={Logo} alt="Logo" className="w-[150px]" />
				<p className="text-2xl font-bold mt-5 mb-5">Xin Ch??o!</p>
				<Form />
				<p
					className={`text-sm font-bold text-[${COLORFIELD.black}}] md:text-base`}
				>
					<Link to="/forgot-password">Qu??n m???t kh???u?</Link>
				</p>
				<div className="mt-5">
					<p className="font-bold text-sm md:text-base">
						????NG NH???P B???NG:{" "}
					</p>
					<div className="flex gap-5 pt-3 justify-center">
						<IconButton href="/facebook">
							<img
								src={FacebookIcon}
								alt="Facebook"
								className="w-10"
							/>
						</IconButton>
						<IconButton href="/google">
							<img
								src={GoogleIcon}
								alt="Google"
								className="w-10"
							/>
						</IconButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
