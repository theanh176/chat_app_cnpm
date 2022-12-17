import React, { useCallback, useEffect } from "react";
import { useMutation } from "react-query";
import { UpdateInfo } from "../../../api/usersApi";

interface IFormInput {
	name: string;
	birthday: string;
	gender: string;
	address: string;
	job: string;
}

const useChangeProfile = () => {
	const {
		data: changeProfileRes,
		isLoading,
		error,
		mutate,
	} = useMutation("changeProfileApi", UpdateInfo);

	const handleSubmitForm = useCallback(
		async (dataForm: IFormInput) => {
			await mutate(dataForm);
		},
		[mutate]
	);

	return { changeProfileRes, isLoading, error, handleSubmitForm };
};

export default useChangeProfile;
