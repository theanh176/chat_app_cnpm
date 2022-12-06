import { useCallback } from "react";
import { useMutation } from "react-query";
import { ChangePasswordApi } from "../../../api/authApi";

interface IFormInput {
	password: string;
	newpassword: string;
}

const useChangePass = () => {
	const {
		data: changePassRes,
		isLoading,
		error,
		mutate,
	} = useMutation("changePasswordApi", ChangePasswordApi);

	const handleSubmitForm = useCallback(
		async (dataForm: IFormInput) => {
            console.log(dataForm);
			await mutate(dataForm);
		},
		[mutate]
	);

	return { changePassRes, isLoading, error, handleSubmitForm };
};

export default useChangePass;
