import React from "react";

type Props = {
  content: string;
  grade: string;
  dateJoined: string;
  location: string;
};

export default function About({ content, grade, dateJoined, location }: Props) {
  return (
    <div className="bg-white py-8 px-6 rounded-xl">
      <p className="font-bold">Giới Thiệu</p>
      <p className="pt-9">{content}</p>
      <table className="mt-6 table-auto w-full">
        <tr className="font-medium">
          <td className="text-[#8f91ac] ">Lớp</td>
          <td>{grade}</td>
        </tr>
        <tr className="font-medium">
          <td className="text-[#8f91ac]">Ngày Tham Gia</td>
          <td>{dateJoined}</td>
        </tr>
        <tr className="font-medium">
          <td className="text-[#8f91ac]">Địa Chỉ</td>
          <td>{location}</td>
        </tr>
      </table>
    </div>
  );
}
