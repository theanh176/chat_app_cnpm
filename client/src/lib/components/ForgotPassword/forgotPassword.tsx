import { useForm, Controller } from "react-hook-form";
import {
  Button,
  TextField,
} from "@mui/material";
import styles from "./forgotPassword.module.css";
import HeaderForm from "../header/headerForm";

import Logo from "../../../assets/images/logo.png";

interface IFormInput {
  email: string;
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
    },
  });

  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[520px] grid gap-6"
    >
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
                value: 20,
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
      <div className="pb-5">
        <Button type="submit" variant="contained" className="w-full">
          <p className="md:text-base">GỬI MAIL</p>
        </Button>
      </div>
    </form>
  );
};

export default function ForgotPassword() {
  return (
    <div className="flex">
      <div className={styles.bg}>
        <p className="text-2xl font-medium">CHÀO MỪNG ĐẾN VỚI</p>
        <h1 className="text-[44px] font-black">HỌC SIÊU DỄ - EASY LEARN</h1>
      </div>
      <div className="w-full px-4 min-h-screen flex flex-col justify-center items-center relative xl:w-[45%]">
        <HeaderForm
          linkLeft="/"
          linkRight="/sign-in"
          textLeft="Trang Chủ"
          textRight="Đăng Nhập"
        />
        <img src={Logo} alt="Logo" className="w-[150px]" />
        <p className="text-2xl font-bold my-10">QUÊN MẬT KHẨU</p>
        <Form />
      </div>
    </div>
  );
}
