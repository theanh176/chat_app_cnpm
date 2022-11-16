import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Button,
  InputAdornment,
  OutlinedInput,
  IconButton,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import styles from "./resetPassword.module.css";
import HeaderForm from "../header/headerForm";

import Logo from "../../../assets/images/logo.png";
import Visibility from "../../../assets/icons/visibility.svg";
import VisibilityOff from "../../../assets/icons/visibility-off.svg";

interface IFormInput {
  rePassword: string;
  password: string;
}

const Form = () => {
  const {
    control,
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      rePassword: "",
      password: "",
    },
  });

  const password = useRef({});
  password.current = watch("password", "");

  const [isShow, setIsShow] = useState(false);

  const handleClickShowPassword = () => {
    setIsShow(!isShow);
  };

  const [isShowRe, setIsShowRE] = useState(false);

  const handleClickShowRePassword = () => {
    setIsShowRE(!isShow);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const handleMouseDownRePassword = (event: any) => {
    event.preventDefault();
  };

  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[520px] grid gap-6"
    >
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
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt !",
              },
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
      <Controller
        name="rePassword"
        control={control}
        render={({ field }) => (
          <FormControl
            variant="outlined"
            error={errors.rePassword ? true : false}
            {...register("rePassword", {
              required: "Vui lòng nhập thông tin!",
              maxLength: {
                value: 20,
                message: "Không được quá 20 ký tự !",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt !",
              },
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
          >
            <InputLabel htmlFor="rePassword">Nhập Lại Mật Khẩu</InputLabel>
            <OutlinedInput
              id="rePassword"
              {...field}
              type={isShowRe ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowRePassword}
                    onMouseDown={handleMouseDownRePassword}
                    edge="end"
                  >
                    {isShowRe ? (
                      <img src={VisibilityOff} alt="Visibility-Off" />
                    ) : (
                      <img src={Visibility} alt="Visibility" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Nhập Lại Mật Khẩu"
            />
            <FormHelperText>{errors.rePassword?.message}</FormHelperText>
          </FormControl>
        )}
      />
      <div className="pb-5">
        <>
        {console.log(errors)}
        <Button type="submit" variant="contained" className="w-full">
          <p className="md:text-base">ĐẶT LẠI MẬT KHẨU</p>
        </Button>
        </>
      </div>

    </form>
  );
};

export default function ResetPassword() {
  return (
    <div className="flex">
      <div className={styles.bg}>
        <p className="text-2xl font-medium">CHÀO MỪNG ĐẾN VỚI</p>
        <h1 className="text-[44px] font-black">HỌC SIÊU DỄ - EASY LEARN</h1>
      </div>
      <div className="w-full px-4 min-h-screen xl:w-[45%] flex flex-col justify-center items-center relative">
        <HeaderForm
          linkLeft="/"
          linkRight="/sign-in"
          textLeft="Trang Chủ"
          textRight="Đăng Nhập"
        />
        <img src={Logo} alt="Logo" className="w-[150px]" />
        <p className="text-2xl font-bold mt-5 mb-5">ĐẶT LẠI MẬT KHẨU</p>
        <Form />
      </div>
    </div>
  );
}
