import React, { useCallback, useEffect } from "react";
import { useMutation } from "react-query";
import { SignUpApi } from "../../../api/authApi";
import { useDispatch } from "react-redux";

interface IFormInput {
  email: string;
  name: string;
  gender: string;
  phone: string;
  birthday: string;
  password: string;
}

const useSignUp = () => {
  const {
    data: signUpRes,
    isLoading,
    error,
    mutate,
  } = useMutation("signUpApi", SignUpApi);

  const handleSubmitForm = useCallback(
    async (dataForm: IFormInput) => {
      await mutate(dataForm);
    },
    [mutate]
  );

  return { signUpRes, isLoading, error, handleSubmitForm };
};

export default useSignUp;
