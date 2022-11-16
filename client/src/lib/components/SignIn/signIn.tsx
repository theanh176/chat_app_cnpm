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
import { SignInApi } from "../../../api/signInApi";

import Logo from "../../../assets/images/logo.png";
import Visibility from "../../../assets/icons/visibility.svg";
import VisibilityOff from "../../../assets/icons/visibility-off.svg";
import FacebookIcon from "../../../assets/images/facebook-icon.png";
import GoogleIcon from "../../../assets/images/google-icon.png";
import CrossIcon from "../../../assets/icons/cross-circle.svg";

interface IFormInput {
  email: string;
  password: string;
}

const Form = () => {
  const {
    control,
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isCheck, setIsCheck] = useState(false);
  const handleCheckRemember = () => {
    setIsCheck(!isCheck);
  };

  const [isShow, setIsShow] = useState(false);

  const handleClickShowPassword = () => {
    setIsShow(!isShow);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  // Catch data response when submit form
  const [dataResponse, setDataResponse] = useState<any>(null);

  const onSubmit = async (data: IFormInput) => {
    const res = await SignInApi(data);
    setDataResponse(res);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (dataResponse?.status === 200) {
      navigate("/");
    }
  }, [dataResponse, navigate]);

  const AlertError = () => {
    return (
      <div className="flex bg-[#fd4350] p-4 rounded-xl w-full mb-6 md:p-6">
        <img src={CrossIcon} alt="cross-icon" className="w-5 md:w-8" />
        <div className="text-white ml-4 text-sm md:text-base md:ml-6">
          <p>Tài khoản không có hoặc không đúng!</p>
          <p>Vui lòng nhập lại</p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-[520px]">
      {dataResponse?.status === 400 && <AlertError />}
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              error={errors.email ? true : false}
              helperText={errors.email?.message}
              variant="outlined"
              label="Email"
              placeholder="abc@gmail.com"
              {...register("email", {
                required: "Vui lòng nhập email !",
                maxLength: {
                  value: 30,
                  message: "Email không được quá 30 ký tự !",
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
                // pattern: {
                //   value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                //   message:
                //     "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số!",
                // },
              })}
            >
              <InputLabel htmlFor="password">Mật Khẩu</InputLabel>
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
                label="Mật Khẩu"
              />
              <FormHelperText>{errors.password?.message}</FormHelperText>
            </FormControl>
          )}
        />
        <div className="flex items-center">
          <Checkbox checked={isCheck} onChange={handleCheckRemember} />
          <p className="text-sm font-bold md:text-base">Ghi Nhớ</p>
        </div>
        <div className="pb-5">
          <Button type="submit" variant="contained" className="w-full">
            <p className="md:text-base">Đăng Nhập</p>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default function SignIn() {
  return (
    <div className="flex">
      <div className={styles.bg}>
        <p className="text-2xl font-medium">CHÀO MỪNG ĐẾN VỚI</p>
        <h1 className="text-[44px] font-black">HỌC SIÊU DỄ - EASY LEARN</h1>
      </div>
      <div className="w-full px-4 min-h-screen xl:w-[45%] flex flex-col justify-center items-center relative">
        <HeaderForm
          linkLeft="/"
          linkRight="/sign-up"
          textLeft="Trang Chủ"
          textRight="Đăng Kí"
        />
        <img src={Logo} alt="Logo" className="w-[150px]" />
        <p className="text-2xl font-bold mt-5 mb-5">Xin Chào!</p>
        <Form />
        <p
          className={`text-sm font-bold text-[${COLORFIELD.black}}] md:text-base`}
        >
          <Link to="/forgot-password">Quên mật khẩu?</Link>
        </p>
        <div className="mt-5">
          <p className="font-bold text-sm md:text-base">ĐĂNG NHẬP BẰNG: </p>
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
    </div>
  );
}
