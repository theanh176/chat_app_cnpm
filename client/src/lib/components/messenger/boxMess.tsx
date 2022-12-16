import AvatarDefaultIcon from "../../../assets/icons/avatar-default.svg";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import { TextField, IconButton } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toggleInfo } from "../../../store";
import useBoxChat from "./useBoxChat";
import Loading from "../Loading/loading";
import useSendMessage from "./useSendMess";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { SendMessage } from "../../../api/messageApi";

import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
interface IFormInput {
  content: string;
}

interface IMessage {
  isuser: boolean;
  content: string;
  createdAt: string;
}

interface IBoxMess {
  user: string;
  content: string;
  createdAt: string;
}

type FormValues = {
  content: string;
  id: string;
};

const FormChat = () => {
  const { isMobile } = useBreakPoint();
  const { id } = useParams();
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      content: "",
      id: id,
    },
  });

  const { mutate } = useMutation(SendMessage, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const socket = useSelector((state: any) => state.socket.socket);

  const handleSendMess = (data: any) => {
    socket.emit("sendMessage", { message: data?.content, room: id });
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSendMess)}
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
      {/* <B type="submit">
        <SendRoundedIcon
          classes={{
            root: "text-primary",
          }}
          fontSize={isMobile ? "medium" : "large"}
        />
      </B> */}
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

const ItemMess = ({ isuser, content, createdAt }: IMessage) => {
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

  return isuser ? <ItemRight /> : <ItemLeft />;
};

const BoxMess = () => {
  const { isMobile } = useBreakPoint();

  const navigate = useNavigate();

  const { id } = useParams();

  const dispatch = useDispatch();

  const socket = useSelector((state: any) => state.socket.socket);

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const [load, setLoad] = useState(false);

  const {
    infoChannelData,
    loadingInfoChannel,
    messageData,
    loadingMessage,
    refetch,
  } = useBoxChat(id ? id : "");
  const ListUserOnChannel = infoChannelData?.data?.user;

  //get info partner
  const infoParner = ListUserOnChannel?.filter(
    (item: any) => item._id !== user?.user?._id
  );

  //check is user
  const handleIsUser = (idCheck: string) => {
    return idCheck === user?.user?._id;
  };

  // declare joinchat on socket
  useEffect(() => {
    if (id) {
      socket.emit("joinchat", { user_id: user?.user?._id, room: id });
    }
  }, [id, socket, user?.user?._id]);

  // declare message
  useEffect(() => {
    socket.on("message", async (data: any) => {
      data && setLoad(true);
    });
  }, [socket]);

  // fetch message when load is true
  useEffect(() => {
    if (load) {
      refetch();
      setLoad(false);
    }
  }, [load, refetch]);

  const HeaderBox = () => {
    const handleBack = () => {
      navigate("/");
    };

    const handleClickInfo = () => {
      dispatch(toggleInfo());
    };

    return (
      <div className="flex justify-between pb-3 border-b md:pb-4">
        {loadingInfoChannel && <Loading />}
        <div className="flex gap-2 items-center">
          {isMobile && (
            <IconButton onClick={handleBack}>
              <ChevronLeftRoundedIcon />
            </IconButton>
          )}
          <img
            src={
              ListUserOnChannel?.length === 2
                ? infoParner[0]?.avatar
                : AvatarDefaultIcon
            }
            alt="avatar"
            className="w-10 h-10 rounded-full md:w-14 md:h-14"
          />
          <p className="font-bold md:text-xl">
            {ListUserOnChannel?.length === 2 ? infoParner[0]?.name : "Nhóm"}
          </p>
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
      <div className="h-full overflow-y-scroll">
        {loadingMessage && <Loading />}
        {messageData?.data?.map((item: IBoxMess, index: number) => (
          <ItemMess
            key={index}
            isuser={handleIsUser(item?.user)}
            content={item.content}
            createdAt={item.createdAt}
          />
        ))}
      </div>
    );
  };

  const BottomBox = () => {
    return (
      <div className="flex items-center border-t pt-3 md:pt-4 md:gap-4">
        <FormChat />
      </div>
    );
  };

  return (
    <div className="bg-white grid grid-rows-[auto,1fr,auto] w-full rounded-xl p-4 h-[calc(100vh-140px)] md:h-[calc(100vh-100px)] md:mr-4">
      <HeaderBox />
      <ChatArea />
      <BottomBox />
    </div>
  );
};

export default BoxMess;
