import React from "react";

type Props = {
  name: string;
  school: string;
  birthday: string;
  sex: string;
  address: string;
  phone: string;
};

export default function AboutPage({
  name,
  school,
  birthday,
  sex,
  address,
  phone,
}: Props) {
  return (
    <div className="bg-white py-8 px-6 rounded-xl">
      <p className="font-bold text-lg">Thông Tin Cá Nhân</p>
      <div className="flex flex-col gap-6 text-sm mt-9">
        <div className="text-sm">
          <p className="font-bold">Họ Và Tên</p>
          <p className="mt-2">{name}</p>
        </div>
        <div className="text-sm">
          <p className="font-bold ">Trường</p>
          <p className="mt-2">{school}</p>
        </div>
        <div className="text-sm">
          <p className="font-bold">Ngày Sinh</p>
          <p className="mt-2">{birthday}</p>
        </div>
        <div className="text-sm">
          <p className="font-bold">Giới Tính</p>
          <p className="mt-2">{sex}</p>
        </div>
        <div className="text-sm">
          <p className="font-bold">Địa Chỉ</p>
          <p className="mt-2">{address}</p>
        </div>
        <div className="text-sm">
          <p className="font-bold">Số Điện Thoại</p>
          <p className="mt-2">{phone}</p>
        </div>
      </div>
    </div>
  );
}
