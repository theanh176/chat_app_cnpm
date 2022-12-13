import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import HeaderForm from "../header/headerForm";
import Loading from "../Loading/loading";
import styles from "./signUp.module.css";
import useSignUp from "./useSignUp";
import Swal from "sweetalert2";

import VisibilityOff from "../../../assets/icons/visibility-off.svg";
import Visibility from "../../../assets/icons/visibility.svg";
import FacebookIcon from "../../../assets/images/facebook-icon.png";
import GoogleIcon from "../../../assets/images/google-icon.png";
import Logo from "../../../assets/images/logo.png";

interface IFormInput {
  email: string;
  name: string;
  gender: string;
  phone: string;
  birthday: string;
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
      email: "",
      name: "",
      phone: "",
      birthday: "01/01/2022",
      gender: "",
      password: "",
    },
  });

  const { isLoading, handleSubmitForm, signUpRes } = useSignUp();

  //toggle show password
  const [isShow, setIsShow] = useState(false);
  const handleClickShowPassword = () => {
    setIsShow(!isShow);
  };
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  console.log(signUpRes)

  //action after sigup success
  const navigate = useNavigate();
  useEffect(() => {
    if (signUpRes?.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Register success",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/sign-in");
    }
  }, [signUpRes, navigate]);

  return (
    <>
      {isLoading && <Loading />}
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="px-3 grid gap-6 w-full max-w-[520px]"
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              error={errors.email ? true : false}
              helperText={errors.email?.message}
              className="w-full"
              variant="outlined"
              label="Email"
              placeholder="abc@gmail.com"
              {...register("email", {
                required: "Vui lòng nhập email !",
                maxLength: {
                  value: 30,
                  message: "Email không được quá 20 ký tự !",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email không đúng định dạng !",
                },
              })}
            />
          )}
        />
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
                inputFormat="MM/DD/YYYY"
                {...field}
                renderInput={(params) => <TextField {...params} />}
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
                <InputLabel id="demo-simple-select-label">Giới tính</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  label="Giới tính"
                  {...field}
                  sx={{
                    textAlign: "left",
                  }}
                >
                  <MenuItem value="nam">Nam</MenuItem>
                  <MenuItem value="nu">Nữ</MenuItem>
                </Select>
                <FormHelperText>{errors.gender?.message}</FormHelperText>
              </FormControl>
            );
          }}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              error={errors.phone ? true : false}
              helperText={errors.phone?.message}
              className="w-full"
              variant="outlined"
              label="Số điện thoại"
              {...register("phone", {
                required: "Vui lòng nhập thông tin!",
                maxLength: {
                  value: 10,
                  message: "Không đúng định dạng !",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Không đúng định dạng !",
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
                required: "Vui lòng nhập thông tin!",
                maxLength: {
                  value: 20,
                  message: "Không được quá 20 ký tự !",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message:
                    "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số!",
                },
              })}
            >
              <InputLabel htmlFor="password">Mật khẩu</InputLabel>
              <OutlinedInput
                id="password"
                {...field}
                type={isShow ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {isShow ? (
                        <img src={VisibilityOff} alt="Visibility-Off" />
                      ) : (
                        <img src={Visibility} alt="Visibility" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <FormHelperText>{errors.password?.message}</FormHelperText>
            </FormControl>
          )}
        />
        <div></div>
        <div className="pb-5 md:mt-5">
          <Button type="submit" variant="contained" className="w-full">
            <p className="md:text-base">ĐĂNG KÍ TÀI KHOẢN</p>
          </Button>
        </div>
      </form>
    </>
  );
};

const SignUp = () => {
  return (
    <div className="flex">
      <div className={styles.bg}>
        <p className="text-2xl font-medium">CHÀO MỪNG ĐẾN VỚI</p>
        <h1 className="text-[44px] font-black">HỌC SIÊU DỄ - EASY LEARN</h1>
      </div>
      <div className="w-full px-4 min-h-screen flex flex-col justify-center items-center relative xl:w-[45%] md:pt-10">
        <HeaderForm
          linkLeft="/"
          linkRight="/sign-in"
          textLeft="Trang Chủ"
          textRight="Đăng Nhập"
        />
        <img src={Logo} alt="Logo" className="w-[150px] mt-10" />
        <p className="text-2xl font-bold my-5">ĐĂNG KÝ</p>
        <Form />
        <p className="font-bold text-sm md:text-base">ĐĂNG KÝ BẰNG: </p>
        <div className="flex gap-5 pt-3 justify-center">
          <IconButton href="/facebook">
            <img src={FacebookIcon} alt="Facebook" className="w-10" />
          </IconButton>
          <IconButton href="/google">
            <img src={GoogleIcon} alt="Google" className="w-10" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
