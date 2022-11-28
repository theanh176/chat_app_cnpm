import React from "react";

import AvatarDefaultIcon from "../../../assets/icons/avatar-default.svg";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import { TextField, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toggleInfo } from "../../../store";

import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import CollectionsRoundedIcon from "@mui/icons-material/CollectionsRounded";
import SentimentVerySatisfiedRoundedIcon from "@mui/icons-material/SentimentVerySatisfiedRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

type Props = {};

interface IFormInput {
  content: string;
}

interface IMessage {
  user: string;
  content: string;
  createdAt: string;
}

const FormChat = ({}: Props) => {
  const { isMobile } = useBreakPoint();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full items-center md:gap-4"
    >
      <Controller
        name="content"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            variant="outlined"
            placeholder="Nhập nội dung..."
            fullWidth={true}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "9999px",
              },
              "& .MuiOutlinedInput-input": {
                padding: isMobile ? "10px 20px" : "16px 32px",
              },
            }}
          />
        )}
      />
      <IconButton type="submit">
        <SendRoundedIcon
          classes={{
            root: "text-primary",
          }}
          fontSize={isMobile ? "medium" : "large"}
        />
      </IconButton>
    </form>
  );
};

const ItemMess = ({ user, content, createdAt }: IMessage) => {
  const ItemLeft = () => {
    return (
      <div className="flex items-center my-[2px] gap-1 md:gap-2 md:my-1">
        <img
          src={AvatarDefaultIcon}
          alt="avatar"
          className="w-10 h-10 rounded-full md:w-12 md:h-12"
        />
        <div className="px-2 py-1 text-sm bg-primary-wash rounded-xl max-w-[70%] md:px-4 md:py-2 md:text-base md:rounded-3xl">
          {content}
        </div>
      </div>
    );
  };

  const ItemRight = () => {
    return (
      <div className="flex items-center gap-1 my-[2px] justify-end md:gap-2 md:my-1">
        <div className="px-2 py-1 bg-primary text-sm text-white rounded-xl max-w-[70%] md:px-4 md:py-2 md:text-base md:rounded-3xl">
          {content}
        </div>
        <img
          src={AvatarDefaultIcon}
          alt="avatar"
          className="w-10 h-10 rounded-full md:w-12 md:h-12"
        />
      </div>
    );
  };

  return user === "1" ? <ItemLeft /> : <ItemRight />;
};

const BoxMess = ({}: Props) => {
  const { isMobile, isDesktop } = useBreakPoint();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const HeaderBox = () => {
    const handleBack = () => {
      navigate("/");
    };

    const handleClickInfo = () => {
      dispatch(toggleInfo());
    };

    return (
      <div className="flex justify-between pb-3 border-b md:pb-4">
        <div className="flex gap-2 items-center">
          {isMobile && (
            <IconButton onClick={handleBack}>
              <ChevronLeftRoundedIcon />
            </IconButton>
          )}
          <img
            src={AvatarDefaultIcon}
            alt="avatar"
            className="w-10 h-10 rounded-full md:w-14 md:h-14"
          />
          <p className="font-bold md:text-xl">Your Name</p>
        </div>
        <IconButton>
          <InfoRoundedIcon
            classes={{
              root: "text-primary md:w-10 md:h-10",
            }}
            fontSize={isMobile ? "medium" : "large"}
            onClick={handleClickInfo}
          />
        </IconButton>
      </div>
    );
  };

  const ChatArea = () => {
    return (
      <div className="h-full overflow-scroll">
        <ItemMess
          user="1"
          content="1 Copy paste data relevant to your system into the training data box more text will produce more realistic results 2 Choose how many words of nonsensical but real-looking text you need "
          createdAt="12:00"
        />
        <ItemMess user="0" content="Hello" createdAt="12:00" />
        <ItemMess user="1" content="Hello" createdAt="12:00" />
        <ItemMess user="1" content="Hello" createdAt="12:00" />
        <ItemMess user="1" content="Hello" createdAt="12:00" />
        <ItemMess
          user="0"
          content="1 Copy paste data relevant to your system into the training data box more text will produce more realistic results 2 Choose how many words of nonsensical but real-looking text you need "
          createdAt="12:00"
        />
        <ItemMess
          user="0"
          content="1 Copy paste data relevant to your system into the training data box more text will produce more realistic results 2 Choose how many words of nonsensical but real-looking text you need "
          createdAt="12:00"
        />
        <ItemMess
          user="0"
          content="1 Copy paste data relevant to your system into the training data box more text will produce more realistic results 2 Choose how many words of nonsensical but real-looking text you need "
          createdAt="12:00"
        />
      </div>
    );
  };

  const BottomBox = () => {
    return (
      <div className="flex items-center border-t pt-3 md:pt-4 md:gap-4">
        <IconButton>
          <CollectionsRoundedIcon
            classes={{
              root: "text-primary",
            }}
            fontSize={isMobile ? "medium" : "large"}
          />
        </IconButton>
        <FormChat />
      </div>
    );
  };

  return (
    <div className="bg-white grid grid-rows-[auto,1fr,auto] rounded-xl p-4 h-[calc(100vh-140px)] md:h-[calc(100vh-100px)] md:mr-4">
      <HeaderBox />
      <ChatArea />
      <BottomBox />
    </div>
  );
};

export default BoxMess;
