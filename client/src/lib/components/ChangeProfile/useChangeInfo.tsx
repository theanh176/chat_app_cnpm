import { useCallback } from "react";
import { useMutation } from "react-query";
import { UpdateInfo } from "../../../api/usersApi";

interface IFormInput {
	name: string;
	birthday: string;
	gender: string;
	address: string;
	job: string;
	// images: string;
}

const useChangeInfo = () => {
	const {
		data: changeInfoRes,
		isLoading,
		error,
		mutate,
	} = useMutation("updateInfo", UpdateInfo);

	const handleSubmitForm = useCallback(
		async (dataForm: IFormInput) => {
			await mutate(dataForm);
		},
		[mutate]
	);

	return { changeInfoRes, isLoading, error, handleSubmitForm };
};

export default useChangeInfo;
