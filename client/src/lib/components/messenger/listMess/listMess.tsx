import {
  Box,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SearchIcon from "../../../../assets/icons/search_purple.svg";
import BasicModal from "../../CustomMui/modalCreateChat";
import { useBreakPoint } from "../../../../hooks/useBreakPoint";
import ItemMess from "../itemMess";

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
    <form onSubmit={handleSubmit(onSubmit)} className="w-full md:mb-5">
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
            className="w-full"
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "black",
                background: "white",
                borderRadius: "99px",
              },
              "& .MuiInputLabel-root": {
                color: "black",
                border: "none",
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  color: "black",
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
              endAdornment: <img src={SearchIcon} alt="search" />,
            }}
          />
        )}
      />
    </form>
  );
};

interface Props {
  ShowListMess: any;
}
const ListMess = ({ ShowListMess }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { isMobile } = useBreakPoint();

  return (
    <div className=" bg-white p-4 rounded-xl md:mx-4 md_mb-4 md:min-w-[25%] h-[calc(100vh-140px)] md:h-[calc(100vh-100px)]">
      <BasicModal open={open} handleClose={handleClose} />
      <div className="pb-5">
        <p className="font-bold text-2xl text-center pb-5">Message</p>
        <Form />
      </div>
      <div className="overflow-scroll h-[80%] scrollBehavior bg-white">
        <ItemMess name="Phuong" avatar="A" id="1" />
        <ItemMess name="Phuong" avatar="A" id="2" />
        <ItemMess name="Phuong" avatar="A" id="31" />
        <ItemMess name="Phuong" avatar="A" id="331" />
        <ItemMess name="Phuong" avatar="A" id="341" />
        <ItemMess name="Phuong" avatar="A" id="11" />
        <ItemMess name="Phuong" avatar="A" id="122" />
      </div>
    </div>
  );
};

export default ListMess;
