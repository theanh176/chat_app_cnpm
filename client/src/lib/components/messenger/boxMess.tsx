import AvatarDefaultIcon from "../../../assets/icons/avatar-default.svg";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import { TextField, IconButton, Popover } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toggleInfo } from "../../../store";
import useBoxChat from "./useBoxChat";
import Loading from "../Loading/loading";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { SendMessage } from "../../../api/messageApi";
import useDialogInfo from "../DialogInfo/useDialogInfo";
import Swal from "sweetalert2";

import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import SelectIcon from "../../../assets/icons/select.svg";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

interface IMessage {
  isuser: boolean;
  content: string;
  createdAt: string;
  userId: string;
  messageId: string;
}

interface IBoxMess {
  user: string;
  content: string;
  createdAt: string;
  userId: string;
  _id: string;
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

  const { mutate } = useMutation(SendMessage, {});

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

const ItemMess = ({ isuser, content, createdAt, userId, messageId }: IMessage) => {
  const { dataFriend } = useDialogInfo(userId);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const {handleDeleteMessage, deleteMessageData} = useBoxChat('');

  const deleteMessage = () => {
    Swal.fire({
      title: "Do you want to delete this message?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Delete`,
      cancelButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        handleDeleteMessage(messageId);
        Swal.fire("Deleted!", "", "success");
      }
    });
  };

  const ItemLeft = () => {
    return (
      <div className="flex items-center my-[2px] gap-1 relative md:gap-2  md:my-4">
        <img
          src={AvatarDefaultIcon}
          alt="avatar"
          className="w-10 h-10 rounded-full md:w-12 md:h-12"
        />
        <p className="absolute -top-3 left-16 font-bold text-xs">
          {dataFriend?.name}
        </p>

        <div className="px-2 py-1 text-sm bg-primary-wash rounded-xl max-w-[70%] md:px-4 md:py-2 md:text-base md:rounded-3xl">
          {content}
        </div>
      </div>
    );
  };

  const ItemRight = () => {
    return (
      <div
        className="flex items-center gap-1 my-[2px] justify-end md:gap-2 md:my-1"
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
      >
        {isHovering && (
          <div
            className="flex items-center justify-center gap-2 cursor-pointer"
            onClick={deleteMessage}
            aria-hidden="true"
          >
            <ClearRoundedIcon
              fontSize="small"
              sx={{
                color: "#e32124",
              }}
            />
          </div>
        )}
        <div className="px-2 py-1 bg-primary text-sm text-white rounded-xl max-w-[70%] md:px-4 md:py-2 md:text-base md:rounded-3xl">
          {content}
        </div>
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
    const FetchData = async () => {
      if (id) {
        socket.emit("joinchat", { user_id: user?.user?._id, room: id });
        socket.on("message", async (data: any) => {
          await setLoad(true);
        });
      }
    };
    FetchData();
    return () => {
      if (id) socket.emit("leaveChat", { room: id });
    };
  }, [id, socket, user?.user?._id, setLoad]);

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
              ListUserOnChannel?.length === 2 && infoParner[0]?.avatar
                ? infoParner[0]?.avatar
                : AvatarDefaultIcon
            }
            alt="avatar"
            className="w-10 h-10 rounded-full md:w-14 md:h-14"
          />
          <p className="font-bold md:text-xl">
            {ListUserOnChannel?.length === 2 ? infoParner[0]?.name : infoChannelData?.data?.name}
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
      <div className="h-full overflow-y-scroll pt-4">
        {loadingMessage && <Loading />}
        {messageData?.data?.map((item: IBoxMess, index: number) => (
          <ItemMess
            key={index}
            isuser={handleIsUser(item?.user)}
            content={item.content}
            createdAt={item.createdAt}
            userId={item.user}
            messageId={item._id}
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

  const EmptyScreen = () => {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <img src={SelectIcon} alt="empty" className="w-[20%] mt-20" />
        <p className="text-2xl font-bold mt-10">
          Please select the person to message
        </p>
      </div>
    );
  };

  return (
    <div className="bg-white grid grid-rows-[auto,1fr,auto] w-full rounded-xl p-4 h-[calc(100vh-140px)] md:h-[calc(100vh-100px)] md:mr-4">
      {id ? (
        <>
          <HeaderBox />
          <ChatArea />
          <BottomBox />
        </>
      ) : (
        <EmptyScreen />
      )}
    </div>
  );
};

export default BoxMess;
