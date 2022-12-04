import React, { useCallback } from "react";
import { useMutation } from "react-query";
import { SignInApi } from "../../../api/authApi";

interface IFormInput {
  username: string;
  password: string;
}

const useSignIn = () => {
  const { data : loginRes, isLoading, error, mutate } = useMutation('signInApi', SignInApi);

  const handleSubmitForm = useCallback(
    async (dataForm: IFormInput) => {
        await mutate(dataForm);
    },
    [mutate]
  );

  return { loginRes, isLoading, error, handleSubmitForm };
};

export default useSignIn;
