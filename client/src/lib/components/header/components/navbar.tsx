import { Button, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { Fragment, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Close from "../../../../assets/icons/close.svg";
import Menu from "../../../../assets/icons/Menu.svg";
import Search from "../../../../assets/icons/search.svg";
import LogoTextDesktop from "../../../../assets/images/logo-text.png";
import LogoDesktop from "../../../../assets/images/logo.png";
import { useBreakPoint } from "../../../../hooks/useBreakPoint";
interface IFormInput {
  search: string;
}

const Form = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[520px] grid gap-6"
    >
      <Controller
        name="search"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            error={errors.search ? true : false}
            helperText={errors.search?.message}
            variant="outlined"
            label="Tìm kiếm"
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "white",
                background: "#4e4ac8",
                border: "none",
              },
              "& .MuiInputLabel-root": {
                color: "white",
                border: "none",
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: "none",
                  color: "white",
                },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
                color: "white",
              },
            }}
            placeholder="Nhập từ khóa tìm kiếm"
            {...register("search", {
              required: "Vui lòng nhập từ khóa tìm kiếm !",
              maxLength: {
                value: 20,
                message: "Từ khóa tìm kiếm không được quá 20 ký tự !",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Từ khóa tìm kiếm không hợp lệ !",
              },
            })}
            InputProps={{
              endAdornment: <img src={Search} alt="search" />,
            }}
          />
        )}
      />
    </form>
  );
};

export default function NavBar() {
  const { isDesktop } = useBreakPoint();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Fragment>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#615dfa",
          boxShadow: "none",
        }}
        className="sm:h-20 h-14"
      >
        <Toolbar>
          <div className="w-full items-center grid md:grid-cols-3 grid-cols-2 gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-start">
                <img src={LogoDesktop} alt="logo" width={80} height={80} />
                <img
                  src={LogoTextDesktop}
                  alt="logo"
                  width={100}
                  height={100}
                  className="object-contain hidden md:flex"
                />
              </div>
              <div className="flex md:justify-end lg:justify-center xl:justify-start items-center">
                <IconButton>
                  <img src={Menu} alt="menu" />
                </IconButton>
              </div>
            </div>
            <div className="justify-center hidden md:flex">
              <Form />
            </div>
            <div className="flex justify-end">
              {!isDesktop && (
                <IconButton
                  onClick={() => {
                    setShowSearch(!showSearch);
                  }}
                >
                  {!showSearch ? (
                    <img src={Search} alt="search" width={20} height={20} />
                  ) : (
                    <img src={Close} alt="search" width={20} height={20} />
                  )}
                </IconButton>
              )}
              <Button
                href="/sign-in"
                sx={{
                  backgroundColor: "#23d2e2",
                  padding: "8px 16px",
                  " &:hover": {
                    backgroundColor: "#1bc5d4",
                  },
                }}
              >
                Login
              </Button>
            </div>
          </div>
          {showSearch && (
            <div
              style={{
                position: "absolute",
                zIndex: 100,
                left: "30%",
                transition: "all 0.5s ease",
              }}
            >
              <Form />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}
