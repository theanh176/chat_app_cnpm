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
                required: "Vui l??ng nh???p email !",
                maxLength: {
                  value: 30,
                  message: "Email kh??ng ???????c qu?? 20 k?? t??? !",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email kh??ng ????ng ?????nh d???ng !",
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
              label="H??? v?? T??n"
              placeholder="Truong Van A"
              {...register("name", {
                required: "Vui l??ng nh???p th??ng tin!",
                maxLength: {
                  value: 30,
                  message: "Kh??ng ???????c qu?? 30 k?? t??? !",
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
                label="Ng??y sinh"
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
                  required: "Vui l??ng ch???n!",
                })}
              >
                <InputLabel id="demo-simple-select-label">Gi???i t??nh</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  label="Gi???i t??nh"
                  {...field}
                  sx={{
                    textAlign: "left",
                  }}
                >
                  <MenuItem value="nam">Nam</MenuItem>
                  <MenuItem value="nu">N???</MenuItem>
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
              label="S??? ??i???n tho???i"
              {...register("phone", {
                required: "Vui l??ng nh???p th??ng tin!",
                maxLength: {
                  value: 10,
                  message: "Kh??ng ????ng ?????nh d???ng !",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Kh??ng ????ng ?????nh d???ng !",
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
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message:
                    "M???t kh???u ph???i c?? ??t nh???t 8 k?? t???, bao g???m ch??? hoa, ch??? th?????ng, s???!",
                },
              })}
            >
              <InputLabel htmlFor="password">M???t kh???u</InputLabel>
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
            <p className="md:text-base">????NG K?? T??I KHO???N</p>
          </Button>
        </div>
      </form>
    </>
  );
};

const SignUp = () => {
  return (
    <div className={styles.hide + " " + "flex"}>
      <div className={styles.bg}>
        <p className="text-2xl font-medium">WELCOME TO</p>
        <h1 className="text-[44px] font-black">APP CHAT</h1>
      </div>
      <div className="w-full px-4 min-h-screen flex flex-col justify-center items-center relative xl:w-[45%] md:pt-10">
        <HeaderForm
          linkLeft="/"
          linkRight="/sign-in"
          textLeft="Trang Ch???"
          textRight="????ng Nh???p"
        />
        <img src={Logo} alt="Logo" className="w-[150px] mt-10" />
        <p className="text-2xl font-bold my-5">????NG K??</p>
        <Form />
        <p className="font-bold text-sm md:text-base">????NG K?? B???NG: </p>
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
