import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
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

import Visibility from "../../../assets/icons/visibility.svg";
import VisibilityOff from "../../../assets/icons/visibility-off.svg";

interface isShow {
  isShow: boolean;
}

const Form = () => {
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

  //toggle show password
  const [isShowPass, setIsShowPass] = useState(false);

  //toggle show new password
  const [isShowNewPass, setIsShowNewPass] = useState(false);

  return (
    <div className="w-full max-w-[520px] mt-10">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="grid gap-6"
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
                      onClick={() => setIsShowPass(!isShowPass)}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {isShowPass ? (
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
              <InputLabel htmlFor="newpassword">New Password</InputLabel>
              <OutlinedInput
                id="newpassword"
                {...field}
                type={isShowNewPass ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle newpassword visibility"
                      onClick={()=>setIsShowNewPass(!isShowNewPass)}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {isShowNewPass ? (
                        <img src={VisibilityOff} alt="Visibility-Off" />
                      ) : (
                        <img src={Visibility} alt="Visibility" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="New Password"
              />
              <FormHelperText>{errors.newpassword?.message}</FormHelperText>
            </FormControl>
          )}
        />
        <div className="pb-5">
          <Button type="submit" variant="contained" className="w-full">
            <p className="md:text-base">Conform</p>
          </Button>
        </div>
      </form>
    </div>
  );
};

const ChangePass = ({ isShow }: isShow) => {
  const { isMobile } = useBreakPoint();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen={isMobile ? true : false}
      classes={{
        paper: "p-4",
      }}
    >
      <div className="text-2xl font-bold text-center">Forgot Password</div>
      <div className="text-sm mt-4">
        To change your password, please enter your current password and a new
        password!
      </div>
      <Form />
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChangePass;
