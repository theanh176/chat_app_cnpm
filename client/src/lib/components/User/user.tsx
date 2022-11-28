import React from "react";

import { Button } from "@mui/material";

import AvatarDefaultIcon from "../../../assets/icons/avatar-default.svg";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import PasswordRoundedIcon from "@mui/icons-material/PasswordRounded";

type Props = {};

const User = ({}: Props) => {
  const HeaderUser = () => {
    return (
      <>
        <div className="bg-banner h-[160px] bg-cover rounded-t-xl relative md:h-[250px]">
          <div className="absolute -bottom-10 w-full md:-bottom-20">
            <img
              src={AvatarDefaultIcon}
              alt=""
              className="w-[120px] object-cover rounded-full mx-auto border-4 border-white md:w-[200px] md:border-8"
            />
          </div>
        </div>
        <p className="font-bold text-xl mt-10 text-center md:mt-[90px] md:text-3xl">Ngoc Phuong</p>
      </>
    );
  };

  const BodyUser = () => {
    return (
      <div className="px-4 md:px-[160px]">
        <p className="font-bold md:text-2xl">Profile</p>
        <table className="table-fixed my-3 md:my-5">
          <tbody>
            <tr>
              <td className='md:text-xl'>Phone: </td>
              <td className="pl-10 md:text-xl md:pl-20">0799128035</td>
            </tr>
            <tr>
              <td className='md:text-xl'>Sex: </td>
              <td className="pl-10 md:text-xl md:pl-20">Man</td>
            </tr>
            <tr>
              <td className='md:text-xl'>Email: </td>
              <td className="pl-10 md:text-xl md:pl-20">ngocphuong1805@gmail.com</td>
            </tr>
            <tr>
              <td className='md:text-xl'>Birthday: </td>
              <td className="pl-10 md:text-xl md:pl-20">01/01/2001</td>
            </tr>
          </tbody>
        </table>
        <div className='flex flex-col gap-2 md:gap-5 max-w-[480px] mx-auto md:flex-row'>
          <Button className="w-full">
            <DriveFileRenameOutlineIcon />
            <p className="ml-1">Change Profile</p>
          </Button>
          <Button className="w-full">
            <PasswordRoundedIcon />
            <p className="ml-1">Change Password</p>
          </Button>
        </div>
      </div>
    );
  };

  const Exit = () => {
    return (
      <div className="absolute bottom-4 left-4 right-4 max-w-[480px] mx-auto">
        <Button
          className="w-full"
          sx={{
            backgroundColor: "#eb0014",
          }}
        >
          <LogoutRoundedIcon />
          <p className="ml-2">Exit</p>
        </Button>
      </div>
    );
  };

  return (
    <div className="bg-white relative rounded-xl h-[calc(100vh-140px)] max-w-[900px] mx-auto md:h-[calc(100vh-100px)]">
      <HeaderUser />
      <BodyUser />
      <Exit />
    </div>
  );
};

export default User;
