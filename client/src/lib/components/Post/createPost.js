import React, { useState } from "react";
import {
  Button,
  TextField,
  IconButton,
  Dialog,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import { useForm, Controller } from "react-hook-form";
import { CreatePostApi } from "../../../api/postApi";

import Avatar from "../../../assets/images/avatar.jpg";
import ExitIcon from "../../../assets/icons/cross.svg";
import PictureIcon from "../../../assets/icons/picture.svg";

const subjectList = [
  {
    id: "Toán",
    name: "Toán",
  },
  {
    id: "Văn",
    name: "Văn",
  },
  {
    id: "Lý",
    name: "Lý",
  },
  {
    id: "Hóa",
    name: "Hóa",
  },
  {
    id: "Sinh",
    name: "Sinh",
  },
  {
    id: "Sử",
    name: "Sử",
  },
  {
    id: "Địa",
    name: "Địa",
  },
  {
    id: "GDCD",
    name: "GDCD",
  },
  {
    id: "Tiếng Anh",
    name: "Tiếng Anh",
  },
  {
    id: "Khác",
    name: "Khác",
  },
];

const pointList = [
  {
    id: 10,
    name: "10",
  },
  {
    id: 20,
    name: "20",
  },
  {
    id: 50,
    name: "50",
  },
  {
    id: 100,
    name: "100",
  },
];

const ClassList = () => {
  const classList = [];
  for (let i = 1; i <= 12; i++) {
    classList.push({
      id: `Lớp ${i}`,
      name: `Lớp ${i}`,
    });
  }
  return classList;
};

const Form = () => {
  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      content: "",
      image: "",
      iclass: "",
      subject: "",
      point_post: "",
    },
  });

  const onSubmit = async (data) => {
    const postResult = await CreatePostApi(data);
    console.log(postResult);
  };

  const [file, setFile] = useState(null);

  const handleChangeImage = (e) => {
    if (e.target.files.length > 0) {
      const src = URL.createObjectURL(e.target.files[0]);
      setFile(src);
      
      // setValue("image", e.target.files[0]);


    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 md:mt-8">
      <Controller
        name="content"
        control={control}
        render={({ field }) => {
          return (
            <TextField
              {...field}
              {...register("content", {
                required: "Vui lòng nhập nội dung!",
              })}
              placeholder="Nội dung bài viết"
              multiline
              rows={4}
              fullWidth
              variant="standard"
              helperText={errors.content?.message}
              sx={{
                "&. MuiFormHelperText": {
                  color: "#d32f2f",
                },
              }}
            />
          );
        }}
      />

      {file && (
        <div className="max-h-[500px] mt-4">
          <img src={file} alt="file" className="w-full" />
        </div>
      )}

      <div className="flex gap-2 mt-4 md:mt-8 md:gap-4">
        <Controller
          name="iclass"
          control={control}
          render={({ field }) => {
            return (
              <FormControl
                fullWidth
                error={errors.iclass ? true : false}
                {...register("iclass", {
                  required: "Vui lòng chọn!",
                })}
              >
                <InputLabel id="demo-simple-select-label">Lớp</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  label="Lớp"
                  {...field}
                  sx={{
                    textAlign: "left",
                  }}
                >
                  {ClassList().map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{errors.iclass?.message}</FormHelperText>
              </FormControl>
            );
          }}
        />
        <Controller
          name="subject"
          control={control}
          render={({ field }) => {
            return (
              <FormControl
                fullWidth
                error={errors.iclass ? true : false}
                {...register("subject", {
                  required: "Vui lòng chọn!",
                })}
              >
                <InputLabel id="demo-simple-select-label">Môn Học</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  label="Môn học"
                  {...field}
                  sx={{
                    textAlign: "left",
                  }}
                >
                  {subjectList.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{errors.subject?.message}</FormHelperText>
              </FormControl>
            );
          }}
        />
        <Controller
          name="point_post"
          control={control}
          render={({ field }) => {
            return (
              <FormControl
                fullWidth
                error={errors.iclass ? true : false}
                {...register("point_post", {
                  required: "Vui lòng chọn!",
                })}
              >
                <InputLabel id="demo-simple-select-label">Điểm</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  label="Điểm"
                  {...field}
                  sx={{
                    textAlign: "left",
                  }}
                >
                  {pointList.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{errors.point_post?.message}</FormHelperText>
              </FormControl>
            );
          }}
        />
      </div>
      <div className="flex p-4 justify-between items-center border rounded-xl mt-4 md:mt-8">
        <p className="font-bold">Thêm vào bài viết của bạn: </p>
        <IconButton>
          <label for="upload-photo">
            <img src={PictureIcon} alt="img-icon" className="w-5 md:w-7" />
          </label>
          <input
            type="file"
            id="upload-photo"
            accept=".jpg, .jpeg, .png"
            hidden
            onChange={handleChangeImage}
          />
        </IconButton>
      </div>
      <div className="flex justify-center mt-4 md:mt-8">
        <Button type="submit" autoFocus className="w-full md:max-w-[160px]">
          <p className="px-4">Đăng Câu Hỏi</p>
        </Button>
      </div>
    </form>
  );
};

const CreatePost = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { isMobile } = useBreakPoint();

  return (
    <div className="flex mt-4 gap-2 items-center p-4 bg-white rounded-xl md:gap-4 md:p-5">
      <img
        src={Avatar}
        alt="avatar"
        className="w-10 h-10 rounded-full md:w-[60px] md:h-[60px]"
      />
      <TextField
        placeholder="Đăng bài viết mới"
        fullWidth
        onClick={handleOpen}
      ></TextField>

      <Dialog
        fullScreen={isMobile ? true : false}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        classes={{ paper: "w-full max-w-[600px] px-4 md:px-8" }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            padding: "16px 0",
          }}
          classes={{
            root: "flex justify-between items-center border-b border-gray-200",
          }}
        >
          <div />
          <p className="font-bold">Tạo Bài Viết</p>
          <IconButton onClick={handleClose}>
            <img src={ExitIcon} alt="exit" className="w-4 md:w-5" />
          </IconButton>
        </DialogTitle>
        <DialogContent
          sx={{
            marginTop: "20px",
            paddingLeft: 0,
            paddingRight: 0,
            border: 0,
          }}
        >
          <Form />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreatePost;
