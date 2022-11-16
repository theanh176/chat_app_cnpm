import React from "react";
import { COLORFIELD } from "../../../helper/const";
import ErrorImg from "../../../assets/images/404.png";
import { Button } from "@mui/material";

type Props = {
  // id: string
  // content: string
};

export default function PageNotFound({}: Props) {
  return (
    <div className="bg-[#f8f8fb] min-h-screen">
      <div className="flex flex-col justify-center mx-4 items-center pt-8 md:pt-16">
        <img src={ErrorImg} alt="404" />
        <p className={`text-[104px] font-bold mt-9 text-[#615dfa]`}>404</p>
        <p className="text-xl font-bold mt-3">
          OOPS!!... Trang không tồn tại!!
        </p>
        <p className="font-medium text-center mt-9">
          Nếu website có vấn đề vui lòng liên hệ với đội ngũ của chúng tôi tại:{" "}
        </p>
        <p className="font-bold text-center mt-2 underline text-[#615dfa] mb-8">
          hocsieude.hotro@gmail.com
        </p>
        <Button href="/" className="w-full md:max-w-[420px]">
          Go Home
        </Button>
      </div>
    </div>
  );
}
