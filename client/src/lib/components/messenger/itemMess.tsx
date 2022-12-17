
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AvatarDefaultIcon from "../../../assets/icons/avatar-default.svg";

interface IMess {
  item: {
    avatar: string;
    name: string;
    _id: string;
  };
}

const ItemMess = ({ item }: IMess) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/messenger/${item._id}`);
  };

  return (
    <div
      className="py-2 border-t flex items-center justify-between cursor-pointer md:py-4"
      onClick={handleClick}
      aria-hidden="true"
    >
      <div className="flex items-center gap-3 md:gap-4">
        <img
          src={item.avatar ? item.avatar : AvatarDefaultIcon}
          alt="Avatar"
          className="w-12 aspect-square rounded-full md:w-16"
        />
        <p className="font-bold md:text-lg">{item.name}</p>
      </div>
      <div className="flex items-center">
        <IconButton>
          <MoreHorizIcon
            sx={{
              color: "#23d2e2",
              fontSize: "2rem",
            }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default ItemMess;
