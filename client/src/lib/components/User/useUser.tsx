import React from "react";
import { useQuery } from "react-query";
import { GetMyInfo } from "../../../api/usersApi";

export const GetUser = () => {
  const { data, isLoading, error } = useQuery("user", () => GetMyInfo());

  const dataUser = data?.data;

  return { dataUser, isLoading, error };
};
